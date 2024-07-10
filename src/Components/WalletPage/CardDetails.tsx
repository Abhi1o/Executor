// src/components/CardDetails.tsx
import React from 'react';

interface CardDetailsProps {
  cardName: string;
  bankName: string;
  validDate: string;
  cardHolder: string;
  cardNumber: string;
  cardTheme: string[];
  mainLimits: number;
  secondLimits: number;
  otherLimits: number;
  categories: { name: string, percentage: number }[];
}

const CardDetails: React.FC<CardDetailsProps> = ({ 
  cardName, 
  bankName, 
  validDate, 
  cardHolder, 
  cardNumber, 
  cardTheme, 
  mainLimits, 
  secondLimits, 
  otherLimits,
  categories 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl mb-4">Card Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Card Name: {cardName}</p>
          <p>Bank Name: {bankName}</p>
          <p>Valid Date: {validDate}</p>
          <p>Card Holder: {cardHolder}</p>
          <p>Card Number: {cardNumber}</p>
          <p>Card Theme: {cardTheme.map(color => (
            <span key={color} className={`inline-block w-4 h-4 rounded-full mr-1 ${color}`} />
          ))}</p>
        </div>
        <div>
          <p>Monthly Limits:</p>
          <p>Main Limits: ${mainLimits}</p>
          <p>Second Limits: ${secondLimits}</p>
          <p>Other Limits: ${otherLimits}</p>
          <div className="flex">
            {categories.map(category => (
              <div key={category.name} className="mr-4">
                <p>{category.name}: {category.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
