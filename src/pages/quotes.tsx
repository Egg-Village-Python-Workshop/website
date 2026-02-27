import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WarRoom from '@site/src/components/Quotes/WarRoom';

// --- Components ---

function TradingViewWidget({ symbol }: { symbol: string }) {
  const { siteConfig } = useDocusaurusContext();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(getTheme());
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scriptId = 'tradingview-sdk';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initWidget = () => {
      if (window.TradingView && document.getElementById('tv-chart-container')) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": symbol,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": theme,
          "style": "1",
          "locale": "zh_TW",
          "toolbar_bg": theme === 'dark' ? '#1b1e1c' : '#f1f3f6',
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tv-chart-container"
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = siteConfig.customFields.tradingViewTvJs as string;
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }
  }, [symbol, theme, siteConfig.customFields.tradingViewTvJs]);

  return (
    <div key={`${symbol}-${theme}`} style={{ height: "70vh", minHeight: "500px", width: "100%", overflow: "hidden" }}>
      <div id="tv-chart-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

// --- Main Page ---

export default function Quotes(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [openSection, setOpenSection] = useState<'other' | 'taiwan'>('other');
  
  // ... (rest of states)

  // ... (rest of effects and handlers)

  const openTaiwanStock = (symbol: string) => {
    const url = `${siteConfig.customFields.anueTaiwanStockUrl}${symbol.trim()}/history`;
    window.open(url, '_blank');
  };

  const toggleSection = (clickedSection: 'other' | 'taiwan') => {
    if (openSection === clickedSection) {
      setOpenSection(clickedSection === 'other' ? 'taiwan' : 'other');
    } else {
      setOpenSection(clickedSection);
    }
  };

  const sectionStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '10px',
    overflow: 'hidden'
  };

  const headerStyle: React.CSSProperties = {
    padding: '15px 20px',
    background: 'var(--ifm-color-emphasis-200)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  const contentStyle: React.CSSProperties = {
    padding: '20px',
    display: 'block'
  };

  return (
    <Layout title="即時報價" description="即時報價頁面，包含國際市場與台股區">
      <main>
        <div className="container margin-vert--lg">
          <h1>即時報價系統</h1>
          
          <WarRoom />
          <div style={{ marginTop: '30px' }} />
          
          {/* Section: Other Regions */}
          <div style={sectionStyle}>
            <div style={headerStyle} onClick={() => toggleSection('other')}>
              <span>🌍 其他區 (國際市場)</span>
              <span>{openSection === 'other' ? '▼' : '▶'}</span>
            </div>
            {openSection === 'other' && (
              <div style={contentStyle}>
                <form 
                  onSubmit={(e) => { e.preventDefault(); setOtherSymbol(otherInput.trim().toUpperCase()); }}
                  style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
                >
                  <input
                    type="text"
                    list="fav-other-list"
                    value={otherInput}
                    onChange={(e) => setOtherInput(e.target.value)}
                    placeholder="輸入代號 (例如: TSLA, BINANCE:BTCUSDT)"
                    style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', flexGrow: 1 }}
                  />
                  <datalist id="fav-other-list">
                    {favOther.map(symbol => (
                      <option key={symbol} value={symbol} />
                    ))}
                  </datalist>
                  <button type="submit" className="button button--primary">搜尋</button>
                  <button 
                    type="button" 
                    className="button button--secondary"
                    onClick={() => toggleFavorite('other', otherSymbol)}
                    title="加入/移除我的最愛"
                    style={{ fontSize: '1.2rem', padding: '0 15px' }}
                  >
                    {favOther.includes(otherSymbol) ? '❤️' : '🤍'}
                  </button>
                </form>
                
                <BrowserOnly fallback={<div>載入中...</div>}>
                  {() => otherSymbol ? (
                    <TradingViewWidget symbol={otherSymbol} />
                  ) : (
                    <div style={{ 
                      height: "70vh", 
                      minHeight: "500px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      border: "1px dashed #ccc",
                      borderRadius: "8px",
                      color: "#666"
                    }}>
                      <h3>請輸入代號進行查詢 (例如: TSLA, BTCUSDT)</h3>
                    </div>
                  )}
                </BrowserOnly>
              </div>
            )}
          </div>

          {/* Section: Taiwan Stocks */}
          <div style={sectionStyle}>
            <div style={headerStyle} onClick={() => toggleSection('taiwan')}>
              <span>🇹🇼 台股區</span>
              <span>{openSection === 'taiwan' ? '▼' : '▶'}</span>
            </div>
            {openSection === 'taiwan' && (
              <div style={contentStyle}>
                <div style={{ marginBottom: '20px', padding: '20px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px' }}>
                  <p>台股查詢目前採取「外部跳轉」模式，以避開網頁封鎖限制。</p>
                  <form 
                    onSubmit={(e) => { e.preventDefault(); setTwSymbol(twInput.trim()); openTaiwanStock(twInput); }}
                    style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
                  >
                    <input
                      type="text"
                      list="fav-taiwan-list"
                      value={twInput}
                      onChange={(e) => setTwInput(e.target.value)}
                      placeholder="輸入台股代號 (例如: 2330, 2454)"
                      style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', flexGrow: 1 }}
                    />
                    <datalist id="fav-taiwan-list">
                      {favTaiwan.map(symbol => (
                        <option key={symbol} value={symbol} />
                      ))}
                    </datalist>
                    <button type="submit" className="button button--primary">前往報價</button>
                    <button 
                      type="button" 
                      className="button button--secondary"
                      onClick={() => toggleFavorite('taiwan', twInput)}
                      title="加入/移除我的最愛"
                      style={{ fontSize: '1.2rem', padding: '0 15px' }}
                    >
                      {favTaiwan.includes(twInput.trim().toUpperCase()) ? '❤️' : '🤍'}
                    </button>
                  </form>
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>提示：點選「前往報價」或搜尋框中的收藏標的將會開啟鉅亨網報價頁面。</p>
                </div>
                
                {favTaiwan.length > 0 && (
                  <div>
                    <h4 style={{ marginBottom: '10px' }}>快速收藏連結:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {favTaiwan.map(symbol => (
                        <button 
                          key={symbol} 
                          className="button button--outline button--primary"
                          onClick={() => openTaiwanStock(symbol)}
                        >
                          {symbol}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </main>
    </Layout>
  );
}

declare global {
  interface Window {
    TradingView: any;
  }
}
