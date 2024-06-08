import React from "react";

interface FineCardProps {
  title: string;
  description: string;
  imgSrc: string; 
}

const FineCard: React.FC<FineCardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" /> 
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default FineCard;
