import React from 'react';

/**
 * RealisticBlinkingEye Component
 * Renders an SVG human eye with lifelike eyelid closure, specular reflection,
 * micro-saccade gaze shifts, and natural double-flutter blinking physics.
 */
export default function RealisticBlinkingEye({ size = 18, color = '#FFFFFF' }) {
  return (
    <span
      className="realistic-eye-wrapper"
      title="View Details"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        flexShrink: 0
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {/* Open Eye Almond Contour & Pupil */}
        <g className="eye-open-layer">
          {/* Sclera Contour */}
          <path d="M2.2 12C4.8 6.6 8.2 4.5 12 4.5s7.2 2.1 9.8 7.5c-2.6 5.4-6 7.5-9.8 7.5S4.8 17.4 2.2 12Z" />

          {/* Pupil with Specular Reflection and Saccade Motion */}
          <g className="eye-pupil-layer">
            <circle cx="12" cy="12" r="3.2" fill={color} stroke="none" />
            <circle cx="13.2" cy="10.8" r="0.95" fill="#FFFFFF" stroke="none" />
          </g>
        </g>

        {/* Closed Eyelid Lash Line (sweeps in on blink) */}
        <path
          className="eye-closed-lid-layer"
          d="M2.2 12.2c2.8 3.6 6.2 5.2 9.8 5.2s7-1.6 9.8-5.2"
        />
      </svg>
    </span>
  );
}

