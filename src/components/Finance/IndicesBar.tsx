import React, { useEffect, useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentContainer = containerRef.current;
    currentContainer.innerHTML = ''; // Clear previous

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

    // Delay script injection to prevent conflicts during React render cycle
    const timeoutId = setTimeout(() => {
      if (currentContainer) {
        currentContainer.appendChild(script);
      }
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [theme]);

  return (
    <div key={theme} className="tradingview-widget-container" ref={containerRef} style={{ minHeight: '46px' }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default function MarketIndicesBar() {
  return (
    <div style={{ 
      marginBottom: '1rem', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      borderBottom: '1px solid var(--ifm-color-emphasis-300)'
    }}>
      <BrowserOnly fallback={<div style={{ height: '46px', background: 'var(--ifm-background-color)' }}>載入國際指數中...</div>}>
        {() => <TickerTape />}
      </BrowserOnly>
    </div>
  );
}
