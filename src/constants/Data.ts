import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'
import Project4 from '../assets/project4.png'

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
        name: 'TailwindCSS',
        icon: '',
    },
    {
        id: 3,
        name: 'Typescript',
        icon: '',
    },
    {
        id: 4,
        name: 'JavaScript',
        icon: '',
    },
    {
        id: 5,
        name: 'MongoDB',
        icon: '',
    },
    {
        id: 6,
        name: 'Salesforce',
        icon: '',
    },
    {
        id: 7,
        name: 'APIs',
        icon: '',
    },
    {
        id: 8,
        name: 'HTML5',
        icon: '',
    },
    {
        id: 9,
        name: 'CSS3',
        icon: '',
    },
    {
        id: 10,
        name: 'MySQL',
        icon: '',
    },
    {
        id: 11,
        name: 'SQL',
        icon: '',
    },
    {
        id: 12,
        name: 'Wordpress',
        icon: '',
    },
    {
      id: 13,
      name: 'PHP',
      icon: '',
  },
  {
    id: 14,
    name: 'Prisma',
    icon: '',
},
{
  id: 15,
  name: 'Bootstrap',
  icon: '',
},
]

export const projects = [
    {
      id: 1,
      img: Project1,
      subtitle: 'Nextjs, TypeScript, TailwindCSS',
      title: 'Ecommerce App',
      sourceLink: 'https://github.com/lizmery/ecommerce-app',
      demoLink: 'https://ecommerce-app-dun-omega.vercel.app/',
      description:
        'A fullstack ecommerce shop that features two separate dashboards: Customer & Admin. Customers can edit their profile, view/purchase products, while Admins can perform CRUD operations. ',
    },
    {
      id: 2,
      img: Project2,
      subtitle: 'NextJS, CSS, MongoDB',
      title: 'Hair Salon Website w/ Blog',
      sourceLink: 'https://github.com/lizmery/my-blog-app',
      demoLink: 'https://my-blog-app-ebon.vercel.app/',
      description:
        'A fully responsive hair salon site that features a blog that is only accessible to registered users. It also features an admin dashboard in which only admin users can manage users and posts.',
    },
    {
      id: 3,
      img: Project3,
      subtitle: 'NextJS, Typescript, TailwindCSS, CSS',
      title: 'Portfolio v.4',
      sourceLink: 'test',
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
    {
      id: 5,
      img: Project4,
      subtitle: 'React, CSS',
      title: 'Tamales Shop',
      sourceLink: 'https://github.com/lizmery/tamales-clone',
      demoLink: 'https://tamales-clone.vercel.app/',
      description:
        'An e-commerce website that sells Tamales and features image sliders, a menu page that fetches products from CommerceJS, and payment processing handled by Stripe. ',
    },
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