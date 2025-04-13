import React from 'react';

interface XMarkProps {
  styling?: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const XMark: React.FC<XMarkProps> = ({ styling, handleClick, ...props }) => {
  return (
    <div
      onClick={handleClick}
      className={`flex-shrink-0 ${styling} ${handleClick && 'cursor-pointer'}`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default XMark;
