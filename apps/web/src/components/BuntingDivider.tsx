import React from 'react';

export const BuntingDivider = () => {
  return (
    <div className="w-full overflow-hidden leading-0 flex justify-center py-4">
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
