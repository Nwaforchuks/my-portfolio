"use client";
import { useState } from 'react';
import {carouselItem} from '../../lib/types';
import  Image from 'next/image';



export const stackImage: carouselItem[] = [
  { id: 1, name: 'CSS', icon: "/home/css-logo.png" }, // Replace icons with your local <img> or <Image> paths
  { id: 2, name: 'HTML', icon: "/home/html-logo.png" },
  { id: 3, name: 'JavaScript', icon: "/home/javascript.png" },
  { id: 4, name: 'MongoDB', icon: "/home/mongodb-logo.png" },
  { id: 5, name: 'Node.js', icon: "/home/nodejs.png" },
  { id: 6, name: 'SQL', icon: "/home/sql.png" },
  { id: 7, name: 'Tailwind CSS', icon: "/home/tailwind-css.png" },
  { id: 8, name: 'Next.js', icon: "/home/vecteezy_nervos-network-ckb-glass-crypto-coin-3d-illustration_24093153.png" },
  { id: 9, name: 'React', icon: "/home/vecteezy_react-js-programing-language-3d-icon-transparent-background_60194936.png" }
];



export default function SkillCarousel() {

 const [activeIndex, setActiveIndex] = useState<number>(1);

 const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? stackImage.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === stackImage.length - 1 ? 0 : prev + 1));
  };


  // Helper function to handle visible items array cycling
  const getVisibleIndices = () => {
    const total = stackImage.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
     <div className="flex items-center  w-full justify-between md:w-[50%]">
        
        {/* Left Arrow Button */}
        <button 
          onClick={handlePrev} 
          className="text-white text-3xl font-light hover:opacity-70 transition pl-2 pr-2 pb-2 focus:outline-none"
        >
          &lt;
        </button>

        {/* Carousel Window Track */}
        <div className="flex items-center justify-center gap-x-4 flex-1 h-[59px] overflow-visible w-[80%]">
          {visibleIndices.map((dataIndex, displayIndex) => {
            const item = stackImage[dataIndex];
            const isCenter = displayIndex === 1; // The middle index in our visible array

            return (
              <div
                key={item.id}
                className={`
                  flex flex-col items-center justify-center
                  bg-[#262424] text-white rounded-2xl 
                  w-[30%]  h-[59px] sm:h-[59px]
                  transition-all duration-300 ease-in-out
                  ${isCenter ? 'scale-125 z-10 mx-4 border border-gray-600 shadow-xl' : 'scale-95 opacity-50 z-0'}
                `}
              >
                {/* Skill Icon */}
                <div className="  flex items-center justify-center h-12 w-12 bg-white/5 rounded-xl mt-[5px]">
                 <Image src={item.icon} alt={item.name} width={42.98} height={42.98} className="object-contain h-[42.98px] w-[42.98px] " />
                </div>
                
                {/* Skill Label */}
                <span className="text-[0.60rem] font-bold tracking-wide text-center  w-full ">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={handleNext} 
          className="text-white text-3xl font-light hover:opacity-70 transitionpl-2 pr-2 pb-2 focus:outline-none"
        >
          &gt;
        </button>

      </div>
  )

}