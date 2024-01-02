import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#f1f3ec] border-b-[2.7px] border-[#e0e2da9f] font-['poppins']">
    <div className="w-full mx-auto flex justify-normal items-start">
      <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh]"></div>
      <div className="w-[44%] flex justify-normal items-start">
        <div className="w-[41%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh]">

                <h1 className='text-[1.62rem] py-[.9rem] mt-[6.3vh] text-center font-["pacifico"]'>Onyx Center</h1>
      
        </div>
        <div className="w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh] pl-[7.2rem]">
            <h3 className='relative group text-[.81rem] mt-[6.3vh] mb-[.9vh] w-[18%] cursor-pointer'>Shop
            <span className="w-full h-[.9px] bg-[#333] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
            </h3>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>related</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>stone cutting</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>stone process</h4>
        </div>
      </div>
      <div className="w-[44%] flex justify-normal items-start">
        <div className="w-[60%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh] pl-[7.2rem]">
        <h3 className='relative group text-[.81rem] mt-[6.3vh] mb-[.9vh] w-[27.99%] cursor-pointer'>Account
            <span className="w-full h-[.9px] bg-[#333] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
            </h3>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>shoppin bag</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>login</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>add account</h4>
        </div>
        <div className="w-[40%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh] pl-[3.96rem]">
        <h3 className='relative group text-[.81rem] mt-[6.3vh] mb-[.9vh] w-[27.9%] cursor-pointer'>Blogs
            <span className="w-full h-[.9px] bg-[#333] absolute bottom-0 right-[-100%] group-hover:right-0 ease-in duration-500"></span>
            </h3>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>stone</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>cutting</h4>
            <h4 className='text-[.54rem] py-[.6px] cursor-pointer hover:text-[#555]'>factory</h4>
        </div>
      </div>
      <div className="w-[6%] border-x-[1.8px] border-[#e0e2da9f] h-[18.9vh]"></div>
    </div>
  </div>
  )
}

export default Footer