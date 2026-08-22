import React, { useState, useRef } from 'react';

export default function Card({
  children,
  image = null,
  title = null,
  subtitle = null,
  tag = null,
  hoverEffect = 'zoom', // zoom, tilt, float, glow, none
  variant = 'default', // default, glass, dark
  onClick = null,
  style = {},
  imageStyle = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || hoverEffect === 'none') return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized coordinates from -1 to 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    
    // Smooth 3D tilt physics (max 5 degrees)
    const rotateX = -yPct * 5.5;
    const rotateY = xPct * 5.5;
    
    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.45
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    return `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-6px)`;
  };

  const getCardStyles = () => {
    let baseStyles = {
      backgroundColor: variant === 'glass' 
        ? 'rgba(255, 255, 255, 0.88)' 
        : variant === 'dark' 
          ? 'var(--bg-dark-card)' 
          : 'var(--bg-card)',
      backdropFilter: variant === 'glass' ? 'blur(16px)' : 'none',
      border: isHovered 
        ? '1px solid #2563EB' 
        : (variant === 'dark' ? '1px solid var(--border-dark)' : '1px solid var(--border-color)'),
      borderRadius: '14px',
      overflow: 'hidden',
      transition: isHovered
        ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
        : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease, border-color 0.3s ease',
      cursor: onClick ? 'pointer' : 'default',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transform: getTransform(),
      transformStyle: 'preserve-3d',
      willChange: 'transform, box-shadow',
      boxShadow: isHovered
        ? '0 24px 48px -12px rgba(13, 26, 99, 0.22), 0 4px 16px -2px rgba(37, 99, 235, 0.12)'
        : (variant === 'dark' ? 'var(--shadow-dark-card)' : 'var(--shadow-premium)')
    };

    return { ...baseStyles, ...style };
  };

  return (
    <div
      ref={cardRef}
      style={getCardStyles()}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Specular Interactive Sheen / Glare Highlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10,
          borderRadius: '14px',
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, rgba(255, 255, 255, 0) 65%)`,
          transition: 'opacity 0.25s ease'
        }}
      />

      {/* Image Area */}
      {image && (
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '62.5%' /* 16:10 */ }}>
          <img
            src={image}
            alt={title || 'card media'}
            loading="lazy"
            className="card-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              ...imageStyle
            }}
          />
          {tag && (
            <span style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: isHovered ? '#2563EB' : 'var(--primary)',
              color: '#FFF',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              zIndex: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transform: isHovered ? 'translateY(-2px)' : 'none',
              transition: 'all 0.3s ease'
            }}>
              {tag}
            </span>
          )}
          {/* Natural Vignette Overlay */}
          <div
            className="card-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(10, 15, 36, 0.7) 0%, rgba(10, 15, 36, 0.1) 60%, transparent 100%)',
              opacity: isHovered ? 0.9 : 0.7,
              transition: 'opacity 0.4s ease',
              zIndex: 1
            }}
          />
        </div>
      )}

      {/* Content Area */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative', zIndex: 3 }}>
        {subtitle && (
          <span style={{
            color: isHovered ? '#2563EB' : 'var(--primary)',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '8px',
            display: 'block',
            transition: 'color 0.25s ease'
          }}>
            {subtitle}
          </span>
        )}
        {title && (
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            marginBottom: '10px',
            color: variant === 'dark' ? '#FFFFFF' : 'var(--text-white)',
            lineHeight: '1.3',
            transition: 'color 0.25s ease'
          }}>
            {title}
          </h3>
        )}
        <div style={{ flexGrow: 1, color: variant === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

