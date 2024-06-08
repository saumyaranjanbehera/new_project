import React from 'react';

const Vid: React.FC = () => {
  return (
    <div className="bg-[#FFD3B4] rounded-[10px] relative w-[280px] max-w-[350px] mx-auto mt-14 mb-4">
      <div className="w-full max-w-md mx-auto">
        <div className="relative pb-16/9 rounded-[20px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full"
            src=''
            controls
          />
        </div>
        
        <div className=" mt-8">
          <h1 className="text-2xl font-medium mb-4 text-center">Explore TOINGG in GPT Store</h1>
          <p className="text-gray-700 mb-4">. Interactive Communication: Engage in single or batch calls using TOINGG GPT.</p>
          <p className="text-gray-700 mb-4">. Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</p>
          <p className="text-gray-700 mb-4">. Data Export: Conveniently export call logs to CSV.</p>
          <p className="text-gray-700 mb-4">. Enhanced Usability: Tailored for users familiar with CSV functionalities.</p>
          <div className='text-center'>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md  justify-center">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vid;
