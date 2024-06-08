import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, buttonText, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" /> 
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;
