import React, { useEffect, useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function TechnicalGauge({ symbol, theme }: { symbol: string, theme: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      "interval": "1D",
      "width": "100%",
      "isTransparent": false,
      "height": "400",
      "symbol": symbol,
      "showIntervalTabs": true,
      "displayMode": "single",
      "locale": "zh_TW",
      "colorTheme": theme
    });

    const timeoutId = setTimeout(() => {
      if (container) container.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (container) container.innerHTML = '';
    };
  }, [symbol, theme]);

  return (
    <div ref={containerRef} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

function CryptoFearGreed() {
  return (
    <div style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>
      <h4 style={{ color: '#333' }}>加密貨幣恐懼與貪婪</h4>
      <img 
        src="https://alternative.me/crypto/fear-and-greed-index.png" 
        alt="Latest Crypto Fear & Greed Index" 
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>數據來源: Alternative.me</p>
    </div>
  );
}

function USFearGreed() {
  return (
    <a 
      href="https://edition.cnn.com/markets/fear-and-greed" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
        color: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ margin: 0 }}>🇺🇸 美股恐懼與貪婪</h3>
        <p style={{ marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>點擊查看 CNN 實時數據</p>
        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>由於安全性限制，請至官網查看</span>
      </div>
    </a>
  );
}

export default function WarRoom() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(getTheme());
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  };

  return (
    <div style={{ padding: '20px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '12px', border: '1px solid var(--ifm-color-emphasis-300)' }}>
      <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        🚀 市場戰情室 <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#666' }}>(即時數據概覽)</span>
      </h2>
      
      <div style={gridStyle}>
        <CryptoFearGreed />
        <USFearGreed />
        <BrowserOnly fallback={<div>載入指針中...</div>}>
          {() => <TechnicalGauge symbol="TWSE:2330" theme={theme} />}
        </BrowserOnly>
        <BrowserOnly fallback={<div>載入指針中...</div>}>
          {() => <TechnicalGauge symbol="SAU:SPX" theme={theme} />}
        </BrowserOnly>
      </div>
    </div>
  );
}
