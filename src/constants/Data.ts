import MediaTracker from '../assets/mediatracker.png'
import Ecommerce from '../assets/ecommerce.png'
import HairSalon from '../assets/hairsalon.png'
import Portfolio from '../assets/portfolio.png'
import TamalesShop from '../assets/tamalesShop.png'

export const navItems = [
    {
        id: 0,
        title: 'Home',
        url: '/',
        onlyMobile: false,
    },
    {
        id: 1,
        title: 'Projects',
        url: '/#projects',
        onlyMobile: false,
    },
    {
        id: 2,
        title: 'About',
        url: '/#about',
        onlyMobile: false,
    },
    {
        id: 3,
        title: 'Skills',
        url: '/#skills',
        onlyMobile: false,
    },
    {
        id: 3,
        title: 'Resume',
        url: '/#resume',
        onlyMobile: false,
    },
    {
        id: 4,
        title: 'Contact',
        url: '/#contact',
        onlyMobile: false,
    },
]

export const skills = [
    {
        id: 0,
        name: 'NextJS',
        icon: '',
    },
    {
        id: 1,
        name: 'React',
        icon: '',
    },
    {
      id: 2,
      name: 'Node',
      icon: '',
    },
    {
      id: 3,
      name: 'Express',
      icon: '',
    },
    {
        id: 4,
        name: 'TailwindCSS',
        icon: '',
    },
    {
        id: 5,
        name: 'Typescript',
        icon: '',
    },
    {
        id: 6,
        name: 'JavaScript',
        icon: '',
    },
    {
        id: 7,
        name: 'MongoDB',
        icon: '',
    },
    {
        id: 8,
        name: 'Salesforce',
        icon: '',
    },
    {
        id: 9,
        name: 'APIs',
        icon: '',
    },
    {
        id: 10,
        name: 'HTML5',
        icon: '',
    },
    {
        id: 11,
        name: 'CSS3',
        icon: '',
    },
    {
        id: 12,
        name: 'MySQL',
        icon: '',
    },
    {
        id: 13,
        name: 'SQL',
        icon: '',
    },
    {
        id: 14,
        name: 'Wordpress',
        icon: '',
    },
    {
      id: 15,
      name: 'PHP',
      icon: '',
  },
  {
    id: 16,
    name: 'Prisma',
    icon: '',
},
{
  id: 17,
  name: 'Bootstrap',
  icon: '',
},
]

