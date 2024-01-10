import Image from "next/image";
import React from "react";

import stone from '../public/assets/stone/photo_2024-01-01_15-06-25 (2).jpg'
import stone1 from '../public/assets/stone/photo_2024-01-01_15-06-07.jpg'
import stone2 from '../public/assets/stone/photo_2024-01-01_15-06-09.jpg'
import stone3 from '../public/assets/stone/photo_2024-01-01_15-06-20 (2).jpg'


const Process = () => {
  return (
    <div className=" bg-[#f1f3ec]">
    <div className="max-w-[1161px] mx-auto w-full font-['poppins']">
      <div className="w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#e0e2da9f] h-[36vh] xl:h-[79.2vh]"></div>
        <div className="relative w-[33.6%] xl:w-[17.9%] border-x-[1.8px] border-[#e0e2da9f] h-[36vh] md:h-[45vh] xl:h-[79.2vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.63rem] h-full">
              <h2 className="mt-[3.6rem] text-[1.26rem] md:text-[1.8rem] uppercase mb-[3.6rem] md:mb-[6rem]">
                Process
              </h2>
              <span className="px-[5.4px] md:px-[6.3px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.54rem] md:text-[.72rem]">
                1
              </span>
              <p className="py-[9px] text-[#333] text-[.45rem] md:text-[.63rem] md:pr-[3.6rem] xl:pr-0">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[49.2%] xl:w-[52.5%] border-x-[1.8px]  border-[#e0e2da9f] h-[36vh] md:h-[45vh] xl:h-[79.2vh]">
          <div className="hidden xl:block absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="px-[.9rem] mt-[12.6rem]">
                <Image className='h-[55.8vh] w-full'
                        src={stone}
                         alt="stone" 
                /> 
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block w-[17.6%] border-x-[1.8px] border-[#e0e2da9f] h-[36vh] md:h-[45vh] xl:h-[79.2vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#e0e2da9f] h-[36vh] md:h-[45vh] xl:h-[79.2vh]"></div>
      </div>
      <div className="xl:hidden w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#e0e2da9f] h-[58.5vh] md:h-[72vh]"></div>
        <div className="relative w-[82.8%] border-[1.8px]  border-[#e0e2da9f] h-[58.5vh] md:h-[72vh]">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="p-[.63rem] mt-[0rem]">
                <Image className='h-[55.8vh] md:h-[69.3vh] w-full'
                        src={stone}
                         alt="stone" 
                /> 
            </div>
          </div>
        </div>
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#e0e2da9f] h-[58.5vh] md:h-[72vh]"></div>
      </div>
      <div className="xl:hidden w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#e0e2da9f] h-[45vh] sm:h-[63vh] md:h-[81vh]"></div>
        <div className="relative w-[33.6%] xl:w-[17.9%] border-x-[1.8px] border-[#e0e2da9f] h-[45vh] sm:h-[63vh] md:h-[81vh]">
        </div>
        <div className="relative w-[49.2%] border-x-[1.8px] border-[#e0e2da9f] h-[45vh] sm:h-[63vh] md:h-[81vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="px-[.9rem] mt-[3.6rem] md:mt-[6.3rem]">
            <span className="px-[5.4px] py-[.99px] rounded-full border-[1.8px] border-[#333] text-[.54rem] md:text-[.72rem]">
                2
              </span>
              <p className="pt-[9px] pb-[27px] text-[#333] text-[.45rem] md:text-[.63rem] md:pr-[6.3rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia .
              </p>
              <Image className="h-[27.9vh] sm:h-[45vh] md:h-[54vh]"
                        src={stone1}
                         alt="stone"
              />
            </div>
        </div>
        </div>
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#e0e2da9f] h-[45vh] sm:h-[63vh] md:h-[81vh]"></div>
      </div>
    </div>
    <div className="max-w-[1161px] mx-auto w-full border-b-[2.7px] border-[#e0e2da9f] font-['poppins']">
      <div className="w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#e0e2da9f] h-[54vh] sm:h-[72vh] md:h-[81vh] xl:h-[86.4vh]"></div>
        <div className="w-[82%] xl:w-[44%] flex justify-normal items-start">
          <div className="relative w-[41%] border-x-[1.8px] border-[#e0e2da9f] h-[54vh] sm:h-[72vh] md:h-[81vh] xl:h-[86.4vh]">
          <div className="block xl:hidden absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[6.3vh]">
            <span className="px-[4.5px] md:px-[5.4px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.54rem] md:text-[.72rem]">
                3
              </span>
              <p className="pt-[9px] pb-[27px] text-[#333] text-[.45rem] md:text-[.63rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          </div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[54vh] sm:h-[72vh] md:h-[81vh] xl:h-[86.4vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[12.6vh]">
            <span className="hidden xl:inline-block px-[5.4px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.54rem] md:text-[.72rem]">
                3
              </span>
              <p className="hidden xl:block pt-[9px] pb-[27px] pr-[3.6rem] text-[#333] text-[.45rem] md:text-[.63rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image className="h-[27vh] sm:h-[45vh] md:h-[54vh] xl:h-[39.6vh] mt-[6.3vh] xl:mt-[0vh]"
                        src={stone3}
                         alt="stone"
              />
            </div>
          </div>
          </div>
        </div>
        <div className="hidden relative w-[44%] xl:flex justify-normal items-start">
            <div className="absolute top-0 left-0 w-full  z-[3]">
              <Image className="mt-[23.9vh] h-[54.9vh] px-[.9rem]"
                        src={stone2}
                         alt="stone"
              />
            </div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[86.4vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[12.6vh]">
            <span className="px-[4.5px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.63rem]">
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
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#e0e2da9f] h-[54vh] sm:h-[72vh] md:h-[81vh] xl:h-[86.4vh]"></div>
      </div>
      <div className="xl:hidden w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] border-r-[1.8px] border-[#e0e2da9f] h-[63vh] sm:h-[81vh] md:h-[90vh]"></div>
        <div className="w-[82%] relative flex justify-normal items-start">
            <div className="absolute top-0 left-0 w-full  z-[3]">
              <Image className="mt-[18vh] md:mt-[27vh] h-[36vh] sm:h-[54vh] p-[.63rem] bg-[#f1f3ec] border-[1.8px] border-[#e0e2da9f]"
                        src={stone2}
                         alt="stone"
              />
            </div>
          <div className="w-[41%] border-x-[1.8px] border-[#e0e2da9f] h-[63vh] sm:h-[81vh] md:h-[90vh]">
          </div>
        <div className="relative w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[63vh] sm:h-[81vh] md:h-[90vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="px-[.9rem] mt-[2.7vh] md:mt-[3.6rem]">
            <span className="px-[3.6px] md:px-[4.5px] py-[.9px] rounded-full border-[1.8px] border-[#333] text-[.54rem] md:text-[.72rem]">
                4
              </span>
              <p className="pt-[9px] pb-[27px] text-[#333] text-[.45rem] md:text-[.63rem] ">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa sint occaecat  qui officia deserunt qui officia sint occaecat cupidatat non.
              </p>
            </div>
          </div>
          </div>
          </div>
        <div className="w-[9%] border-l-[1.8px] border-[#e0e2da9f] h-[63vh] sm:h-[81vh] md:h-[90vh]"></div>
      </div>
    </div>
    </div>
  );
};

export default Process;
