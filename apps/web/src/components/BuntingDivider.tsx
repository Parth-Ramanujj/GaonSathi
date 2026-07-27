import React from 'react';

interface BuntingDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  flags?: number;
}

export const BuntingDivider: React.FC<BuntingDividerProps> = ({ flags, className, ...props }) => {
  return (
    <div className={`w-full overflow-hidden leading-0 flex justify-center py-4 ${className || ''}`} {...props}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8"
      >
        <path
          d="M0 0l600 120L1200 0v120H0V0z"
          className="fill-current text-primary opacity-20"
        />
      </svg>
    </div>
  );
};
