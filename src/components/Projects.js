import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { projects } from '../data';
import { useTranslation } from 'react-i18next';


const Projects = ({ theme }) => {

  const[t] = useTranslation("global");

  return (
    <section id='projects' className='section min-h-[85vh] lg:min-h-[78vh]'>
      <div className='container mx-auto'>

      <div className='flex-1'>
          <div className='mt-16 flex flex-col justify-center items-center'>
              <h3 className='h3 text-[45px] lg:text-[80px] leading-none mb-12 font-poppins text-black dark:text-white'>{t("participation.title")}</h3>
          </div>
        </div>

        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial ="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className='grid grid-cols-4 md:grid-flow-row'>
        {projects.map((project, index)=>{
              return (
              <div className="flex items-center justify-center mb-16" key={index}>
                <img className='w-24 h-24' src={project.image} alt='' />
              </div>
              );              
        })}
        </motion.div>
      </div>
    </section>

  );
};

export default Projects;
