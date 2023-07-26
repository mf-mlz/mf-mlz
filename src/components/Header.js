import React, {useState, useEffect} from 'react';
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { FaRegFlag } from 'react-icons/fa';

import Banner from './Banner';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Skiils from './Skiils';
import Skill from './Skill';
import Services from './Services';
import Courses from './Courses';


const Header = () => {

  const[t, i18n] = useTranslation("global");

  const [theme, setTheme] = useState('light');

  const [animationKey, setAnimationKey] = useState(0);

  
  useEffect(() => {
    // Detecta cambios en el idioma y reinicia la animación
    setAnimationKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

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

      <div class="flex justify-between">  
        <div class="p-2 mr-2">
          <h2 className='h2 font-poppins font-extrabold text-[25px] text-black dark:text-white'> {t("logo")}</h2>
        </div> 
        <div class="flex-grow"></div>
        <div>
        <button onClick={handleThemeSwitch} className='btn btn-sm mr-2'>
            {
              theme === 'light' ? <BsMoonFill /> : <BsFillSunFill /> //Si el tema es light se pone el icono de BsMoonFill sino el de BsFillSunFill
            }
          </button>
        </div>
        <div>
          <button onClick={()=> i18n.changeLanguage("es")} className='btn btn-m font-bold font-poppins mx-1 lg:mx-3'><FaRegFlag style={{ display: 'inline-block', marginRight: '0.5rem' }} />ES</button>
          <button onClick={()=> i18n.changeLanguage("en")} className='btn btn-m font-bold font-poppins lg:mx-2'><FaRegFlag style={{ display: 'inline-block', marginRight: '0.5rem' }} />EN</button>
        </div>
      </div>
      </div>
      <Banner theme={theme} animationKey={animationKey} />
      <About theme={theme} />
      <Courses theme={theme} />
      <Services theme={theme} />
      <Work theme={theme} />
      <Projects theme={theme} />
      <Skiils theme={theme} />
      <Skill theme={theme} />
    </header>
  );
};

export default Header;
