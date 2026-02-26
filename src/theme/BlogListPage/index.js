import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import { useLocation } from '@docusaurus/router';
import MarketIndicesBar from '@site/src/components/Finance/IndicesBar';

export default function BlogListPageWrapper(props) {
  const { pathname } = useLocation();
  const isFinance = pathname.startsWith('/finance');

  return (
    <>
      {isFinance && (
        <div className="container margin-vert--lg" style={{ marginBottom: 0 }}>
          <MarketIndicesBar />
        </div>
      )}
      <BlogListPage {...props} />
    </>
  );
}
