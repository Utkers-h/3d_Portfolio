import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  JP_Morgan,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  microsoft,
  git,
  Gssoc,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "DSA Enthusiast",
    icon: backend,
  },
  {
    title: "Quantum Visions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Microsoft Learn Student Ambassador",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
      "Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students",
      "Create robust tech communities and develop technical and career skills for the future.",
      "As a Microsoft Learn Student Ambassador, I had the honor of representing Microsoft and advocating for the transformative potential of technology.",
      " I developed skills in communication, teamwork, which have proven instrumental in my personal and professional growth.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript Summer of code",
    icon: Gssoc,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "GirlScript Summer Of Code is a three-month-long Open-Source Program conducted every summer by the Girlscript Foundation.",
      "This immersive program offered an ideal blend of hands-on coding experience, mentorship, and networking opportunities that enabled me to grow both personally and professionally.",
      "It provided me with a supportive environment,sharpening my open source skills , and a strong network of like-minded individuals.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company_name: "JP Morgan Chase & Co.",
    icon: JP_Morgan,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Software Engineering Virtual Experience at JPMorgan Chase & Co: Visualizing Stock Price Data for Trading Dashboards.",
      "One of the key projects I worked on involved interfacing with a stock price data feed and setting up my system for data analysis. This involved leveraging JPMorgan Chase & Co's proprietary tools and technologies to retrieve and process stock market data efficiently.",
      "To further enhance my skills, I was tasked with displaying the stock price data visually for traders. Using Perspective, I created a chart that was integrated into a trading dashboard.",
      "This allowed traders to easily analyze and interpret the data, enabling them to make informed decisions swiftly.",
      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Utkers-h",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Utkers-h",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Utkers-h",
  },
];

export { services, technologies, experiences, testimonials, projects };