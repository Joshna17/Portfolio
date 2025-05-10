import React from 'react'
import pic from "../../assets/image 1.svg"
const Home = () => {
  return (
    <div className=' mt-30 text-black flex flex-wrap w-full justify-between items-center pr-10  pl-10 md:pr-40 md:pl-40   gap-8 sm:gap-8'>
     <div className='md:w-2/4 ' >
     <h1 className='text-5xl md;text-8xl font-bold flex leading-normal tracking-tighter '>Hello' I am <br></br>Joshna</h1>
     <p className=' mt-6 text-opacity-5000 text-sm md:text-lg tracking-tight md:w-150 '>I’m a passionate UI/UX Designer and Front-End Developer
       with a solid foundation in HTML, CSS, JavaScript, React, and TailwindCSS. I specialize in crafting seamless, user-friendly, and highly responsive
       digital experiences that not only look visually appealing but also deliver exceptional functionality across all devices. By focusing on intuitive
       designs and smooth interactivity.
      </p>
     <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-4 hover:opacity-85
     duration-300 hover:scale-105 font-semibold rounded-xl bg-[#669494]'>Get In Touch</button>
     </div>
     <div className=''><img className=' w-100  h-150' src= {pic}  alt=''/></div>
    </div>
  )
}

export default Home;
