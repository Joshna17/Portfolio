import React from 'react'
import AboutImg from '../../assets/download.png'
import {IoArrowForward} from 'react-icons/io5'
const About = () => {
  return (
    <div id='About' className='bg-[#669494] bg-opacity-45 text-white overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-40 bg-opacity-30 rounded-lg p-20 '>
      <div>
        <h2 className='text-2xl md:text-4xl font-extrabold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row justify-center items-center gap-10 '>
            <img className='md:h-100 ' src={AboutImg} alt=''/>
            <ul>
                <div className='flex gap-10 py-4'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl sm:text-lg md:text-2xl font-bold leading-normal'>Frontend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatem asperiores cupiditate deleniti atque aut eaque obcaecati! Beatae perspiciatis quos eos fuga eveniet iste doloremque nobis nisi possimus? Corrupti, corporis.
                            
                            
                        </p>
                        </span>
                </div>
                <div className='flex gap-10 py-4 justify-center'>
                    <IoArrowForward  size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-bold leading-normal'>UI/UX Designer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatem asperiores cupiditate deleniti atque aut eaque obcaecati! Beatae perspiciatis quos eos fuga eveniet iste doloremque nobis nisi possimus? Corrupti, corporis.
                            
                            
                        </p>
                        </span>
                </div>
                <div className='flex gap-10 py-4 justify-center'>
                    <IoArrowForward  size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-bold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatem asperiores cupiditate deleniti atque aut eaque obcaecati! Beatae perspiciatis quos eos fuga eveniet iste doloremque nobis nisi possimus? Corrupti, corporis.
                             
                        </p>
                        </span>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About;
