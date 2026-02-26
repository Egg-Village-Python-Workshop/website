import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function TickerTape() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      const currentTheme = getTheme();
      setTheme(currentTheme);
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = document.getElementById('tv-ticker-tape-container');
    if (!container) return;

    // Clear previous widget
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
        { "proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100" },
        { "proName": "FOREXCOM:DJI", "title": "Dow Jones" },
        { "proName": "BINANCE:BTCUSDT", "title": "BTC/USDT" },
        { "proName": "BINANCE:ETHUSDT", "title": "ETH/USDT" },
        { "proName": "FX_IDC:USDCNH", "title": "USD/CNH" },
        { "proName": "TVC:NI225", "title": "Nikkei 225" },
        { "proName": "TVC:HSI", "title": "Hang Seng" },
        { "proName": "TVC:UKOIL", "title": "Brent Oil" },
        { "proName": "TVC:GOLD", "title": "Gold" }
      ],
      "showSymbolLogo": true,
      "colorTheme": theme,
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "zh_TW"
    });

    const timeoutId = setTimeout(() => {
      if (container) container.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (container) container.innerHTML = '';
    };
  }, [theme]);

  return (
    <div 
      key={theme}
      id="tv-ticker-tape-container" 
      className="tradingview-widget-container"
      style={{ minHeight: '46px' }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

function WantGooIndex() {
  return (
    <div style={{ 
      height: '40px', 
      overflow: 'hidden', 
      borderBottom: '1px solid var(--ifm-color-emphasis-300)',
      background: 'var(--ifm-background-color)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <iframe 
        src="https://www.wantgoo.com/widget/index/taiex" 
        width="100%" 
        height="150" // High height but parent hides most
        frameBorder="0" 
        scrolling="no"
        style={{ 
          marginTop: '-45px', // Shift to focus on the index values
          pointerEvents: 'none' // Prevent clicking into wantgoo from the mini-bar
        }}
      />
    </div>
  );
}

export default function MarketIndicesBar() {
  return (
    <div style={{ 
      marginBottom: '2rem', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid var(--ifm-color-emphasis-300)'
    }}>
      <WantGooIndex />
      <BrowserOnly fallback={<div style={{ height: '46px', background: 'var(--ifm-background-color)' }}>載入國際指數中...</div>}>
        {() => <TickerTape />}
      </BrowserOnly>
    </div>
  );
}
