
// src/components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonLabel, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      {/* Gambar */}
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      
      <div className="px-6 py-4">
        {/* Judul */}
        <div className="font-bold text-xl mb-2">{title}</div>
        
        {/* Deskripsi */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      
      <div className="px-6 py-4">
        {/* Tombol */}
        <button
          onClick={onClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
