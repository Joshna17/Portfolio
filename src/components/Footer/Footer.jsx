import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#669494] text-white p-10 md:p-12 items-center' >
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to Reach out</h3>
      </div>
      <ul className=' flex flex-col gap-2 text-sm md:text-xl'>
        <li className='flex items-center gap-4'><MdOutlineEmail size={20}/>
        joshnakhadka830@gmail.com</li>
        <li className='flex items-center gap-4'> <CiLinkedin/>
        linkedin.com/username
        </li>
        <li className='flex items-center gap-4'><FaGithub/>
        https://github.com/Joshna17</li>
      </ul>
    </div>
  )
}

export default Footer


