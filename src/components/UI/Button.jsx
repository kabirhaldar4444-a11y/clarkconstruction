import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary', // primary, secondary, outline, glass, text
  size = 'md', // sm, md, lg
  to = null,
  href = null,
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon = null,
  iconPosition = 'right', // left, right
  style = {},
  ...props
}) {
  const getStyles = () => {
    let baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'var(--transition-fast)',
      border: '1px solid transparent',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    };

    // Size variants
    let sizeStyles = {};
    if (size === 'sm') {
      sizeStyles = { padding: '8px 16px', fontSize: '0.75rem' };
    } else if (size === 'md') {
      sizeStyles = { padding: '12px 24px', fontSize: '0.85rem' };
    } else if (size === 'lg') {
      sizeStyles = { padding: '16px 36px', fontSize: '0.95rem' };
    }

    // Color/Variant variants
    let variantStyles = {};
    if (variant === 'primary') {
      variantStyles = {
        backgroundColor: 'var(--primary)',
        color: '#FFFFFF',
        boxShadow: 'var(--shadow-glow)',
      };
    } else if (variant === 'secondary') {
      variantStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
      };
    } else if (variant === 'outline') {
      variantStyles = {
        backgroundColor: 'transparent',
        border: '1px solid var(--primary)',
        color: 'var(--primary)',
      };
    } else if (variant === 'glass') {
      variantStyles = {
        backgroundColor: 'rgba(15, 19, 30, 0.6)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--border-color)',
        color: '#FFFFFF',
      };
    } else if (variant === 'text') {
      variantStyles = {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        padding: '8px 0',
      };
    }

    if (disabled) {
      variantStyles.opacity = 0.5;
      variantStyles.cursor = 'not-allowed';
    }

    return { ...baseStyles, ...sizeStyles, ...variantStyles, ...style };
  };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
      e.currentTarget.style.borderColor = 'var(--border-color-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--primary)';
      e.currentTarget.style.color = '#FFFFFF';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } else if (variant === 'glass') {
      e.currentTarget.style.backgroundColor = 'rgba(var(--primary-rgb), 0.1)';
      e.currentTarget.style.borderColor = 'var(--primary)';
      e.currentTarget.style.color = 'var(--primary)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } else if (variant === 'text') {
      e.currentTarget.style.color = 'var(--primary-hover)';
      e.currentTarget.style.transform = 'translateX(4px)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    const styles = getStyles();
    e.currentTarget.style.backgroundColor = styles.backgroundColor || 'transparent';
    e.currentTarget.style.borderColor = styles.borderColor || 'transparent';
    e.currentTarget.style.color = styles.color || 'inherit';
    e.currentTarget.style.transform = 'none';
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} />}
    </>
  );

  if (to && !disabled) {
    return (
      <Link
        to={to}
        style={getStyles()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        style={getStyles()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      style={getStyles()}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
}
