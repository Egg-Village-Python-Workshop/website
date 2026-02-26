import React, { useEffect, useState, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentContainer = containerRef.current;
    currentContainer.innerHTML = ""; // Clear previous

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NYSE:TSM", title: "台積電 ADR" },
        { proName: "SP500", title: "S&P 500" },
        { proName: "NAS100", title: "Nasdaq 100" },
        { proName: "SOXX", title: "費城半導體" },
        { proName: "TLT", title: "美債 20Y+" },
        { proName: "BTCUSD", title: "BTC" },
        { proName: "GOLD", title: "黃金" },
        { proName: "UKOIL", title: "原油" },
        { proName: "TAIEX", title: "台灣大盤指數" },
        { proName: "TAIEX", title: "台灣大盤指數" },
      ],
      showSymbolLogo: true,
      colorTheme: theme,
      isTransparent: false,
      displayMode: "adaptive",
      locale: "zh_TW",
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
        currentContainer.innerHTML = "";
      }
    };
  }, [theme]);

  return (
    <div
      key={theme}
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ minHeight: "46px" }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default function MarketIndicesBar() {
  return (
    <div
      style={{
        marginBottom: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        overflow: "hidden",
        borderBottom: "1px solid var(--ifm-color-emphasis-300)",
      }}
    >
      <BrowserOnly
        fallback={
          <div
            style={{
              height: "46px",
              background: "var(--ifm-background-color)",
            }}
          >
            載入國際指數中...
          </div>
        }
      >
        {() => <TickerTape />}
      </BrowserOnly>
    </div>
  );
}
