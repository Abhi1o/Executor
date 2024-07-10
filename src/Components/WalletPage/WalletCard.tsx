// src/components/WalletCard.tsx
import React from 'react';

interface WalletCardProps {
  title: string;
  amount: string;
  cardNumber: string;
  bgColor: string;
  onClick: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({ title, amount, cardNumber, bgColor, onClick }) => {
  return (
    <div className={`relative p-6 rounded-lg ${bgColor} text-white cursor-pointer`} onClick={onClick}>
      <h2 className="text-lg mb-2">{title}</h2>
      <p className="text-3xl font-bold mb-8">{amount}</p>
      <div className="absolute bottom-4 left-4">
        <p className="text-sm">{cardNumber}</p>
      </div>
      <div className="absolute top-4 right-4">
        <img src="/path/to/your/image.png" alt="Card Image" className="w-12 h-12" />
      </div>
    </div>
  );
}

export default WalletCard;
