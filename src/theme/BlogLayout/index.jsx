import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import { useLocation } from '@docusaurus/router';
import MarketIndicesBar from '@site/src/components/Finance/IndicesBar';

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const { pathname } = useLocation();
  // Support both /finance and /finance/ with potential baseUrl
  const isFinance = /\/finance($|\/)/.test(pathname);
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      {isFinance && (
        <div style={{ width: '100%', marginBottom: '-2rem' }}>
          <MarketIndicesBar />
        </div>
      )}
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
