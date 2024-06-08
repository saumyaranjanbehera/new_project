"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FineCard from "./FineCard";

interface Feature {
  title: string;
  description: string;
  imgSrc: string; 
}

const features: Feature[] = [
  {
    title: "Fine tuning",
    description:
      "Elevate Your Agent Interactions With Our Fine-tuning Technique, Not only LLM weights but Prompts and parameters too.",
    imgSrc: "https://c.animaapp.com/CnZn5oX7/img/tune@2x.png", 
  },
  {
    title: "Custom tools",
    description:
      "Enhanced Agent Capabilities: Instantly access customer history, integrate databases, and connect to APIs during calls. Simplify tasks like scheduling and data handling, all while leveraging past call insights for smarter interactions.",
    imgSrc: "https://c.animaapp.com/CnZn5oX7/img/tools@2x.png",
  },
  {
    title: "Dedicated infrastructure",
    description:
      "Experience unmatched scalability and reliability with our dedicated Kubernetes clusters, designed for high availability to support up to 10,000 concurrent calls. Enjoy exclusive server access, bypassing standard rate limits, complemented by our 24/7 expert support.",
    imgSrc: "https://c.animaapp.com/CnZn5oX7/img/voice@2x.png",
  },
];  

const FeatureFine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
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
          <FineCard {...features[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-4">
        {features.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureFine;
