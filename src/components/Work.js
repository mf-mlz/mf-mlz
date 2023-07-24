import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ImgPokeWhitePHP from '../assets/img/portfolio/PokeApiWhitePHP.png';
import ImgPokeDarkPHP from '../assets/img/portfolio/PokeApiDarkPHP.png';
import ImgPokeWhiteJS from '../assets/img/portfolio/PokeApiWhiteJS.png';
import ImgPokeDarkJS from '../assets/img/portfolio/PokeApiDakJS.png';
import ImgSamifyWhite from '../assets/img/portfolio/SamifyWhite.png';
import ImgSamifyDark from '../assets/img/portfolio/SamifyDark.png';
import ImgFizzBuzzWhite from '../assets/img/portfolio/FizzBuzzWhite.png';
import ImgFizzBuzzDark from '../assets/img/portfolio/FizzBuzzDark.png';
import ImgFoodWhite from '../assets/img/portfolio/FoodWhiteTailwind.png';
import ImgFoodDark from '../assets/img/portfolio/FoodDarkTailwind.png';
import ImgRockPaperScissorsDark from '../assets/img/portfolio/RockPappersScissorsJSDark.png';
import ImgRockPaperScissorsDarkWhite from '../assets/img/portfolio/RockPappersScissorsJSWhite.png';
import ImgPasteleriaDark from '../assets/img/portfolio/PasteleriaDarkBootstrap.png';
import ImgPasteleriaWhite from '../assets/img/portfolio/PasteleriaWhiteBootstrap.png';
import ImgTucDark from '../assets/img/portfolio/TucDark.png';
import ImgTucWhite from '../assets/img/portfolio/TucWhite.png';

const Projects = [
  {
    name: 'Pokedex JS',
    description: 'Exercise for consuming a REST API using promises with JavaScript.',
    link: 'https://mfmlz-poke-api.netlify.app/',
    imgDark: ImgPokeDarkJS,
    img: ImgPokeWhiteJS

  },
  {
    name: 'Pokedex PHP',
    description: 'Exercise for consuming a REST API using PHP.',
    link: 'http://pokeapi-php.infinityfreeapp.com/?i=1',
    imgDark: ImgPokeDarkPHP,
    img: ImgPokeWhitePHP
  },
  {
    name: 'FizzBuzz',
    description: 'Fizzbuzz test done with JavaScript.',
    link: 'https://fizzbuzz-mfmlz.netlify.app/',
    imgDark: ImgFizzBuzzDark,
    img: ImgFizzBuzzWhite
  },
  {
    name: 'Platzi Food',
    description: 'Website built with Tailwind CSS.',
    link: 'https://rock-paper-scissors-mfmlz.netlify.app/',
    imgDark: ImgFoodDark,
    img: ImgFoodWhite
  },
  {
    name: 'Erp - Tuc',
    description: 'ERP system developed for the TUC Transport company, developed with Codeigniter and MySQL.',
    link: '',
    imgDark: ImgTucDark,
    img: ImgTucWhite
  },
  {
    name: 'Pasteleria Mf-Mlz',
    description: 'Website built with Bootstrap.',
    link: 'https://mf-mlz.github.io/pasteleria-mfmlz/inicio.html',
    imgDark: ImgPasteleriaDark,
    img: ImgPasteleriaWhite
  },
  {
    name: 'Rock, Papers, or Scissors',
    description: 'Exercise to simulate the game of Rock Paper or Scissors made with JavaScript.',
    link: 'https://rock-paper-scissors-mfmlz.netlify.app/',
    imgDark: ImgRockPaperScissorsDark,
    img: ImgRockPaperScissorsDarkWhite
  },

  {
    name: 'Samify',
    description: 'Website inspired by Spotify, developed with Angular, Mongodb and Node JS (In development).',
    link: '',
    imgDark: ImgSamifyDark,
    img: ImgSamifyWhite
  },

];


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
            {Projects.map((project, index) => {
              const { name, description, link, img, imgDark } = project;
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
