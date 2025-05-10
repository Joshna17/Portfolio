import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact}from "react-icons/fa";

import { SiMongodb } from 'react-icons/si';


const Certificates = () => {
  return (
    <div id ="Certificates" className='p-10 gap  md:p-24 overflow-hidden items-center md:flex-wrap justify-center  mx-0 md:mx-30'>
        <h1 className='text-2xl md:text-4xl pl-4 text-black font-bold'>Certificates</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className=' flex flex-wrap md:w-2/5 gap-10 md:p-12 py-10 justify-center'>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color='#E34F26' size={50}></FaHtml5>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color='#1572b6' size={50}></FaCss3>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaFigma color='#F24E1E' size={50}></FaFigma>
            </span>
            
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color='#61DAFB' size={50}></FaReact>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color='#F7DF1E' size={50}></FaJs>
            </span>
            {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiRedis color='#FF4438' size={50}></SiRedis>
            </span> */}
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color='#47A248' size={50}></SiMongodb>
            </span>
            </div>
            <div className='md:flex md:flex-col gap-6'>
            <div className='flex gap-16 bg-[#669494] bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                <span className='text-white'>
                    <h2 className='leading-tight text-lg'>Mern Training, Broadway Infosys</h2> 
                    <p className='text-sm leading-tight font-thin'> feb 2025-may 2025</p>
               </span>
            </div>
            <div className='flex gap-16 bg-[#669494] bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                <span className='text-white gap-6'>
                    <h2 className='leading-tight text-lg'>UI/UX Training, Sikaai</h2> 
                    <p className='text-sm leading-tight font-thin'> sept 2023-nov 2023</p>
               </span>
            </div>
            <div className='flex gap-16 bg-[#669494] bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                <span className='text-white'>
                    <h2 className='leading-tight text-xl'>Bootcamp, Code Himalaya</h2> 
                    <p className='text-sm leading-tight font-thin'> 1 week</p>
               </span>
            </div>
      
        </div>
    </div>
    </div>
  )
}

export default Certificates
