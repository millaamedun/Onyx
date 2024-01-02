import Image from "next/image";
import React from "react";

import stone from '../public/assets/stone/photo_2024-01-01_15-06-25 (2).jpg'
import stone1 from '../public/assets/stone/photo_2024-01-01_15-06-07.jpg'
import stone2 from '../public/assets/stone/photo_2024-01-01_15-06-09.jpg'
import stone3 from '../public/assets/stone/photo_2024-01-01_15-06-20 (2).jpg'


const Process = () => {
  return (
    <>
    <div className="w-full bg-[#f1f3ec] font-['poppins']">
      <div className="w-full mx-auto flex justify-normal items-start">
        <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[79.2vh]"></div>
        <div className="relative w-[17.9%] border-x-[1.8px] border-[#e0e2da9f] h-[79.2vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.63rem] h-full">
              <h2 className="mt-[3.6rem]  text-[1.8rem] uppercase mb-[6rem]">
                Process
              </h2>
              <span className="px-[6.3px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.63rem]">
                1
              </span>
              <p className="py-[9px] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[52.5%] border-x-[1.8px]  border-[#e0e2da9f] h-[79.2vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[12.6rem]">
                <Image className='h-[55.8vh] w-full'
                        src={stone}
                         alt="stone" 
                /> 
            </div>
          </div>
        </div>
        <div className="relative w-[17.6%] border-x-[1.8px] border-[#e0e2da9f] h-[79.2vh]">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[21.6rem]">
            <span className="px-[6.3px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.63rem]">
                2
              </span>
              <p className="pt-[9px] pb-[27px] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia .
              </p>
              <Image className="h-[27.9vh]"
                        src={stone1}
                         alt="stone"
              />
            </div>
        </div>
        </div>
        <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[79.2vh]"></div>
      </div>
    </div>
    <div className="w-full bg-[#f1f3ec] border-b-[2.7px] border-[#e0e2da9f] font-['poppins']">
      <div className="w-full mx-auto flex justify-normal items-start">
        <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]"></div>
        <div className="w-[44%] flex justify-normal items-start">
          <div className="w-[41%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]"></div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[12.6vh]">
            <span className="px-[5.4px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.63rem]">
                3
              </span>
              <p className="pt-[9px] pb-[27px] pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image className="h-[39.6vh]"
                        src={stone3}
                         alt="stone"
              />
            </div>
          </div>
          </div>
        </div>
        <div className="relative w-[44%] flex justify-normal items-start">
            <div className="absolute top-0 left-0 w-full  z-[3]">
              <Image className="mt-[23.9vh] h-[54.9vh] px-[.9rem]"
                        src={stone2}
                         alt="stone"
              />
            </div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[12.6vh]">
            <span className="px-[5.4px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.63rem]">
                4
              </span>
              <p className="pt-[9px] pb-[27px] pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa sint occaecat  qui officia deserunt qui officia sint occaecat cupidatat non.
              </p>
            </div>
          </div>
          </div>
          <div className="w-[40%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]">
          </div>
        </div>
        <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]"></div>
      </div>
    </div>
    </>
  );
};

export default Process;
