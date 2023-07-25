import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Works } from '../data';


const Work = ({ theme }) => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='w-full'>
          <motion.div 
           variants={fadeIn('right', 0.5)}
           initial ="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}>
            <div>
              <h2 className='h2 leading-tight text-accent font-poppins mt-4'>
                My personal projects.
              </h2>
              <p className='max-w-2xl mb-16 font-poppins text-black dark:text-white'>
              Among some small projects that I have done, they range from exercises to small pages made with Bootstrap or Tailwind CSS, also to practice consuming a REST API like Pokemon's, and a small Spotify made with Node JS, Mongo DB and Angular (which is still in development).
              </p>
              {/* <button className='btn btn-sm font-poppins'>
                <a href='https://mf-mlz.github.io/mf-mlz/proyectos.html' target='_blank' rel="noopener noreferrer">View Projects</a></button> */}
            </div>
          </motion.div>
          </div>
          <div
          
           className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {Works.map((work, index) => {
              const { name, description, link, img, imgDark } = work;
              return (
                <div className='w-full p-2' key={index}>
                  <div className='group relative overflow-hidden border-2 border-black/70 dark:border-white/50 rounded-xl h-96'>
                    <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500 h-96 w-full' src={theme === 'dark' ? imgDark : img} alt='' />
                    <div className='absolute -bottom-full left-8 group-hover:bottom-32 transition-all duration-500 z-50'>
                      <span className='text-white font-poppins lg:text-xl text-sm'>{description}</span>
                    </div>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-xl lg:text-3xl text-pink-400 font-poppins'>{name}</span>
                      {link !== '' && (
                        <button className='btn btn-sm font-poppins ml-4 h-7'>
                          <a href={link} target='_blank' rel='noopener noreferrer'>
                            View Project
                          </a>
                        </button> 
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        
      </div>
    </section>
  );
};

export default Work;
