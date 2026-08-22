import React from 'react';

export default function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  style = {}
}) {
  return (
    <div
      className="skeleton-loader"
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: '#161C2C',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent)',
          animation: 'shimmer 1.5s infinite',
          transform: 'translateX(-100%)'
        }}
      />
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
