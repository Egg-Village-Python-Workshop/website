import React, { useState, useEffect } from 'react';
import { StockCard, StockData } from './StockCard';

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_NwVINK21rsWifI2wmdfGJYawvcat02vMVoaSCOBJUAUatO768OaKenhbuKfGdC-fElRVmdYsnr-R/pub?gid=1504653365&single=true&output=csv";

export const GSheetQuotes: React.FC = () => {
  const [data, setData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);
        const text = await response.text();
        
        // Parse custom CSV layout
        const lines = text.split('
').map(line => line.split(',').map(cell => cell.replace(/"/g, '').trim()));
        
        // Positional parsing based on spreadsheet structure
        const parsed: StockData = {
          symbol: lines[0][0],
          price: lines[1][1],
          indexName: lines[0][3],
          indexValue: lines[0][4],
          change: lines[2][4],
          changePercent: lines[2][6],
          volume: lines[3][1],
          low: lines[3][4],
          high: lines[3][6],
          lastUpdated: new Date().toLocaleTimeString('zh-TW')
        };
        
        setData(parsed);
      } catch (err) {
        console.error('Failed to fetch GSheet data:', err);
        setError('無法載入試算表報價數據');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>載入中...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!data) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <StockCard data={data} />
      {/* Future stock cards can be added here easily */}
    </div>
  );
};
