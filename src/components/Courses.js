import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Course } from '../data';
import { BsDownload } from 'react-icons/bs';



const Courses = ({ theme }) => {
  return (
    <section id='courses' className='section min-h-[85vh] lg:min-h-[78vh]'>
      <div className='container mx-auto'>
      <h2 className='h2 text-accent font-poppins mt-1'>Courses Taken</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <motion.div
             variants={fadeIn('left', 0.5)}
             initial ="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.3}}
            >
              {Course.map((Course, index)=>{

                const {title, description, file, nameFile } = Course;

                const handleDownload = () => {
                  const fileUrl = file; 
                  const link = document.createElement('a');
                  link.href = fileUrl;
                  link.setAttribute('download', nameFile);
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                };

                return(
                  <div className='border-b border-black/30 dark:border-white/30  h-full mb-[38px] flex' key={ index }>
                    <div className='max-w-[600px] h-[200px] lg:h-[150px]'>
                      <h4 className='font-poppins text-[20px] tracking-wider font-semibold mb-6 text-gradient'>{ title }</h4>
                      <p className='font-poppins leading-tight text-black dark:text-white text-[10px] lg:text-[15px]'>{ description }</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end '>
                      <button className='btn btn-sm w-9 h-9 mb-[42px] flex justify-center items-center text-white' onClick={handleDownload}>
                        <b className='font-bold'><BsDownload /></b>
                      </button>
                     
                    </div> 
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;