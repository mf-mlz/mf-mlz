import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CV from '../assets/cv/CV-2023.pdf';
import { services } from '../data';


const handleDownload = () => {
  const fileUrl = CV; 
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'CV-Maria-Fernanda-Labra-2023.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Services = ({ theme }) => {
  return (
    <section id='services' className='section min-h-[85vh] lg:min-h-[78vh]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
           variants={fadeIn('left', 0.5)}
           initial ="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}
           className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent font-poppins'>What I Do.</h2>
            <h3 className='h3 font-poppins max-w-[455px] mb-16 text-black dark:text-white'>
              I'm Web Developer with 2 year of experience.
            </h3>
            <button className='btn btn-sm font-poppins' onClick={handleDownload}>Download CV</button>
          </motion.div>
          <div className='flex-1'>
            <div>
              {services.map((service, index)=>{
                const {name, description } = service;
                return(
                  <div className='border-b border-black/30 dark:border-white/30  h-full mb-[38px] flex' key={index}>
                    <div className='max-w-[600px] h-[206px] lg:h-[176px]'>
                      <h4 className='font-poppins text-[20px] tracking-wider font-semibold mb-6 text-gradient'>{name}</h4>
                      <p className='font-poppins leading-tight text-black dark:text-white text-[16px] lg:text-[20px]'>{description }</p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm font-poppins text-black dark:text-white'>{link}</a>
                    </div> */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
