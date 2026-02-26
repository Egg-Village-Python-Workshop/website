import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

// --- Components ---

function TradingViewWidget({ symbol }: { symbol: string }) {
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
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }
  }, [symbol, theme]);

  return (
    <div key={`${symbol}-${theme}`} style={{ height: "70vh", minHeight: "500px", width: "100%", overflow: "hidden" }}>
      <div id="tv-chart-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

function TaiwanStockWidget({ symbol }: { symbol: string }) {
  // Using Anue (鉅亨網) as a reliable Taiwan stock chart source
  const chartUrl = `https://invest.cnyes.com/twstock/TWS/${symbol}/history`;
  
  return (
    <div style={{ height: "75vh", minHeight: "600px", width: "100%", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
      <iframe 
        src={chartUrl} 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        title={`Taiwan Stock ${symbol}`}
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
}

// --- Main Page ---

export default function Quotes(): JSX.Element {
  const [openSection, setOpenSection] = useState<'other' | 'taiwan'>('other');
  
  // States for Other Regions
  const [otherInput, setOtherInput] = useState('NASDAQ:AAPL');
  const [otherSymbol, setOtherSymbol] = useState('NASDAQ:AAPL');
  const [favOther, setFavOther] = useState<string[]>([]);

  // States for Taiwan
  const [twInput, setTwInput] = useState('2330');
  const [twSymbol, setTwSymbol] = useState('2330');
  const [favTaiwan, setFavTaiwan] = useState<string[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedOther = localStorage.getItem('egg-quotes-fav-other');
      const savedTaiwan = localStorage.getItem('egg-quotes-fav-taiwan');
      if (savedOther) setFavOther(JSON.parse(savedOther));
      if (savedTaiwan) setFavTaiwan(JSON.parse(savedTaiwan));
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (key: string, list: string[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(list));
    }
  };

  const toggleFavorite = (type: 'other' | 'taiwan', symbol: string) => {
    if (type === 'other') {
      const newList = favOther.includes(symbol) 
        ? favOther.filter(s => s !== symbol) 
        : [...favOther, symbol];
      setFavOther(newList);
      saveFavorites('egg-quotes-fav-other', newList);
    } else {
      const newList = favTaiwan.includes(symbol) 
        ? favTaiwan.filter(s => s !== symbol) 
        : [...favTaiwan, symbol];
      setFavTaiwan(newList);
      saveFavorites('egg-quotes-fav-taiwan', newList);
    }
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
                  >
                    {favOther.includes(otherSymbol) ? '★' : '☆'}
                  </button>
                </form>

                <BrowserOnly fallback={<div>載入中...</div>}>
                  {() => <TradingViewWidget symbol={otherSymbol} />}
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
                <form 
                  onSubmit={(e) => { e.preventDefault(); setTwSymbol(twInput.trim()); }}
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
                  <button type="submit" className="button button--primary">搜尋</button>
                  <button 
                    type="button" 
                    className="button button--secondary"
                    onClick={() => toggleFavorite('taiwan', twSymbol)}
                    title="加入/移除我的最愛"
                  >
                    {favTaiwan.includes(twSymbol) ? '★' : '☆'}
                  </button>
                </form>

                <TaiwanStockWidget symbol={twSymbol} />
                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                  數據來源：鉅亨網 (Anue)。部分內容可能包含廣告。
                </p>
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