export const projects = [
  {
    id: 0,
    img: MediaTracker,
    subtitle: 'React, Node, Express, MongoDB',
    title: 'Media Tracker App',
    sourceLink: 'https://github.com/lizmery/faves-tracker',
    demoLink: 'https://mediatracker-proxy.vercel.app',
    description:
      `Managing media across multiple platforms requires users to maintain separate accounts and can be tedious and time-consuming.
      I created a fullstack app that centralizes tracking for books, movies, and series in one place, with search, filters, and a dashboard for insights.
      Users can also import media lists via CSV from platforms like Goodreads, IMDb, and MyAnimeList.
      `
  },
    {
      id: 1,
      img: Ecommerce,
      subtitle: 'Nextjs, TypeScript, TailwindCSS, Stripe',
      title: 'Ecommerce App',
      sourceLink: 'https://github.com/lizmery/ecommerce-app',
      demoLink: 'https://ecommerce-app-dun-omega.vercel.app/',
      description:
        `An ecommerce with restricted product access and role-based functionality. This app allows only registered
        customers to browse, purchase, and download products. 
        Admins handle inventory, user management, and sales tracking. Features include authentication (Auth.js), 
        Stripe checkout, email notifications (Resend), product file uploads, and input validation with Zod.
        `
    },
    {
      id: 2,
      img: TamalesShop,
      subtitle: 'React, CSS',
      title: 'Tamales Shop',
      sourceLink: 'https://github.com/lizmery/tamales-clone',
      demoLink: 'https://tamales-clone.vercel.app/',
      description:
        'An e-commerce website that sells Tamales and features image sliders, a menu page that fetches products from CommerceJS, and payment processing handled by Stripe. ',
    },
    {
      id: 3,
      img: HairSalon,
      subtitle: 'NextJS, CSS, MongoDB',
      title: 'Hair Salon Website w/ Blog',
      sourceLink: 'https://github.com/lizmery/my-blog-app',
      demoLink: 'https://my-blog-app-ebon.vercel.app/',
      description:
        'A fully responsive hair salon site that features a blog that is only accessible to registered users. It also features an admin dashboard in which only admin users can manage users and posts.',
    },
    {
      id: 4,
      img: Portfolio,
      subtitle: 'NextJS, Typescript, TailwindCSS, CSS',
      title: 'Portfolio v.4',
      sourceLink: 'https://github.com/lizmery/portfolio-v4',
      demoLink: '',
      description:
        'The fourth iteration of my personal portfolio that is fully responsive and showcases the projects I have created so far It also features a resume section and about section. ',
    },
    // {
    //   id: 4,
    //   img: Project4,
    //   subtitle: 'PHP, JavaScript, Bootstrap, MySQL',
    //   title: 'MyFaves App',
    //   sourceLink: 'https://github.com/lizmery/MyFaves-App',
    //   demoLink: '',
    //   description:
    //     'A fullstack application that allows users to keep track of their interests (e.g. books, movies, music, shows, etc.). Users can create, read, update, and delete any items from their lists.',
    // },
    
    // {
    //   id: 6,
    //   img: '',
    //   subtitle: 'React, Bootstrap',
    //   title: 'Mohala - Hackathon',
    //   sourceLink: '',
    //   demoLink: '',
    //   description:
    //     'A mock health and wellness application where users will be able to track their goals towards building new habits, grow alongside a community, and connect with individualized 1:1 support.',
    // },
  ]

  export const resumeItems = [
    {
        id: 1,
        title: 'Web Development, C.A.',
        subtitle: 'Palomar College',
        date: '2020 - 2021',
        description:
          'The Web Development Certificate of Achievement (C.A.) program at Palomar College is a 12 unit program that includes the web page design and programming languages that allow a developer to build dynamic and responsive web applications.',
        category: 'education',
      },
    
      {
        id: 2,
        title: 'Psychology, B.A.',
        subtitle: 'California State University San Marcos',
        date: '2014 - 2018',
        description:
          'The program emphasizes psychology as an empirical science and the development of skills, including written and oral communication, information literacy, quantitative and qualitative research methods, and critical analysis of complex problems.',
        category: 'education',
      },
    
      {
        id: 4,
        title: 'Software Developer',
        subtitle: 'Agent Elite, Inc.',
        date: '2022 - PRESENT',
        description:
          `Developed and customized Salesforce applications using Apex, Lightning Web Components, Aura Components, SOQL, Flow Builder, and Custom Objects. 
          Developed and maintained Salesforce integrations with other systems (e.g. Stripe, Mailchimp, iHomeFinder, Facebook) using REST API’s. Implemented API solutions to improve data exchange and automate business processes.
          Designed and created HTML emails for marketing campaigns and newsletters. Collaborated with management team to increase efficiency and productivity, and improve customer satisfaction.
          Maintained multiple WordPress websites for clients’ in a multisite network using PHP, Javascript, React, HTML, and CSS. 
          `,
        category: 'experience',
      },
    
      {
        id: 5,
        title: 'Front-End Developer',
        subtitle: "The Expat Women's Hackathon",
        date: 'Nov - Dec 2021',
        description:
          'Developed architecture using ReactJS, Reactstrap, and Bootstrap. Responsible for building the user interface for the navigation bar, about page, community dashboard section, and support dashboard section.',
        category: 'experience',
      },
  ]