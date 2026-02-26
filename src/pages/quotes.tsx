import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

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
    // Dynamically load tv.js for better stability in React
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

    // Cleanup is handled by React key remounting or manual clear
  }, [symbol, theme]);

  return (
    <div 
      key={`${symbol}-${theme}`}
      style={{ 
        height: "70vh", 
        minHeight: "600px", 
        width: "100%", 
        marginBottom: "20px",
        overflow: "hidden"
      }}
    >
      <div id="tv-chart-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function Quotes(): JSX.Element {
  const [searchInput, setSearchInput] = useState('NASDAQ:AAPL');
  const [activeSymbol, setActiveSymbol] = useState('NASDAQ:AAPL');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setActiveSymbol(searchInput.trim().toUpperCase());
    }
  };

  return (
    <Layout title="即時報價" description="即時報價頁面，串接 TradingView 數據">
      <main>
        <div className="container margin-vert--lg">
          <h1>即時報價</h1>
          
          <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="輸入代號 (例如: TSLA, BINANCE:BTCUSDT)"
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  flexGrow: 1,
                  fontSize: '16px'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '8px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: '#25c2a0',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                搜尋
              </button>
            </form>
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
              提示：支援 <code>EXCHANGE:SYMBOL</code> 格式，預設搜尋 NASDAQ。
            </p>
          </div>

          <BrowserOnly fallback={<div>載入圖表中...</div>}>
            {() => <TradingViewWidget symbol={activeSymbol} />}
          </BrowserOnly>
        </div>
      </main>
    </Layout>
  );
}
