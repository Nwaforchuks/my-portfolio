"use client";

import { useState } from 'react';
import { frameworkImage } from '@/lib/types';
import Image from 'next/image';
import style from "../scope.module.css"

export default function DatabaseDropdown() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const cards = frameworkImage.slice(2); // Example data array

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3 md:gap-3 md:p-0 ">
      {cards.map(({ id, imageSrc, altText, title, description }) => {
        const isExpanded = expandedId === id;
        
        return (
          /* 1. Parent wrapper preserves the exact grid spot */
          <div key={id} className="relative h-fit w-full md:min-w-[231px]">
            
            {/* 2. Card breaks out of flow smoothly when expanded */}
            <div 
              className={`
                bg-[#424040] border-4 border-gray-700 rounded-xl  shadow-sm transition-all duration-300
                ${isExpanded 
                  ? 'absolute top-0 left-0 right-0 h-fit z-50 shadow-2xl border-blue-500' 
                  : 'h-full w-full z-10'
                }
              `}
            >
              {/* Header with Title and Dropdown Arrow Button */}
              <div className="flex justify-between items-center">
                {/* Fixed items-start so text aligns nicely when description is short */}
                <div className="flex flex-col justify-center items-start pl-2">
                    <h3 className="font-bold text-[1rem] text-[#D9D9D9] mb-1">{title}</h3>
                    {isExpanded ? "" : <p className="font-semibold text-[0.75rem] text-[#D9D9D9]">{description}</p>}  
                </div>
                
                {/* 3. The Toggle Arrow Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : id)}
                  aria-label={isExpanded ? "Collapse card" : "Expand card"}
                  className="p-2 hover:bg-zinc-700 rounded-full transition-colors duration-200 focus:outline-none"
                >
                  {/* SVG Arrow icon that rotates 180 degrees */}
                  <svg 
                    xmlns="http://w3.org" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-blue-500' : 'rotate-0'
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* 4. Overlay Content - Centered Vertically */}
              {isExpanded && (
                <div className={`mt-4 pt-4 text-sm text-[#D9D9D9] animate-fadeIn flex flex-col text-center   ${isExpanded? "": "justify-center"} items-center h-[calc(100%-4rem)] gap-4`}>
                  
                  {/* Full-width Image Wrapper Container */}
                  <div className="relative w-full h-auto">
                    <Image
                      src={imageSrc}
                      alt={altText}
                      width={1024}
                      height={1024}
                      className={`${style.skillCardImage} rounded-[10px] `}
                      
                    />
                  </div>

                  {/* Centered Sub-text Description */}
                  <p className="text-center font-medium px-2 leading-relaxed">
                    {description}
                  </p>
                  
                </div>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}