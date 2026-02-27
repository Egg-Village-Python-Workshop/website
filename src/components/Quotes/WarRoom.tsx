import React, { useEffect, useState, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TechnicalGauge({
  symbol,
  theme,
  title,
}: {
  symbol: string;
  theme: string;
  title?: string;
}) {
  const { siteConfig } = useDocusaurusContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = siteConfig.customFields.tradingViewTechnicalAnalysisJs as string;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      interval: "1D",
      width: "100%",
      isTransparent: false,
      height: "320",
      symbol: symbol,
      showIntervalTabs: false,
      displayMode: "single",
      locale: "zh_TW",
      colorTheme: theme,
    });

    const timeoutId = setTimeout(() => {
      if (container) container.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (container) container.innerHTML = "";
    };
  }, [symbol, theme, siteConfig.customFields.tradingViewTechnicalAnalysisJs]);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {title && (
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            left: "12px",
            zIndex: 1,
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: theme === "dark" ? "#eee" : "#333",
            padding: "2px 6px",
            background:
              theme === "dark" ? "#333" : "#eee",
            borderRadius: "4px",
          }}
        >
          {title}
        </div>
      )}
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: "320px" }}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

function CryptoSentiment() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "white",
        height: "320px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h5
        style={{
          position: "absolute",
          bottom: "8px",
          left: "12px",
          color: "#333",
          margin: "0",
          fontSize: "0.85rem",
          zIndex: 1,
          background: "#eee",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        加密貨幣情緒
      </h5>
      <img
        src={siteConfig.customFields.cryptoFearGreedImg as string}
        alt="Latest Crypto Fear & Greed Index"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

function MarketSymbol({
  symbol,
  theme,
  title,
}: {
  symbol: string;
  theme: string;
  title: string;
}) {
  const { siteConfig } = useDocusaurusContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = siteConfig.customFields.tradingViewMiniSymbolOverviewJs as string;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "320",
      locale: "zh_TW",
      dateRange: "12M",
      colorTheme: theme,
      trendLineColor: "rgba(41, 98, 255, 1)",
      underLineColor: "rgba(41, 98, 255, 0.3)",
      underLineBottomColor: "rgba(41, 98, 255, 0)",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
    });

    const timeoutId = setTimeout(() => {
      if (container) container.appendChild(script);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (container) container.innerHTML = "";
    };
  }, [symbol, theme, siteConfig.customFields.tradingViewMiniSymbolOverviewJs]);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "12px",
          zIndex: 1,
          fontSize: "0.85rem",
          fontWeight: "bold",
          color: theme === "dark" ? "#eee" : "#333",
          padding: "2px 6px",
          background:
            theme === "dark" ? "#333" : "#eee",
          borderRadius: "4px",
        }}
      >
        {title}
      </div>
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: "320px" }}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default function WarRoom() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    setTheme(getTheme());
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
    marginTop: "15px",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px 0",
  };

  return (
    <div
      style={{
        padding: "15px",
        background: "var(--ifm-color-emphasis-100)",
        borderRadius: "12px",
        border: "1px solid var(--ifm-color-emphasis-300)",
        marginBottom: "30px",
      }}
    >
      <div style={headerStyle} onClick={() => setIsOpen(!isOpen)}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          🚀 市場戰情室{" "}
          <span
            style={{ fontSize: "0.8rem", fontWeight: "normal", color: "#666" }}
          >
            概覽
          </span>
        </h3>
        <span style={{ fontSize: "1.2rem", color: "#666" }}>
          {isOpen ? "▼" : "▶"}
        </span>
      </div>

      {isOpen && (
        <div style={gridStyle}>
          <CryptoSentiment />
          <BrowserOnly
            fallback={
              <div
                style={{
                  height: "320px",
                  background: "#eee",
                  borderRadius: "8px",
                }}
              />
            }
          >
            {() => (
              <MarketSymbol
                symbol="AMEX:SPY"
                theme={theme}
                title="美股大盤 (SPY)"
              />
            )}
          </BrowserOnly>
          <BrowserOnly
            fallback={
              <div
                style={{
                  height: "320px",
                  background: "#eee",
                  borderRadius: "8px",
                }}
              />
            }
          >
            {() => (
              <TechnicalGauge
                symbol="TWSE:TAIEX"
                theme={theme}
                title="台股大盤指針"
              />
            )}
          </BrowserOnly>
          <BrowserOnly
            fallback={
              <div
                style={{
                  height: "320px",
                  background: "#eee",
                  borderRadius: "8px",
                }}
              />
            }
          >
            {() => (
              <TechnicalGauge
                symbol="NYSE:TSM"
                theme={theme}
                title="美股指針 (TSM)"
              />
            )}
          </BrowserOnly>
        </div>
      )}
    </div>
  );
}
