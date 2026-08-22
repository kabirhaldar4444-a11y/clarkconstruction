import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CircleGallery.css';

export default function CircleGallery({
  items = [],
  radius = 440,
  depth = 160,
  cardWidth = 250,
  cardHeight = 325,
  autoRotate = true,
  autoRotateSpeed = 0.28
}) {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  const count = items.length;
  const angleStep = useMemo(() => (count > 0 ? 360 / count : 0), [count]);

  // Responsive radius calculation based on viewport width
  const [dynamicRadiusX, setDynamicRadiusX] = useState(radius);
  const [dynamicDepth, setDynamicDepth] = useState(depth);
  const [dynamicWidth, setDynamicWidth] = useState(cardWidth);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        if (w < 640) {
          setDynamicRadiusX(Math.max(180, w * 0.42));
          setDynamicDepth(100);
          setDynamicWidth(Math.min(220, w * 0.68));
        } else if (w < 1024) {
          setDynamicRadiusX(340);
          setDynamicDepth(130);
          setDynamicWidth(235);
        } else {
          setDynamicRadiusX(radius);
          setDynamicDepth(depth);
          setDynamicWidth(cardWidth);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radius, depth, cardWidth]);

  // Track active front index
  useEffect(() => {
    if (count === 0) return;
    const normalized = ((-rotation % 360) + 360) % 360;
    const idx = Math.round(normalized / angleStep) % count;
    setActiveIdx(idx);
  }, [rotation, angleStep, count]);

  // Smooth continuous rotation & drag inertia loop
  const animate = useCallback((time) => {
    lastTimeRef.current = time;

    if (!isDragging) {
      if (Math.abs(velocityRef.current) > 0.04) {
        // Friction decay
        velocityRef.current *= 0.93;
        setRotation((prev) => prev + velocityRef.current);
      } else if (autoRotate && !isHovered) {
        // Gentle continuous rotation
        setRotation((prev) => prev - autoRotateSpeed);
      }
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, [isDragging, autoRotate, isHovered, autoRotateSpeed]);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate]);

  // Pointer & Drag Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    velocityRef.current = 0;
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    startRotationRef.current = rotation;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    const deltaX = clientX - lastXRef.current;
    lastXRef.current = clientX;

    const factor = 0.26;
    velocityRef.current = deltaX * factor;
    setRotation((prev) => prev + deltaX * factor);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Stepping navigation
  const rotateTo = (index) => {
    const targetAngle = -index * angleStep;
    const current = rotation;
    const diff = ((((targetAngle - current) % 360) + 540) % 360) - 180;
    setRotation(current + diff);
  };

  const prevSlide = () => {
    rotateTo((activeIdx - 1 + count) % count);
  };

  const nextSlide = () => {
    rotateTo((activeIdx + 1) % count);
  };

  return (
    <div
      ref={containerRef}
      className="circle-gallery-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) setIsDragging(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Curved 3D Stage with Razor-Sharp Non-Blur Positioning */}
      <div
        className="circle-gallery-stage"
        style={{
          height: `${cardHeight + 20}px`
        }}
      >
        {items.map((item, index) => {
          const itemAngle = index * angleStep;
          const relAngle = ((((itemAngle + rotation) % 360) + 540) % 360) - 180;
          const relRad = (relAngle * Math.PI) / 180;

          // Smooth elliptical coordinates
          const x = Math.sin(relRad) * dynamicRadiusX;
          const cosVal = Math.cos(relRad);
          const z = (cosVal - 1) * dynamicDepth;

          // Gentle 3D tilt without horizontal squishing or stretching
          const tiltY = -relAngle * 0.32;
          const scale = 0.82 + 0.18 * ((cosVal + 1) / 2);
          const zIndex = Math.round(100 + cosVal * 100);
          const isFront = Math.abs(relAngle) < 25;
          const opacity = cosVal > -0.3 ? 0.35 + 0.65 * ((cosVal + 1) / 2) : 0;

          return (
            <div
              key={item.id ?? index}
              className={`circle-gallery-card ${isFront ? 'active-front' : ''}`}
              style={{
                width: `${dynamicWidth}px`,
                height: `${cardHeight}px`,
                transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${tiltY}deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                visibility: opacity > 0.05 ? 'visible' : 'hidden'
              }}
              onClick={(e) => {
                if (!isFront) {
                  e.preventDefault();
                  rotateTo(index);
                }
              }}
            >
              {/* Card Image Cover */}
              <div className="circle-gallery-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="circle-gallery-card-img"
                />
                {item.tag && (
                  <span className="circle-gallery-card-tag">{item.tag}</span>
                )}
              </div>

              {/* Card Content Body */}
              <div className="circle-gallery-card-body">
                <div>
                  {item.subtitle && (
                    <span className="circle-gallery-card-subtitle">{item.subtitle}</span>
                  )}
                  <h3 className="circle-gallery-card-title" title={item.title}>
                    {item.title}
                  </h3>
                  <p className="circle-gallery-card-desc">{item.description}</p>
                </div>

                <div className="circle-gallery-card-footer">
                  <Link
                    to={item.link || '/services'}
                    className="circle-gallery-card-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Gallery Controls & Indicators */}
      <div className="circle-gallery-controls">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="circle-gallery-nav-btn"
          aria-label="Previous service"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="circle-gallery-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`circle-gallery-dot ${activeIdx === i ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                rotateTo(i);
              }}
              aria-label={`Jump to service ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="circle-gallery-nav-btn"
          aria-label="Next service"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Drag Hint Indicator */}
      <div className="circle-gallery-hint">
        <span>Drag or swipe to explore services</span>
      </div>
    </div>
  );
}
