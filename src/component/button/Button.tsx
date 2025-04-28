'use client';  // Menandai komponen ini sebagai Client Component

import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const buttonStyles = {
    primary: 'bg-blue-500 text-white m-2 hover:bg-blue-600',
    success: 'bg-green-500 text-white m-2 hover:bg-green-600',
    warning: 'bg-yellow-500 text-black m-2 hover:bg-yellow-600',
    danger: 'bg-red-500 text-white m-2 hover:bg-red-600',
  };

  const selectedStyle = buttonStyles[variant] || buttonStyles.primary;

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
