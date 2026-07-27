'use client';

import React, { useState } from 'react';

export function VoiceAssistantFab() {
  const [isListening, setIsListening] = useState(false);

  return (
    <button
      onClick={() => setIsListening((v) => !v)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: isListening ? 'var(--color-terracotta)' : 'var(--color-leaf)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      🎤
    </button>
  );
}
