import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
    const[menu, openMenu] = useState(false);
    const [showMenu, setShowmenu]= useState(true);
  return (
    <nav className=' w-full fixed flex flex-wrap justify-between md:items-center text-white px-10 pb-6 pt-6 md:px-20 bg-[#669494] '>
        <span className='text-3xl font-bold tracking-wide'>Portfolio</span>

        <ul className={`${
            menu ? "block":"hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 backdrop-blur bg-[#669494] px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-10 md:flex-row`}>
            <a href="#About">
            <li className="text-lg transition-all duration-300 p-1 md:p-0">About</li>
            </a>
            <a href="#Certificates">
            <li className="text-lg transition-all duration-300 p-1 md:p-0">Certificates</li>
            </a>
            <a href="#Projects">
            <li className="text-lg transition-all duration-300 p-1 md:p-0">Projects</li>
            </a>
            <a href="#Footer">
            <li className="text-lg transition-all duration-300 p-1 md:p-0">Contact</li>
            </a>
        </ul>
        {showMenu ? (
          <RiMenu2Line
           size={30}
           className='md:hidden absolute right-10 top-6 transition-all duration-300'
           onClick={() => {
            openMenu(!menu)
            setShowmenu(!showMenu);
          }}
          />  
        ) : (
        <RiCloseLine
         size={30}
         className='md:hidden absolute right-10 top-6 transition-all duration-300'
         onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
         />
    )}
    </nav>
  );
};

export default Navbar;
