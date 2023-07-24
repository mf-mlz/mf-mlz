import React, {useState, useEffect} from 'react';
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
import Banner from './Banner';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Skiils from './Skiils';
import Skill from './Skill';
import Services from './Services';

const Header = () => {

  const [theme, setTheme] = useState('light');
  useEffect(()=>{
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(()=>{
    const html = document.querySelector('html');
    if(localStorage.getItem('theme') === 'dark'){
      html.classList.add('dark');
      setTheme('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  
  const handleThemeSwitch = ()=>{
    if(localStorage.getItem('theme') === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <h2 className='h2 font-poppins font-extrabold text-[25px] text-black dark:text-white'> MFML </h2>
            <button onClick={handleThemeSwitch} className='btn btn-sm'>
            {
              theme === 'light' ? <BsMoonFill /> : <BsFillSunFill /> //Si el tema es light se pone el icono de BsMoonFill sino el de BsFillSunFill
            }
          </button>
        </div>
      </div>
      <Banner theme={theme} />
      <About theme={theme} />
      <Services theme={theme} />
      <Work theme={theme} />
      <Projects theme={theme} />
      <Skiils theme={theme} />
      <Skill theme={theme} />
    </header>
  );
};

export default Header;
