import React from 'react';

export default function Card({
  children,
  image = null,
  title = null,
  subtitle = null,
  tag = null,
  hoverEffect = 'zoom', // zoom, float, glow, none
  variant = 'default', // default, glass
  onClick = null,
  style = {},
  imageStyle = {},
  ...props
}) {
  const getCardStyles = () => {
    let baseStyles = {
      backgroundColor: variant === 'glass' ? 'rgba(255, 255, 255, 0.75)' : 'var(--bg-card)',
      backdropFilter: variant === 'glass' ? 'blur(12px)' : 'none',
      border: '1px solid var(--border-color)',
      borderRadius: '6px',
      overflow: 'hidden',
      transition: 'var(--transition-normal)',
      cursor: onClick ? 'pointer' : 'default',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-premium)'
    };

    return { ...baseStyles, ...style };
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = 'var(--border-color-hover)';
    if (hoverEffect === 'float') {
      e.currentTarget.style.transform = 'translateY(-8px)';
    } else if (hoverEffect === 'glow') {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-glow), var(--shadow-premium)';
      e.currentTarget.style.borderColor = 'var(--primary)';
    } else if (hoverEffect === 'zoom') {
      e.currentTarget.style.transform = 'translateY(-4px)';
      const img = e.currentTarget.querySelector('.card-img');
      if (img) img.style.transform = 'scale(1.06)';
      const overlay = e.currentTarget.querySelector('.card-overlay');
      if (overlay) overlay.style.opacity = '0.9';
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
    
    if (hoverEffect === 'zoom') {
      const img = e.currentTarget.querySelector('.card-img');
      if (img) img.style.transform = 'none';
      const overlay = e.currentTarget.querySelector('.card-overlay');
      if (overlay) overlay.style.opacity = '0.8';
    }
  };

  return (
    <div
      style={getCardStyles()}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Image Area */}
      {image && (
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '62.5%' /* 16:10 */ }}>
          <img
            src={image}
            alt={title || 'card media'}
            className="card-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'var(--transition-slow)',
              ...imageStyle
            }}
          />
          {tag && (
            <span style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'var(--primary)',
              color: '#FFF',
              padding: '4px 12px',
              borderRadius: '3px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 2
            }}>
              {tag}
            </span>
          )}
          {/* Subtle gradient overlay */}
          <div
            className="card-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(8, 10, 16, 0.6) 0%, transparent 60%)',
              opacity: 0.8,
              transition: 'var(--transition-normal)',
              zIndex: 1
            }}
          />
        </div>
      )}

      {/* Content Area */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {subtitle && (
          <span style={{
            color: 'var(--primary)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '8px',
            display: 'block'
          }}>
            {subtitle}
          </span>
        )}
        {title && (
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '12px',
            color: 'var(--text-white)',
            lineHeight: '1.3'
          }}>
            {title}
          </h3>
        )}
        <div style={{ flexGrow: 1, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
