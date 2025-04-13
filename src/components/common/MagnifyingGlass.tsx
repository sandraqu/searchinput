import React from 'react';

interface MagnifyingGlassProps {
  styling?: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({
  handleClick,
  styling,
  ...props
}) => {
  return (
    <div
      className={`flex-shrink-0 ${styling} ${handleClick && 'cursor-pointer'}`}
      onClick={handleClick}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default MagnifyingGlass;
