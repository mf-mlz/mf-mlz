import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skiils = () => {
  return (
    <section id='skills' className='section'>
      <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row'>
        <div className='flex-1'>
          <div className='mt-16'>
              <h4 className='h2 text-x1 uppercase text-accent font-medium mb-2 tracking-wide font-poppins'>My Skiils</h4>
              <h2 className='h2 text-[45px] lg:text-[80px] leading-none mb-12 font-poppins text-black dark:text-white'>Let's to my <br/> principal skills</h2>
          </div>
        </div>
        <motion.div
         variants={fadeIn('left', 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
        className='flex-1 border border-black/50 dark:border-white/70 rounded-xl gap-y-6 lg:pb-96 p-8 items-center h-16'> 
          <div class="flex justify-between mb-2">
            <span class="text-base font-poppins text-black dark:text-white">PHP</span>
            <span class="text-sm font-poppins text-black dark:text-white">60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-pink-400 dark:bg-pink-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>

          <div class="flex justify-between mt-6">
            <span class="text-base font-poppins text-black dark:text-white">Bootstrap</span>
            <span class="text-sm font-poppins text-black dark:text-white">65%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-purple-400 dark:bg-purple-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
          </div>

          <div class="flex justify-between mt-6">
            <span class="text-base font-poppins text-black dark:text-white">JavaScript</span>
            <span class="text-sm font-poppins text-black dark:text-white">60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-sky-400 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>

          <div class="flex justify-between mt-6">
            <span class="text-base font-poppins text-black dark:text-white">CSS3</span>
            <span class="text-sm font-poppins text-black dark:text-white">55%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-pink-400 dark:bg-pink-500 h-2.5 rounded-full" style={{ width: '55%' }}></div>
          </div>

          <div class="flex justify-between mt-6">
            <span class="text-base font-poppins text-black dark:text-white">Git</span>
            <span class="text-sm font-poppins text-black dark:text-white">60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-purple-400 dark:bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>

          <div class="flex justify-between mt-6">
            <span class="text-base font-poppins text-black dark:text-white">MySQL</span>
            <span class="text-sm font-poppins text-black dark:text-white">75%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-sky-400 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </motion.div>
       </div>
      </div>
    </section>

  );
};

export default Skiils;
