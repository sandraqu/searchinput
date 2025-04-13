import MagnifyingGlass from './common/MagnifyingGlass';
import Input from './common/Input';
import XMark from './common/XMark';
import React, { useState } from 'react';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (e.target.value.length < 3 && e.target.value.length > 0) {
      const newTimeout = setTimeout(() => {
        setError(true);
      }, 1000);
      setTypingTimeout(newTimeout);
    } else {
      setError(false);
    }
  };

  const handleReset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Resetting search term');
    setSearchTerm('');
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  return (
    <div>
      <div
        className={`flex items-center border border-gray-400 text-gray-400 rounded-md p-1 ${error && 'border-pink-600'}`}
      >
        <MagnifyingGlass handleClick={handleSearch} styling="h-5 w-5 m-2" />
        <Input
          handleChange={handleChange}
          styling="border-none outline-none px-2 py-1 text-cyan-600 dark:text-blue-100"
          value={searchTerm}
          placeholder="Search for dinos..."
          type="text"
        />
        <XMark handleClick={handleReset} styling="h-5 w-5 m-2" />
      </div>
      {error ? (
        <p className="text-pink-700 dark:text-pink-700">
          Hey, please add more than 3 letters.
        </p>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
};

export default SearchInput;
