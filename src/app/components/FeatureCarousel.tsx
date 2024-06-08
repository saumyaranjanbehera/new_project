"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string; // Add imgSrc property
}

const features: Feature[] = [
  {
    title: "Ultra-Fast Response",
    description:
      "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
    buttonText: "Try now",
    imgSrc: "https://call.toingg.com/images/Response.svg", 
  },
  {
    title: "Smart Interruption Management",
    description:
      "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations",
    buttonText: "Learn more",
    imgSrc: "https://call.toingg.com/images/interruption.svg",
  },
  {
    title: "Advanced Memory Recall",
    description:
      "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
    buttonText: "Learn more",
    imgSrc: "https://call.toingg.com/images/memory.svg",
  },
 
  {
    title: "Dynamic Conversational Flows",
    description:
      "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
    buttonText: "Learn more",
    imgSrc: "https://call.toingg.com/images/conversational.svg", 
  },
  {
    title: "Custom AI Solutions",
    description:
      "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
    buttonText: "Learn more",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9bb1f32f0ee6f4a90c4d0b4631b5e6f3e9d013bcf6bd1a004459f759cb2fe?apiKey=4f9ab024be65425d98b6f0dcbd459477&", 
  },
  {
    title: "Scalability at Your Fingertips",
    description:
      "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business..",
    buttonText: "Learn more",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9f904e78a506d435ed42f76be30f6b2b24e29becc1de59f5022e87e30bcb3b5?apiKey=4f9ab024be65425d98b6f0dcbd459477&", 
  },
  // Add more features here
];

const FeatureCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    } else if (direction === "right") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + features.length) % features.length
      );
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -1000) {
              handleSwipe("left");
            } else if (swipe > 1000) {
              handleSwipe("right");
            }
          }}
        >
          <FeatureCard {...features[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-4">
        {features.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
