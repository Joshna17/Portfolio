import React from 'react'
// import myBrand from '../../assets/me.png'

const ProjectCard = ({title, main,demoLink,myBrand}) => {
  return (
    <div className=' p-3 md:p-6 flex flex-col w-80 bg-gray-100 shadow-lg shadow-slate-300 rounded-2xl justify-center align-middle '>
        <img className='p-4' src={myBrand}  alt=''/>
        <h3 className='px-10 text-xl md:text-2xl text-center font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-8 text-sm md:text-md text-center leading-tight py-2'>{main}</p>
        <div className=' flex mt-0 p-2 md:p-4 gap-4 md:gap-6 justify-center'>
            <a
          href={demoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='md:mt-6 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-xl bg-[#669494] bg-opacity-45'
        >Demo</a>
             <button className='md:mt-6 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-4 hover:opacity-80
             duration-300 hover:scale-105 font-semibold rounded-xl bg-[#669494] bg-opacity-45'>Source code</button>
        </div>

      
    </div>
  )
}

export default ProjectCard
