import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import global_es from '../traslations/es/global.json';
import { AiFillEye } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';



const Courses = ({ theme }) => {

  const objectLength = Object.entries(global_es.courses_list).length;
  
  const contadorArray = Array.from({ length: objectLength }, (_, index) => index);
  
  const[t] = useTranslation("global");
  

  return (
    <section id='courses' className='section min-h-[85vh] lg:min-h-[78vh]'>
      <div className='container mx-auto'>
        <motion.div
         variants={fadeIn('down', 0.5)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}>
          <h2 className='h2 text-accent font-poppins mt-1'>{t("courses.title")}</h2>
        </motion.div>
      
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <div>
              {contadorArray.map((index)=>{
                return(
                  <div className='border-b border-black/30 dark:border-white/30  h-full mb-[38px] flex' key={ index }>
                    <div className='max-w-[600px] h-[200px] lg:h-[230px]'>
                      <h4 className='font-poppins text-[20px] tracking-wider font-semibold mb-6 text-gradient'>{t("courses_list."+(index)+".title")}</h4>
                      <p className='font-poppins leading-tight text-black dark:text-white text-[13px] lg:text-[20px]'>{t("courses_list."+(index)+".description")}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end '>
                      <a href={t("courses_list."+(index)+".file")} rel="noopener noreferrer" target="_blank" className='btn btn-sm w-9 h-9 mb-[42px] flex justify-center items-center text-white' download>
                        <b className='font-bold'><AiFillEye /></b>
                      </a>
                    </div> 
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

export default Courses;