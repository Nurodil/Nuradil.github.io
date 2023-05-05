import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  omnifood,
  banking,
  spectra,
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
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Content Manager & Creator",
    icon: backend,
  },
  {
    title: "Professional Copywriter",
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Marketing Manager",
    company_name: "Miracle IT Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2020 - Jan 2023",
    points: [
      "As an Assistant Marketing Manager at Miracle IT Academy, I had a multi-faceted role that involved overseeing various aspects of the organization's marketing efforts. One of my key responsibilities was leading content creation for the Academy. I worked with a team of writers and designers to produce high-quality content that was both informative and engaging, and that aligned with the Academy's overall messaging and branding.",
    ],
  },
  {
    title: "Content Creator & Manager",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jan 2023 ",
    points: [
      "As a freelance Content Creator & Manager, my job was to create and manage content for clients across social media, blogs, websites, and email campaigns. I researched, wrote, and edited content that aligned with their brand goals, managed their social media accounts, and analyzed metrics to measure success. I enjoyed the variety of clients and projects and the challenge of capturing their unique voices in my work. Overall, it was a rewarding job that required creativity, attention to detail, and a deep understanding of digital marketing.",
    ],
  },
  {
    title: "ESL Teacher",
    company_name: "Private Learning Centres",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2018 - Aug 2021",
    points: [
      "As an ESL teacher, my primary goal was to help non-native speakers learn English through engaging lesson plans, personalized feedback, and regular progress assessments. I strongly believe that students learn best in a positive and comfortable environment, so I strived to create a welcoming and inclusive classroom atmosphere that fostered open communication and active participation.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Self-learning",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "As a Junior Frontend Developer, I am passionate about self-learning and staying up-to-date with the latest technologies. My portfolio showcases my proficiency in front-end languages and frameworks such as HTML, CSS, JavaScript and React. With strong problem-solving skills and a keen attention to detail, I am an asset to any development team.",
    ],
  },
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
    name: "Omnifood Website",
    description:
      "I created the Omnifood website to showcase a premium food delivery service through an elegant and user-friendly design. With stunning food photography and a seamless ordering process, the website provides a comprehensive look at the company's offerings and values. Its modern and clean layout reflects Omnifood's commitment to excellence and provides a user experience that is both visually appealing and intuitive.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "webdesign",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/Nurodil/nuradil-omnifood",
  },
  {
    name: "Bankist Website",
    description:
      "I designed and developed the Bankist website, which offers users an intuitive and engaging way to manage their finances. The website features a clean and modern interface that allows users to easily navigate and access their account information. With its user-friendly design and comprehensive functionality, the Bankist website provides a seamless banking experience that helps users take control of their finances.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: banking,
    source_code_link: "https://github.com/Nurodil/nuradil-bankist",
  },
  {
    name: "Life Coaching Website",
    description:
      "I was part of a skilled team that created a life coaching website. Our intuitive and engaging design featured a modern and clean layout that reflected the company's values and mission. We provided comprehensive information about the company's coaching services and success stories. Through our effective teamwork we delivered a seamless website that was visually appealing and user-friendly.",
    tags: [
      {
        name: "xhtml",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: spectra,
    source_code_link: "https://github.com/Nurodil/nuradil-spectra",
  },
];

export { services, technologies, experiences, testimonials, projects };
