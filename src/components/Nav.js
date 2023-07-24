import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsCode} from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi'
import { Link } from 'react-scroll';


const Nav = () => {

  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className ='w-full  h-[96px]  rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 items-center  dark:bg-black/40 dark:text-white bg-white/40 text-black'>
     
        <Link activeClass='active' smooth={true} spy={true} offset={-300} to='home'  className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='about' className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='services' className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='work' className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <BsBriefcase />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='projects' className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <BsCode />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='skills' className='cursor-pointer w-[60px] h-60px flex items-center justify-center'>
          <GiSkills />
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
