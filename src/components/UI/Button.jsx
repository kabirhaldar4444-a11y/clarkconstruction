import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary', // primary, secondary, outline, glass, text, dark
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
      letterSpacing: '0.06em',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      border: '1px solid transparent',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    };

    // Size variants
    let sizeStyles = {};
    if (size === 'sm') {
      sizeStyles = { padding: '9px 18px', fontSize: '0.78rem' };
    } else if (size === 'md') {
      sizeStyles = { padding: '13px 26px', fontSize: '0.86rem' };
    } else if (size === 'lg') {
      sizeStyles = { padding: '16px 34px', fontSize: '0.94rem' };
    }

    // Color/Variant variants
    let variantStyles = {};
    if (variant === 'primary') {
      variantStyles = {
        backgroundColor: 'var(--primary)',
        color: '#FFFFFF',
        borderColor: 'var(--primary)',
        boxShadow: '0 2px 8px rgba(13, 26, 99, 0.15)',
      };
    } else if (variant === 'secondary') {
      variantStyles = {
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-color)',
        color: 'var(--text-white)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      };
    } else if (variant === 'outline') {
      variantStyles = {
        backgroundColor: 'transparent',
        border: '1px solid var(--primary)',
        color: 'var(--primary)',
      };
    } else if (variant === 'glass') {
      variantStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        color: '#FFFFFF',
      };
    } else if (variant === 'dark') {
      variantStyles = {
        backgroundColor: 'var(--primary-dark)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#FFFFFF',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
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
      e.currentTarget.style.borderColor = 'var(--primary-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(13, 26, 99, 0.25)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#F8FAFC';
      e.currentTarget.style.borderColor = 'var(--border-color-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 26, 99, 0.08)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--primary)';
      e.currentTarget.style.color = '#FFFFFF';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(13, 26, 99, 0.2)';
    } else if (variant === 'glass') {
      e.currentTarget.style.backgroundColor = '#FFFFFF';
      e.currentTarget.style.color = 'var(--primary)';
      e.currentTarget.style.borderColor = '#FFFFFF';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } else if (variant === 'dark') {
      e.currentTarget.style.backgroundColor = '#15267F';
      e.currentTarget.style.borderColor = '#2563EB';
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
    e.currentTarget.style.boxShadow = styles.boxShadow || 'none';
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

