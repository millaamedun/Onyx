import React from "react";

import stone1 from '../public/assets/stone/photo_2024-01-01_15-06-01.jpg'
import stone2 from '../public/assets/stone/photo_2024-01-01_15-06-16.jpg'


import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-[#b4bdbc] border-b-[2.7px] border-[#abb4b3] font-['poppins'] mt-[6.3vh]">
      <div className="max-w-[1161px] w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#aeb7b6] h-[81vh] md:h-[90vh] xl:h-[72vh]"></div>
        <div className="relative w-[82%] xl:w-[44%] flex justify-normal items-start">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full p-[.63rem] pb-0 flex flex-col justify-normal items-start
                                 mt-[4.86rem] border-b-[1.8px] border-[#abb4b3]">
                    <div className="w-full py-[.63rem] flex justify-between items-end">
                        <div className="w-[54%] flex flex-col">
                            <p className="text-[.36rem] md:text-[.45rem]">stone cutting</p>
                            <h1 className="text-[2.16rem] md:text-[3.33rem] pb-[.9rem]">ONYX</h1>
                        </div>
                        <p className="w-full text-[.36rem] md:text-[.45rem] text-end pb-[.9rem]">something cool <br/> about stone <br/> stone</p>
                    </div>
                    <Image className="h-[450px] xl:h-[360px] pb-[.63rem] bg-[#b4bdbc] object-cover" 
                            src={stone1}
                             alt="stone"
                    /> 
                </div>
            </div>
          <div className="w-[41%] border-x-[1.8px] border-[#aeb7b6] h-[81vh] md:h-[90vh] xl:h-[72vh]"></div>
          <div className="w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[81vh] md:h-[90vh] xl:h-[72vh]"></div>
        </div>
        <div className="hidden w-[44%] xl:flex justify-normal items-start">
          <div className="relative w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[72vh]">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full px-[1.26rem] mt-[13.5rem] pr-[3.6rem]">
                    <h1 className=" text-[1.008rem] text-[#333] font-bold uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</h1>
                    <p className="pt-[1.8rem] pb-[.9rem] text-[#444] text-[.54rem]">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className=" text-[#444] text-[.54rem]">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt aute irure dolor.</p>
                </div>
            </div>
          </div>
          <div className="relative w-[40%] border-x-[1.8px] border-[#aeb7b6] h-[72vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full pr-[.54rem] mt-[13.5rem] h-[300px]">
                <Image className="w-[54%] h-[162px] object-cover ml-auto mb-[.9rem]"
                        src={stone2}
                         alt="stone"
                />
                <div className="w-[54%] flex justify-between items-center ml-auto">
                    <p className="w-[72%] text-[.54rem]">Stone Cutting</p>
                    <span className="w-[9px] h-[9px] rounded-full bg-[#333] "></span>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#aeb7b6] h-[81vh] md:h-[90vh] xl:h-[72vh]"></div>
      </div>
      <div className="max-w-[1161px] xl:hidden w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] border-r-[1.8px] border-[#aeb7b6] h-[63vh]"></div>
        <div className="w-[82%] flex justify-normal items-start">
          <div className="relative w-[41%] border-x-[1.8px] border-[#aeb7b6] h-[63vh]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full pr-[.54rem] mt-[0rem] h-[300px]">
                <Image className="w-[81%] sm:w-[72%] md:w-[63%] h-[162px] sm:h-[216px] md:h-[270px] object-cover ml-auto mb-[.9rem]"
                        src={stone2}
                         alt="stone"
                />
                <div className="w-[81%] sm:w-[72%] md:w-[63%] flex justify-between items-center ml-auto">
                    <p className="w-[72%] text-[.54rem] md:text-[.63rem]">Stone Cutting</p>
                    <span className="w-[9px] h-[9px] rounded-full bg-[#333] "></span>
                </div>
            </div>
          </div>
          </div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[63vh]">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full px-[1.26rem] mt-[6.3rem] pr-[3.033rem] md:pr-[9rem]">
                    <h1 className="text-[.81rem] md:text-[1.26rem] text-[#333] font-bold uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
                    <p className="pt-[1.8rem] pb-[.9rem] text-[#444] text-[.45rem] md:text-[.63rem]">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className=" text-[#444] text-[.45rem] md:text-[.63rem]">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt aute irure dolor.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[9%] border-l-[1.8px] border-[#aeb7b6] h-[63vh]"></div>
      </div>
    </div>
  );
};

export default Hero;
