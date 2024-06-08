"use client";
import React from "react";

function TrustAndSafety() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <img
            src="https://c.animaapp.com/coXYt0uv/img/security-shield@2x.png"
            alt="Security Shield"
            className="w-20 h-20 bg-white rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center text-black">
          The highest standards of trust and safety
        </h1>
        <p className="text-lg text-center text-black">
          We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues
          to benefit consumers, businesses, and society as a whole.
        </p>
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="flex flex-col items-center mr-8">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://call.toingg.com/images/call.svg"
              alt="Call Monitoring"
              className="w-8 h-8"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-black">Call Monitoring</p>
          </div>
        </div>
        <div className="flex flex-col items-center ml-8">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://call.toingg.com/images/promptInjection.svg"
              alt="Prompt Injection"
              className="w-8 h-8"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-black">Prompt Injection</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="flex flex-col items-center mr-8">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://c.animaapp.com/coXYt0uv/img/scales@2x.png"
              alt="Rate Limits"
              className="w-8 h-8"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-black">Rate Limits</p>
          </div>
        </div>
        <div className="flex flex-col items-center ml-8">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://c.animaapp.com/coXYt0uv/img/analyze@2x.png"
              alt="Internal Hard Audits"
              className="w-8 h-8"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-black">Internal Hard Audits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustAndSafety;
