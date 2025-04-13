import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styling?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  value?: any;
  helperText?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  styling,
  handleChange,
  placeholder,
  type,
  value,
  ...props
}) => {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || 'Search'}
      onChange={handleChange}
      className={`min-w-0 ${styling}`}
      value={value || ''}
      {...props}
    />
  );
};

export default Input;
