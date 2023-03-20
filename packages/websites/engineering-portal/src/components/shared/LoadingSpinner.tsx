import React, { FC } from 'react';

interface LoadingSpinnerProps {
  content?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = function ({ content }) {
  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-stone-400/25">
      <div className="flex flex-col items-center justify-center" role="status">
        <svg
          className="h-16 w-16 animate-spin text-white"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
        <p className="mt-1 text-base">{content}</p>
      </div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  content: '',
};

export default LoadingSpinner;
