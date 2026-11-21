import React from 'react';
import { initialArticles } from '../data/articles.js';

export default function GnaPage() {
  return (
    <main id="main-content" style={{ paddingTop: 'var(--nav)' }}>
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--p-border)' }}>
        <div className="wrap">
          <div style={{ fontSize: '13px', color: 'var(--p-accent)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Knowledge Center
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, letterSpacing: 'var(--display-tracking)', margin: '0 0 16px 0' }}>
            General Network Access (GNA)
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--p-muted)', maxWidth: '640px', margin: 0 }}>
            Educational articles, technical analysis, and reference resources on India's transmission access regulations.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{
            backgroundColor: 'var(--p-surface)',
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid var(--p-border)',
            marginBottom: '48px',
            maxWidth: '800px'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 12px 0' }}>Repository Overview</h2>
            <p style={{ fontSize: '15px', color: 'var(--p-muted)', margin: 0, lineHeight: 1.6 }}>
              This section is designed to host structured educational articles explaining the mechanics of General Network Access (GNA), connectivity procedures, and transmission regulations under Central Electricity Regulatory Commission (CERC) frameworks.
            </p>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 400, marginBottom: '24px' }}>Published Articles</h2>
          {initialArticles.length === 0 ? (
            <div style={{ padding: '32px', border: '1px dashed var(--p-border)', borderRadius: '8px', color: 'var(--p-muted)', fontSize: '15px', maxWidth: '800px' }}>
              Educational articles and regulatory explainers are currently in preparation. Verified analyses will be published in this section.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {initialArticles.map((article) => (
                <div key={article.id} style={{ backgroundColor: 'var(--p-surface)', padding: '24px', borderRadius: '8px', border: '1px solid var(--p-border)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--p-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>{article.category}</div>
                  <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{article.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--p-muted)' }}>{article.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
