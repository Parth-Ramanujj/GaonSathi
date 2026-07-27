'use client';

import React from 'react';

export function BuntingDivider({ flags = 12 }: { flags?: number }) {
  return (
    <div style={{ display: 'flex', gap: '0.25rem', padding: '0.5rem 0', overflow: 'hidden' }}>
      {Array.from({ length: flags }).map((_, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            width: '16px',
            height: '10px',
            backgroundColor: index % 2 === 0 ? 'var(--color-terracotta)' : 'var(--color-turmeric)',
            borderRadius: '2px',
            transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(6deg)',
          }}
        />
      ))}
    </div>
  );
}
