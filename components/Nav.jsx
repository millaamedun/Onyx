import React from 'react'

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-[#b4bdbc] z-[333]">
    <div className="w-full mx-auto flex justify-normal items-start">
      <div className="w-[6%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]"></div>
      <div className="w-[44%] flex justify-normal items-start">
        <div className="relative w-[41%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]">
        <div className='absolute top-0 left-0 w-full h-full'>
            <h1 className='text-[1.8rem] font-["pacifico"] mt-[1.26rem] ml-[.63rem] pb-[.9rem]'>Onyx</h1>
        </div>
        </div>
        <div className="w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]"></div>
      </div>
      <div className="w-[44%] flex justify-normal items-start">
        <div className="relative w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[9vh] overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full flex justify-around items-center font-["poppins"] mt-[.9rem] text-[.81rem] font-bold'>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center'>About</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center'>Product</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center'>Contact</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center'>Blog</h2>
        </div>
        </div>
        <div className="w-[40%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]"></div>
      </div>
      <div className="w-[6%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]">
        <h3 className='font-["pacifico"] pb-[.9rem] mt-[2.16rem] text-center text-[.936rem]'>Bag <span className='text-[.72rem] font-["caveat"]'>(0)</span></h3>
      </div>
    </div>
  </div>
  )
}

export default Nav