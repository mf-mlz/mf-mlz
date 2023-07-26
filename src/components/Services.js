import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CV from '../assets/cv/CV-2023.pdf';
import global_es from '../traslations/es/global.json';
import { useTranslation } from 'react-i18next';


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

  const objectLength = Object.entries(global_es.services_list).length;
  const contadorArray = Array.from({ length: objectLength }, (_, index) => index);
  const[t] = useTranslation("global");

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
            <h2 className='h2 text-accent font-poppins'>{t("services.title")}</h2>
            <h3 className='h3 font-poppins max-w-[455px] mb-16 text-black dark:text-white'>
            {t("about.subtitle")}
            </h3>
            <button className='btn btn-sm font-poppins' onClick={handleDownload}>{t("download_cv")}</button>
          </motion.div>
          <div className='flex-1'>
            <div>
              {contadorArray.map((index)=>{
                return(
                  <div className='border-b border-black/30 dark:border-white/30  h-full mb-[38px] flex' key={index}>
                    <div className='max-w-[600px] h-[230px] lg:h-[200px]'>
                      <h4 className='font-poppins text-[20px] tracking-wider font-semibold mb-6 text-gradient'>{t("services_list."+(index)+".name")}</h4>
                      <p className='font-poppins leading-tight text-black dark:text-white text-[13px] lg:text-[20px]'>{t("services_list."+(index)+".description")}</p>
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
