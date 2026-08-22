import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav aria-label="breadcrumb" style={{ padding: '16px 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }} className="hover-amber">
          <Home size={14} />
          <span>Home</span>
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

          return (
            <React.Fragment key={to}>
              <ChevronRight size={14} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
              {isLast ? (
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{label}</span>
              ) : (
                <Link to={to} style={{ color: 'var(--text-muted)' }} className="hover-amber">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
