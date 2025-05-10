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
                        Experienced in developing dynamic and responsive user interfaces using React.js, HTML, CSS, and JavaScript. Adept at turning UI/UX designs into functional code with reusable components, state management, and seamless interactivity. Passionate about building scalable and performant front-end solutions.
                            
                            
                        </p>
                        </span>
                </div>
                <div className='flex gap-10 py-4 justify-center'>
                    <IoArrowForward  size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-bold leading-normal'>UI/UX Designer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                        Creative and user-focused UI/UX Designer with a strong foundation in designing clean, accessible, and engaging interfaces for web and mobile apps. Skilled in Figma, wireframing, prototyping, and usability testing, with a focus on enhancing user journeys through thoughtful design.
                            
                            
                        </p>
                        </span>
                </div>
                <div className='flex gap-10 py-4 justify-center'>
                    <IoArrowForward  size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-bold leading-normal'>Freelancer & Team Collaborator</h1>
                        <p className='text-sm md:text-md leading-tight'>
                        Contributed to various freelancing and academic projects, hackathons, and internships. Strong communication and teamwork skills with the ability to manage deadlines, understand client requirements, and deliver quality results.
                             
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
