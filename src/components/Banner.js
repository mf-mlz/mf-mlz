import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';
import CV from '../assets/cv/CV-2023.pdf';
import ImageWhite from '../assets/img/GirlWhite.png';
import ImageDark from '../assets/img/GirlDark.png';


const handleDownload = () => {
  const fileUrl = CV; 
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'CV-Maria-Fernanda-Labra-2023.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Banner = ({ theme, animationKey }) => {

  const[t] = useTranslation("global");

  return (
    <section id="home" className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once:false, amount: 0.7}} 
              className='font-poppins text-[45px] leading-[0.8] lg:text-[100px] mb-4 text-black dark:text-white'>
              FERNANDA <span> LABRA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.5)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once:false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-poppins font-semibold uppercase leading-[1]'>
              <span className='text-black dark:text-white mr-4'>{t("banner.i_am")}</span>
              <TypeAnimation  
              key={animationKey}
              sequence={[
                t("banner.developer"),
                2000,
                t("banner.creative"),
                2000,
                t("banner.proactive"),
                2000,
                t("banner.autodidactic"),
                2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
              <motion.p
               variants={fadeIn('up', 0.5)} 
               initial='hidden'
               whileInView={'show'} 
               viewport={{once:false, amount: 0.7}} 
               className='font-poppins mb-8 max-w-lg mx-auto lg:mx-0 text-black dark:text-white italic'>
               {t("banner.message")}
              </motion.p>
              <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'>
                <button className='btn btn-lg font-poppins' onClick={handleDownload}>
                {t("download_cv")}
                </button>
                <a href='https://wa.me/7714334090?text=Hola,%20estoy%20interesado%20en%20tu%20CV.' target='_blank' rel="noopener noreferrer" className='font-poppins text-gradient btn-link'>
                {t("contact")}
                </a>
              </div>
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-black dark:text-white'>
                <a href='https://github.com/mf-mlz' target='_blank' rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/maria-fernanda-martinez-labra-732039161/' target='_blank' rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href='https://www.instagram.com/mfmlz/' target='_blank' rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
          </div>
          <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
              <img src={theme === 'dark' ? ImageDark : ImageWhite} alt='' />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;
