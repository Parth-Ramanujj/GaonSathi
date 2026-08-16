import React from 'react';

interface BuntingDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  flags?: number;
}

export const BuntingDivider: React.FC<BuntingDividerProps> = ({ flags = 24, className, ...props }) => {
  return (
    <div className={`bunting-divider ${className || ''}`} aria-hidden="true" {...props}>
      {[...Array(flags)].map((_, i) => (
        <div key={i} className="bunting-flag" />
      ))}
    </div>
  );
};
