import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import { useTranslation } from 'react-i18next';


const About = ({ theme }) => {

  const[t] = useTranslation("global");

  
  const[ref, inView] = useInView({
    threshold: 0.5,
  });
  
  const email = 'maryfermtzlb@gmail.com';
  const subject = 'Visita Portafolio Web';
  const body = 'Hola, me intereso tu trabajo, me interesa contactarte para una entrevista de trabajo.';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial ="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-normal dark:mix-blend-lighten bg-top dark:opacity-50'>
            </motion.div>
            
            <div className='flex-1'>
              <h2 className='h2 text-accent font-poppins'>{t("about.title")}</h2>
              <h3 className='h3 mb-4 font-poppins text-black dark:text-white'>{t("about.subtitle")}</h3>
              <p className='mb-6 font-poppins text-black dark:text-white'>{t("about.description")}</p>
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font- text-gradient mb-2'>
                    { inView ? <CountUp start={0} end={2} duration={8}/> : null }
                  </div>
                  <div className='text-sm tracking-[2px] font-poppins text-black dark:text-white font-bold'>
                  {t("about.years_of")}<br/>
                  {t("about.experience")}
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font- text-gradient mb-2'>
                    { inView ? <CountUp start={0} end={6} duration={8}/> : null }
                  </div>
                  <div className='text-sm tracking-[2px] font-poppins text-black dark:text-white font-bold'>
                  {t("about.projects")}<br/>
                  {t("about.completed")}
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font- text-gradient mb-2'>
                    { inView ? <CountUp start={0} end={10} duration={8}/> : null }
                  </div>
                  <div className='text-sm tracking-[2px] font-poppins text-black dark:text-white font-bold'>
                  {t("about.courses")}<br/>
                  {t("about.completed")}
                  </div>
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                    <button className='btn btn-lg font-poppins' onClick={() => window.location.href = mailtoLink}>{t("contact")}</button>
                    <a href='https://github.com/mf-mlz' target='_blank' rel="noopener noreferrer" className='text-gradient btn-link font-poppins'>{t("github")}</a>
                  </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
