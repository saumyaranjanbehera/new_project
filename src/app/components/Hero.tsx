"use client"
const Hero = () => (
    <section id="hero" className="h-[530px] flex flex-col pt-20 text-center px-4 sm:px-8 md:px-16 lg:px-24 ">
      <h1 className="text-2xl sm:text-3xl text-gray-600">Build AI Calling Agent that can do</h1>
      <p className="text-2xl sm:text-3xl font-bold mb-10">Sales Call</p>
      
      <div className="mt-5 mx-auto p-4 w-full sm:w-96 h-20 rounded-[10px] bg-gradient-to-b from-[#f4ad7a] to-[#d76c20]">
        <p className="text-white">Build your own voice agent</p>
        <p className="text-black font-medium">'It's free!'</p>
      </div>
      <div className="mt-5 mx-auto p-4 w-56 sm:w-60 h-16 rounded-[10px] border-2 border-black bg-white">
        <p className="text-black font-bold">Hear it in action</p>
      </div>
    </section>
  );
  
  export default Hero;
  