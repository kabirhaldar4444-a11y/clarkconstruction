import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              overflow: 'hidden',
              transition: 'var(--transition-normal)'
            }}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleItem(index)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: '#FFF',
                fontSize: '1.05rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.color = '#FFF';
              }}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: isOpen ? 'var(--primary)' : 'var(--text-muted)'
                }}
              />
            </button>

            {/* Content Body */}
            <div
              style={{
                maxHeight: isOpen ? '1000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0, 1, 0, 1) 0s, padding 0.3s ease',
                padding: isOpen ? '0 24px 24px 24px' : '0 24px',
                color: 'var(--text-muted)',
                fontSize: '0.925rem',
                lineHeight: '1.6',
                borderTop: isOpen ? '1px solid var(--border-color)' : '1px solid transparent'
              }}
            >
              <div style={{ paddingTop: isOpen ? '16px' : '0px' }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
