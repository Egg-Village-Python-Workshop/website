import React, { useState, useEffect, useRef } from 'react';
import { StockCard, StockData } from './StockCard';

const STORAGE_KEY = 'egg-subscribed-stocks';

interface StockOption {
  id: string;
  name: string;
}

export const TaiwanQuotesManager: React.FC = () => {
  const [subscribed, setSubscribed] = useState<string[]>(['00635U']);
  const [stockOptions, setStockOptions] = useState<StockOption[]>([]);
  const [csvUrl, setCsvUrl] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [realTimeData, setRealTimeData] = useState<Record<string, StockData>>({});
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load subscriptions and options from JSON
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setSubscribed(JSON.parse(saved));
        } catch (e) {
          console.error('Failed to parse subscriptions', e);
        }
      }

      fetch('/tw_stocks.json')
        .then(res => res.json())
        .then(data => {
          setStockOptions(data.stocks || []);
          if (data.config && data.config.csvUrl) {
            setCsvUrl(data.config.csvUrl);
          }
        })
        .catch(err => console.error('Failed to load stock options', err));
    }
  }, []);

  // Fetch and parse multi-stock CSV
  useEffect(() => {
    if (!csvUrl) return;

    const fetchData = async () => {
      try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        const lines = text.split(/\r?\n/).map(line => 
          line.split(',').map(cell => cell.replace(/"/g, '').trim())
        );
        
        const newData: Record<string, StockData> = {};
        
        // Scan for stock blocks
        for (let i = 0; i < lines.length; i++) {
          const firstCell = lines[i][0];
          // Check if first cell looks like a stock ID (e.g., "2330", "00635U")
          if (firstCell && /^[0-9A-Z]{4,6}$/.test(firstCell)) {
            const symbol = firstCell;
            // Ensure we have enough lines for a full block (min 4 lines)
            if (i + 3 < lines.length) {
              newData[symbol] = {
                symbol: symbol,
                price: lines[i+1][1] || '---',
                indexName: lines[i][3] || '加權指數',
                indexValue: lines[i][4] || '---',
                change: lines[i+2][4] || '0.00',
                changePercent: lines[i+2][6] || '0.00%',
                volume: lines[i+3][1] || '---',
                low: lines[i+3][4] || '---',
                high: lines[i+3][6] || '---',
                lastUpdated: new Date().toLocaleTimeString('zh-TW')
              };
              // Skip the parsed block lines
              i += 3;
            }
          }
        }
        
        setRealTimeData(newData);
      } catch (err) {
        console.error('Failed to fetch/parse CSV data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [csvUrl]);

  const saveToStorage = (list: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const addStock = (symbol: string) => {
    const cleanSymbol = symbol.trim().toUpperCase();
    if (cleanSymbol && !subscribed.includes(cleanSymbol)) {
      const newList = [...subscribed, cleanSymbol];
      setSubscribed(newList);
      saveToStorage(newList);
      setInputValue('');
    }
  };

  const removeStock = (symbol: string) => {
    const newList = subscribed.filter(s => s !== symbol);
    setSubscribed(newList);
    saveToStorage(newList);
  };

  const exportSubscriptions = () => {
    const dataStr = JSON.stringify(subscribed, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `egg-stocks-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importSubscriptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (Array.isArray(imported)) {
          const newList = Array.from(new Set([...subscribed, ...imported]));
          setSubscribed(newList);
          saveToStorage(newList);
          alert('匯入成功！');
        }
      } catch (err) {
        alert('匯入失敗：無效的 JSON 格式');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
        <div style={{ flexGrow: 1, display: 'flex', gap: '10px' }}>
          <input
            type="text"
            list="tw-stock-options"
            placeholder="輸入代號或選擇訂閱股票..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', flexGrow: 1 }}
          />
          <datalist id="tw-stock-options">
            {stockOptions.map(opt => (
              <option key={opt.id} value={opt.id}>{`${opt.id} ${opt.name}`}</option>
            ))}
          </datalist>
          <button className="button button--primary" onClick={() => addStock(inputValue)}>訂閱</button>
        </div>
        
        <div style={{ display: 'flex', gap: '5px' }}>
          <button className="button button--secondary button--sm" onClick={exportSubscriptions}>匯出</button>
          <button className="button button--secondary button--sm" onClick={() => fileInputRef.current?.click()}>匯入</button>
          <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            accept=".json" 
            onChange={importSubscriptions} 
          />
        </div>
      </div>

      {loading ? (
        <div>載入數據中...</div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {subscribed.map(symbol => (
            <div key={symbol} style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
              <button 
                onClick={() => removeStock(symbol)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  zIndex: 10,
                  border: 'none',
                  background: 'rgba(255,0,0,0.1)',
                  color: 'red',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px'
                }}
                title="取消訂閱"
              >
                ✕
              </button>
              <StockCard data={
                realTimeData[symbol] 
                ? realTimeData[symbol] 
                : { 
                    symbol, 
                    price: '---', 
                    change: '0.00', 
                    changePercent: '0.00%', 
                    name: stockOptions.find(o => o.id === symbol)?.name || '尚未有即時數據'
                  }
              } />
            </div>
          ))}
          {subscribed.length === 0 && <div style={{ color: '#999', padding: '20px' }}>尚未訂閱任何台股</div>}
        </div>
      )}
    </div>
  );
};
