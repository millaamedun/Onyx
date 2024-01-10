import Image from "next/image";
import React from "react";

import stone from "../public/assets/stone/photo_2024-01-01_15-06-23.jpg";
import stone1 from "../public/assets/stone/photo_2024-01-01_15-06-14.jpg";
import stone2 from "../public/assets/stone/photo_2024-01-01_15-06-18 (2).jpg";
import stone3 from "../public/assets/stone/photo_2024-01-01_15-06-22.jpg";


const Related = () => {
  return (
    <div className="w-full bg-[#b0b3bc] border-b-[2.7px] border-[#bdc0c9] font-['poppins']">
      <div className="max-w-[1161px] w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#bdc0c9] h-[63vh] sm:h-[81vh] xl:h-[72vh]"></div>
        <div className="w-[82%] xl:w-[44%] flex justify-normal items-start">
          <div className="relative w-[41%] border-x-[1.8px] border-[#bdc0c9] h-[63vh] sm:h-[81vh] xl:h-[72vh]">
            <div className="absolute top-0 left-0 md:right-0 w-full md:w-[72%] md:mx-auto xl:mx-0 xl:w-full h-full overflow-hidden">
              <div className="px-[.45rem] xl:px-[.63rem] mt-[6.3vh]">
                <h2 className="text-[1.26rem] md:text-[1.8rem] uppercase mb-[8.1vh]">Related</h2>
                <div className="w-full mb-[1.8vh] xl:mb-[0px]">
                  <div className="w-full h-[8.1vh] flex flex-col xl:flex-row justify-between items-start">
                    <div className="group w-[90%] xl:w-[36%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('1')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] ml-[9px] xl:ml-0 text-[#363636] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="mb-[.9vh] xl:mb-0" src={stone} alt="stone" />
                <p className="pt-[9px] pb-[27px] pr-0 xl:pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
            </div>
          </div>
          <div className="relative w-[60%] border-x-[1.8px] border-[#bdc0c9] h-[63vh] sm:h-[81vh] xl:h-[72vh]">
            <div className="absolute top-0 left-0 md:right-0 w-full md:w-[72%] md:mx-auto xl:mx-0 xl:w-full h-full overflow-hidden">
              <div className="px-[1.08rem] mt-[18vh] md:mt-[18.9vh]">
                <div className="w-full mb-[1.8vh] xl:mb-0">
                  <div className="w-full h-[8.1vh] flex flex-col xl:flex-row justify-between items-start">
                    <div className="group w-[90%] xl:w-[36%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('2')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] ml-[9px] xl:ml-0 text-[#363636] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="mb-[.9vh] xl:mb-0" src={stone2} alt="stone" />
                <p className="pt-[9px] pb-[27px] pr-0 xl:pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[44%] xl:flex justify-normal items-start">
          <div className="relative w-[60%] border-x-[1.8px] border-[#bdc0c9] h-[72vh]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="px-[1.08rem] mt-[18.9vh]">
                <div className="w-full">
                  <div className="w-full h-[8.1vh] flex justify-between items-start">
                    <div className="group w-[36%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('3')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] text-[#363636] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="" src={stone1} alt="stone" />
                <p className="pt-[9px] pb-[27px] pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa id est laborum.
              </p>
              </div>
            </div>
          </div>
          <div className="relative w-[40%] border-x-[1.8px] border-[#bdc0c9] h-[72vh]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="px-[.63rem] mt-[18.9vh]">
                <div className="w-full">
                  <div className="w-full h-[8.1vh] flex justify-between items-start">
                    <div className="group w-[36%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('4')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] text-[#363636] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="" src={stone3} alt="stone" />
                <p className="pt-[9px] pb-[27px] pr-[3.6rem] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#bdc0c9] h-[63vh] sm:h-[81vh] xl:h-[72vh]"></div>
      </div>
      <div className="xl:hidden max-w-[1161px] w-full mx-auto flex justify-normal items-start">
        <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#bdc0c9] h-[54vh] sm:h-[72vh]"></div>
        <div className="w-[82%] xl:w-[44%] flex justify-normal items-start border-t-[1.8px] border-[#bdc0c9]">
          <div className="relative w-[60%] border-x-[1.8px] border-[#bdc0c9] h-[54vh] sm:h-[72vh]">
            <div className="absolute top-0 left-0 md:right-0 w-full md:w-[72%] md:mx-auto xl:mx-0 xl:w-full h-full overflow-hidden">
              <div className="px-[1.08rem] mt-[5.4vh]">
                <div className="w-full mb-[1.8vh]">
                  <div className="w-full h-[8.1vh] flex flex-col justify-between items-start">
                    <div className="group w-[90%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('3')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] ml-[9px] text-[#363636] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="mb-[.9vh]" src={stone1} alt="stone" />
                <p className="pt-[9px] pb-[27px] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa id est laborum.
              </p>
              </div>
            </div>
          </div>
          <div className="relative w-[40%] border-x-[1.8px] border-[#bdc0c9] h-[54vh] sm:h-[72vh]">
            <div className="absolute top-0 left-0 md:right-0 w-full md:w-[72%] md:mx-auto xl:mx-0 xl:w-full h-full overflow-hidden">
              <div className="px-[.45rem] mt-[5.4vh]">
                <div className="w-full mb-[1.8vh]">
                  <div className="w-full h-[8.1vh] flex flex-col justify-between items-start">
                    <div className="group w-[90%] flex justify-normal items-center cursor-pointer">
                      <span className="px-[9px] py-[3px] group-hover:py-[6px] group-hover:px-[12.6px] rounded-full bg-[#eee] ease-in duration-500 ">
                        <button onClick={()=>console.log('4')} className="opacity-0 group-hover:opacity-100 cursor-pointer ease-in duration-100">
                          +
                        </button>
                      </span>
                      <h3 className="ml-[-18px] mt-[1.8px] group-hover:opacity-0 text-[.72rem] text-[#333] ease-in duration-300">
                        marvelus
                      </h3>
                    </div>
                    <h6 className="relative group pb-[1.8px] text-[.63rem] text-[#363636] ml-[9px] mt-[8.1px] cursor-pointer">
                      See More
                      <span className="w-full h-[.9px] bg-[#efefef] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
                    </h6>
                  </div>
                </div>
                <Image className="mb-[.9vh]" src={stone3} alt="stone" />
                <p className="pt-[9px] pb-[27px] text-[#333] text-[.54rem]">
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#bdc0c9] h-[54vh] sm:h-[72vh]"></div>
      </div>
    </div>
  );
};

export default Related;

//          <div className="absolute top-0 left-0 w-full h-full">
