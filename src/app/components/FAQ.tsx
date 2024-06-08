"use client"
import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        { question: 'What is Toingg\'s Price?', answer: 'TOINGG is an AI calling agent for sales automation.' },
        { question: 'What is Toingg?', answer: 'It automates calling tasks using AI technology.' },
        { question: 'How secure is Toingg?', answer: 'It automates calling tasks using AI technology.' },
        { question: 'How does billing work?', answer: 'It automates calling tasks using AI technology.' },
        { question: 'What phone number can I use with Toingg?', answer: 'It automates calling tasks using AI technology.' },
        { question: 'Does Toingg support multiple languages?', answer: 'It automates calling tasks using AI technology.' },
    ];

    return (
        <section id="faq" className="container mx-auto py-8 px-4 sm:px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <details
                        key={index}
                        className={`bg-white p-4 rounded-lg shadow-lg ${openIndex === index ? 'border-l-4 border-orange-500' : ''}`}
                        open={openIndex === index}
                        onClick={() => handleToggle(index)}
                    >
                        <summary className="font-semibold flex justify-between items-center">
                            {item.question}
                            <span className="ml-2 text-xl">{openIndex === index ? '-' : '+'}</span>
                        </summary>
                        <p>{item.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
