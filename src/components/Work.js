import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import global_es from '../traslations/es/global.json';
import { useTranslation } from 'react-i18next';


const Work = ({ theme }) => {

  const objectLength = Object.entries(global_es.projects_list).length;
  
  const contadorArray = Array.from({ length: objectLength }, (_, index) => index);
  
  const[t] = useTranslation("global");

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
              {t("projects.title")}
              </h2>
              <p className='max-w-2xl mb-16 font-poppins text-black dark:text-white'>
              {t("projects.subtitle")}
              </p>
            </div>
          </motion.div>
          </div>
          <div
          
           className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {contadorArray.map((index) => {
              return (
                <div className='w-full p-2' key={ index }>
                  <div className='group relative overflow-hidden border-2 border-black/70 dark:border-white/50 rounded-xl h-96'>
                    <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500 h-96 w-full' src={theme === 'dark' ? t("projects_list."+(index)+".imgDark") : t("projects_list."+(index)+".img")} alt='' />
                    <div className='absolute -bottom-full left-8 group-hover:bottom-32 transition-all duration-500 z-50'>
                      <span className='text-white font-poppins lg:text-xl text-sm'>{t("projects_list."+(index)+".description")}</span>
                    </div>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-xl lg:text-3xl text-pink-400 font-poppins'>{t("projects_list."+(index)+".name")}</span>
                      { t("projects_list."+(index)+".link") !== '' && (
                        <button className='btn btn-sm font-poppins ml-4 h-7'>
                          <a href={t("projects_list."+(index)+".link")} target='_blank' rel='noopener noreferrer'>
                            {t("projects_list."+(index)+".name") === 'AdventJS' ? t("view_project") : t("view_project")}
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
