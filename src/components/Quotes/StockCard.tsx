import React from 'react';

export interface StockData {
  symbol: string;
  name?: string;
  price: string;
  change: string;
  changePercent: string;
  volume?: string;
  high?: string;
  low?: string;
  indexValue?: string;
  indexName?: string;
  lastUpdated?: string;
}

export const StockCard: React.FC<{ data: StockData }> = ({ data }) => {
  const isUp = data.change.includes('▲') || parseFloat(data.change) > 0;
  const isDown = data.change.includes('▼') || parseFloat(data.change) < 0;
  
  const priceColor = isUp ? '#ff4d4f' : isDown ? '#52c41a' : 'inherit';

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid var(--ifm-color-emphasis-300)', 
      borderRadius: '12px', 
      background: 'var(--ifm-background-color)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      minWidth: '280px',
      flex: '1'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{data.symbol}</h3>
          {data.name && <span style={{ fontSize: '0.85rem', color: '#666' }}>{data.name}</span>}
        </div>
        {data.indexValue && (
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#888' }}>{data.indexName || '大盤指數'}</div>
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{data.indexValue}</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '15px' }}>
        <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: priceColor }}>{data.price}</span>
        <span style={{ fontSize: '1rem', fontWeight: 'bold', color: priceColor }}>
          {data.change} ({data.changePercent})
        </span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '8px', 
        fontSize: '0.85rem', 
        color: 'var(--ifm-font-color-base)',
        borderTop: '1px solid #eee',
        paddingTop: '10px'
      }}>
        {data.volume && <div>成交量: <span style={{ fontWeight: '500' }}>{data.volume}</span></div>}
        {data.high && <div>最高: <span style={{ fontWeight: '500' }}>{data.high}</span></div>}
        {data.low && <div>最低: <span style={{ fontWeight: '500' }}>{data.low}</span></div>}
      </div>
      
      {data.lastUpdated && (
        <div style={{ fontSize: '0.7rem', color: '#999', marginTop: '15px', textAlign: 'right' }}>
          更新時間: {data.lastUpdated}
        </div>
      )}
    </div>
  );
};
