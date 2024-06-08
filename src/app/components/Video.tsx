import React from 'react';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: 'https://call.toingg.com/images/google-sheets-icon.svg', alt: 'Google Sheets' },
  { src: 'https://call.toingg.com/images/Calendly.svg', alt: 'Calendly' },
  { src: 'https://call.toingg.com/images/HubSpot.svg', alt: 'HubSpot' },
  { src: 'https://call.toingg.com/images/zapier2-1.svg', alt: 'Zapier' },
  { src: 'https://call.toingg.com/images/salesforce.svg', alt: 'Salesforce' },
  { src: 'https://call.toingg.com/images/shopify-logo-svgrepo-com.svg', alt: 'Shopify' },
  { src: 'https://call.toingg.com/images/slack.svg', alt: 'Slack' }
];

const Video: React.FC = () => {
  return (
    <div className="w-full h-screen text-center mt-10 px-4">
      <h1 className="text-2xl text-gray-800 mb-4">Automate your agent with 5000+ integrations like</h1>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-[44px] h-[38px]"
          />
        ))}
      </div>
      <div className="relative mt-12 mx-auto" style={{ width: '100%', maxWidth: '327px', height: 'auto' }}>
        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe
            src="https://www.youtube.com/embed/_La3wQlntgw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
