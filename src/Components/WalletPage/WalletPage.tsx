// src/App.tsx
import React, { useState } from 'react';
import WalletCard from './WalletCard';
import CardDetails from './CardDetails';

interface Card {
  title: string;
  amount: string;
  cardNumber: string;
  bgColor: string;
  image: string;
  details: {
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
}

const App: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const cards: Card[] = [
    {
      title: "Main Wallet",
      amount: "$45,500.12",
      cardNumber: "4444 2212 2444",
      bgColor: "bg-purple-500",
      image: "/path/to/image1.png",
      details: {
        cardName: "Main Balance",
        bankName: "ABC Center Bank",
        validDate: "08/21",
        cardHolder: "Marquezz Silalahi",
        cardNumber: "**** **** **** 1234",
        cardTheme: ["bg-purple-500", "bg-orange-500", "bg-green-500", "bg-blue-500", "bg-pink-500"],
        mainLimits: 10000,
        secondLimits: 500,
        otherLimits: 100,
        categories: [
          { name: "Installment", percentage: 24 },
          { name: "Rent", percentage: 28 },
          { name: "Food", percentage: 18 },
          { name: "Restaurant", percentage: 21 },
          { name: "Investment", percentage: 9 },
        ],
      }
    },
    {
      title: "XYZ Wallet",
      amount: "$250.50",
      cardNumber: "4444 2212 2444",
      bgColor: "bg-green-500",
      image: "/path/to/image2.png",
      details: {
        cardName: "XYZ Balance",
        bankName: "XYZ Bank",
        validDate: "09/21",
        cardHolder: "John Doe",
        cardNumber: "**** **** **** 5678",
        cardTheme: ["bg-green-500", "bg-yellow-500", "bg-red-500", "bg-blue-500"],
        mainLimits: 20000,
        secondLimits: 1000,
        otherLimits: 200,
        categories: [
          { name: "Installment", percentage: 20 },
          { name: "Rent", percentage: 30 },
          { name: "Food", percentage: 15 },
          { name: "Restaurant", percentage: 25 },
          { name: "Investment", percentage: 10 },
        ],
      }
    },
    {
      title: "Cosmos Wallet",
      amount: "$30,000.00",
      cardNumber: "4444 2212 2444",
      bgColor: "bg-pink-500",
      image: "/path/to/image3.png",
      details: {
        cardName: "Cosmos Balance",
        bankName: "Cosmos Bank",
        validDate: "10/21",
        cardHolder: "Jane Smith",
        cardNumber: "**** **** **** 9101",
        cardTheme: ["bg-pink-500", "bg-purple-500", "bg-green-500", "bg-blue-500"],
        mainLimits: 30000,
        secondLimits: 1500,
        otherLimits: 300,
        categories: [
          { name: "Installment", percentage: 22 },
          { name: "Rent", percentage: 26 },
          { name: "Food", percentage: 16 },
          { name: "Restaurant", percentage: 20 },
          { name: "Investment", percentage: 16 },
        ],
      }
    },
    {
      title: "Solana Wallet",
      amount: "$15,000.00",
      cardNumber: "4444 2212 2444",
      bgColor: "bg-blue-500",
      image: "/path/to/image4.png",
      details: {
        cardName: "Solana Balance",
        bankName: "Solana Bank",
        validDate: "11/21",
        cardHolder: "Mike Johnson",
        cardNumber: "**** **** **** 1121",
        cardTheme: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500"],
        mainLimits: 15000,
        secondLimits: 750,
        otherLimits: 150,
        categories: [
          { name: "Installment", percentage: 18 },
          { name: "Rent", percentage: 32 },
          { name: "Food", percentage: 20 },
          { name: "Restaurant", percentage: 18 },
          { name: "Investment", percentage: 12 },
        ],
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <WalletCard 
              key={index}
              title={card.title}
              amount={card.amount}
              cardNumber={card.cardNumber}
              bgColor={card.bgColor}
              onClick={() => setSelectedCardIndex(index)} 
            />
          ))}
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-full">+ Add Wallet</button>
      </div>
      {selectedCardIndex !== null && (
        <CardDetails {...cards[selectedCardIndex].details} />
      )}
    </div>
  );
}

export default App;
