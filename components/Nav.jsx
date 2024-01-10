import React, { useEffect, useState } from 'react'
import { BsBagHeart } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {

  const [navColor, setNavColor] = useState(false)

 useEffect(()=>{
  const changeNavColor = ()=> {
    if (window.scrollY >= 120 ){
      setNavColor(true);
    }
    else{
      setNavColor(false);
    }
  };
  window.addEventListener('scroll',changeNavColor)
 },[])

  return (
    <div className={navColor ? "fixed top-0 left-0 right-0 w-full bg-[#b4bdbc] z-[333]  border-b-[.9px] border-[#c9ccd5]"
    : "fixed top-0 left-0 right-0 w-full bg-[#b4bdbc] z-[333]" }>
    <div className="max-w-[1161px] w-full mx-auto flex justify-normal items-start">
      <div className="w-[9%] xl:w-[6%] border-r-[1.8px] border-[#aeb7b6] h-[9vh]"></div>
      <div className="w-[82%] xl:w-[44%] flex justify-normal items-start">
        <div className="relative w-[41%] border-x-[1.8px] border-[#aeb7b6] h-[9vh]">
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
            <h1 className='text-[1.35rem] md:text-[1.8rem] font-["pacifico"] mt-[1.26rem] ml-[.63rem] pb-[.9rem] overflow-hidden'>Onyx</h1>
        </div>
        </div>
        <div className="relative w-[60%] border-x-[1.8px] border-[#aeb7b6] h-[9vh] flex justify-end overflow-hidden">
        <h4 className='md:hidden mt-[3.6vh] text-[.72rem] font-semibold'>menu</h4>
          <div className='md:hidden mt-[3.6vh] px-[9px] '>
        <FaBars />
      </div>
      <div className='hidden absolute top-0 left-0 w-full h-full md:flex xl:hidden justify-around items-center font-["poppins"] mt-[.9rem] text-[.81rem] font-bold'>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center text-[.81rem]'>About</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center text-[.81rem]'>Product</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center text-[.81rem]'>Contact</h2>
            <h2 className='cursor-pointer pb-[.9rem] w-[24.3%] text-center text-[.81rem]'>Blog</h2>
        </div>
        </div>
      </div>
      <div className="hidden w-[44%] xl:flex justify-normal items-start">
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
      <div className="w-[9%] xl:w-[6%] border-l-[1.8px] border-[#aeb7b6] h-[9vh]">
        <BsBagHeart className='block md:hidden mx-auto mt-[1.8rem]' />
        <h3 className='hidden md:block font-["pacifico"] pb-[.9rem] mt-[2.16rem] text-center text-[.936rem]'>Bag <span className='text-[.72rem] font-["caveat"]'>(0)</span></h3>
      </div>
    </div>
  </div>
  )
}

export default Nav