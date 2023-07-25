
//Skills
import SkillImg1 from './assets/img/skills/angular.png';
import SkillImg2 from './assets/img/skills/aws.png';
import SkillImg3 from './assets/img/skills/azure.png';
import SkillImg4 from './assets/img/skills/codeigniter.png';
import SkillImg5 from './assets/img/skills/html5.png';
import SkillImg6 from './assets/img/skills/jquery.png';
import SkillImg7 from './assets/img/skills/linux.png';
import SkillImg8 from './assets/img/skills/mongodb.png';
import SkillImg9 from './assets/img/skills/nodejs.png';
import SkillImg10 from './assets/img/skills/postman.png';
import SkillImg11 from './assets/img/skills/reactjs.png';
import SkillImg12 from './assets/img/skills/tailwind.png';
import SkillImg13 from './assets/img/skills/visualStudioCode.png';
import SkillImg14 from './assets/img/skills/netlify.png';

//Projects
import Project1 from './assets/img/projects/LaboratoriosChela.png';
import Project2 from './assets/img/projects/coppel.png';
import Project3 from './assets/img/projects/tucLogo.png';
import Project4 from './assets/img/projects/hyundai.png';


//Works
import ImgPokeWhitePHP from './assets/img/portfolio/PokeApiWhitePHP.png';
import ImgPokeDarkPHP from './assets/img/portfolio/PokeApiDarkPHP.png';
import ImgPokeWhiteJS from './assets/img/portfolio/PokeApiWhiteJS.png';
import ImgPokeDarkJS from './assets/img/portfolio/PokeApiDakJS.png';
import ImgSamifyWhite from './assets/img/portfolio/SamifyWhite.png';
import ImgSamifyDark from './assets/img/portfolio/SamifyDark.png';
import ImgFizzBuzzWhite from './assets/img/portfolio/FizzBuzzWhite.png';
import ImgFizzBuzzDark from './assets/img/portfolio/FizzBuzzDark.png';
import ImgFoodWhite from './assets/img/portfolio/FoodWhiteTailwind.png';
import ImgFoodDark from './assets/img/portfolio/FoodDarkTailwind.png';
import ImgRockPaperScissorsDark from './assets/img/portfolio/RockPappersScissorsJSDark.png';
import ImgRockPaperScissorsDarkWhite from './assets/img/portfolio/RockPappersScissorsJSWhite.png';
import ImgPasteleriaDark from './assets/img/portfolio/PasteleriaDarkBootstrap.png';
import ImgPasteleriaWhite from './assets/img/portfolio/PasteleriaWhiteBootstrap.png';
import ImgTucDark from './assets/img/portfolio/TucDark.png';
import ImgTucWhite from './assets/img/portfolio/TucWhite.png';

//Courses
import CourseAdminNube from './assets/courses/1.-Admistrador de la nube.pdf';
import CourseAdminBD from './assets/courses/2.- Administrador de base de datos.pdf';
import CourseIntroduccionProgramacion from './assets/courses/3.- Introducción a la programación.pdf';
import CourseControlDeVersiones from './assets/courses/4.- Control de Versiones.pdf';
import CourseAsincronismo from './assets/courses/5.- Asincronismo 2019 JS.pdf';
import CourseBasicoJs from './assets/courses/6.- Diploma Basico Javascript.pdf';
import CourseBootstrap from './assets/courses/7.- Diploma  Bootstrap.pdf';
import CourseGitGithub from './assets/courses/8.- Diploma Git - Github.pdf';
import CoursePrework from './assets/courses/9.- Diploma Prework Windows.pdf';
import CourseTailwind from './assets/courses/10.- Diploma Tailwind CSS 2020.pdf';




export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },

];

export const projects = [
  {
    image: Project1,
  },
  {
    image: Project2,
  },
  {
    image: Project3,
  },
  {
    image: Project4,
  }
];

export const services = [
  {
    name: 'Full Stack Developer',
    description: 'I worked 1 year 9 months within the company EGO TI S.A de C.V within the position of Developer, where my tasks were focused on the maintenance of the websites in charge of the company.',
    link: 'Learn More'
  },
  {
    name: 'Full Stack Developer',
    description: 'I currently work within the company VORTEX DEVELOPMENT in the position of Web Developer, where my main activity is the development of Enterprise Resource Planning (ERP) and other types of company projects.',
    link: 'Learn More'
  },
  {
    name: 'PHP Developer',
    description: 'I currently work within the company AP INTERFACES in the position of PHP Developer, where my main function is within the Remediation team, where I fix vulnerabilities in various languages, especially PHP.',
    link: 'Learn More'
  }
];

export const Works = [
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

export const Course = [
  {
    "title" : 'Cloud administration',
    "description" : 'Course focused on file management of any kind, in the cloud for proper storage.',
    "file" : CourseAdminBD,
    "nameFile" : 'Cloud_Administration_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Database Administration',
    "description" : 'Course focused on the administration of relational databases, in this case MySQL, for the correct creation of tables, stored procedures, triggers, among other functionalities of a relational database.',
    "file" : CourseAdminNube,
    "nameFile" : 'Database_Administration_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Introduction to programming',
    "description" : 'This course focused on the basic principles of object-oriented programming, where basic topics were touched on assigning values to the different types of variables, methods, functions, etc...',
    "file" : CourseIntroduccionProgramacion,
    "nameFile" : 'Introduction_To_Programming_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Version control and repository management',
    "description" : 'This course focused on the main points to make good use of the version manager, in this case Git, where topics such as making commits, uploading changes, downloading changes, making pull requests, reverse and similarly touched on issues related to managing repositories, in this case GitHub.',
    "file" : CourseGitGithub,
    "nameFile" : 'Version_Control_And_Repository_Management_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Asynchronism in JavaScript 2019',
    "description" : 'This course focuses on how asynchronous functions are used, through promises, async/await or functions with Callback.',
    "file" : CourseAsincronismo,
    "nameFile" : 'Asynchronism_In_JavaScript_2019_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Basic JavaScript',
    "description" : 'This course is based on the basic concepts of JavaScript, where topics such as what types of variables exist, functions, loops, conditionals, etc...',
    "file" : CourseBasicoJs,
    "nameFile" : 'Basic_JavaScript_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Bootstrap',
    "description" : 'Bootstrap library focused course.',
    "file" : CourseBootstrap,
    "nameFile" : 'Bootstrap_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Version Control',
    "description" : 'Course focused on version control (Git).',
    "file" : CourseControlDeVersiones,
    "nameFile" : 'Version_Control_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Prework on Windows',
    "description" : 'Course focused on the initial configuration in the Windows Operating System, for an adequate work environment.',
    "file" : CoursePrework,
    "nameFile" : 'Prework_On_Windows_Maria_Fernanda_Martinez_Labra.pdf'
  },
  {
    "title" : 'Tailwind CSS 2020',
    "description" : 'Tailwind CSS library focused course.',
    "file" : CourseTailwind,
    "nameFile" : 'Tailwind_Css_2020_Maria_Fernanda_Martinez_Labra.pdf'
  },
]