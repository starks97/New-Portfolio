import * as SiIcons from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const TechIcon = {
  typescript: SiIcons.SiTypescript,
  docker: SiIcons.SiDocker,
  mongodb: SiIcons.SiMongodb,
  prisma: SiIcons.SiPrisma,
  react: SiIcons.SiReact,
  nestjs: SiIcons.SiNestjs,
  javascript: SiIcons.SiJavascript,
  aws: SiIcons.SiAmazonaws,
  redis: SiIcons.SiRedis,
};

export const Skills = {
  javascript: SiIcons.SiJavascript,
  typescript: SiIcons.SiTypescript,
  react: SiIcons.SiReact,
  rust: SiIcons.SiRust,
  python: SiIcons.SiPython,
  docker: SiIcons.SiDocker,
  nextjs: TbBrandNextjs,
  nestjs: SiIcons.SiNestjs,
  redis: SiIcons.SiRedis,
  graphql: SiIcons.SiGraphql,
};

const socialMediaIcons = {
  instagram: BsInstagram,
  github: BsGithub,
  linkedIn: BsLinkedin,
};

export const data = [
  {
    index: 1,
    title: "Hi there! I'm",
    subtitle: "David Espinoza",
    description: ["frontend engineer", "web designer", "blogger"],
  },
  {
    index: 2,
    title: "About me",
    personalInfo: {
      description:
        "Greetings! I'm David, a frontend software engineer with a passion for crafting exceptional digital products and finding innovative solutions for businesses. My commitment to excellence drives me to always give my best effort and never stop learning. I believe that staying up-to-date with the latest technologies and exploring new opportunities is essential to success in this dynamic field.",
      firstName: "David",
      LastName: "Espinoza",
      phoneNumber: "+1(631)903-3732",
      email: "ifrit68@hotmai.com",
      journey: `Back in 2019, I took my first steps into the world of web development by venturing into creating a website for a friend's business. Little did I know that this small project would ignite a newfound passion for technology within me.

        Since that initial foray, I have been wholeheartedly committed to continuously learning and growing in this ever-evolving field. My primary focus has shifted towards building digital products and experiences that prioritize accessibility and inclusivity for all users. I strongly believe that technology should be a tool that brings people together, regardless of their backgrounds or abilities.
        
        As I embark on this journey, I am excited to share my insights and experiences with the world of technology. I invite you to join me on this adventure as I navigate the exciting and dynamic realm of tech, and together, we can shape a better and more inclusive digital landscape.`,
      socialMedia: [
        {
          index: 1,
          value: "instagram",
          path: "https://www.instagram.com/",
        },
        {
          index: 2,
          value: "github",
          path: "https://github.com/starks97",
        },
        {
          index: 3,
          value: "linkedIn",
          path: "https://www.linkedin.com/in/david-espinoza-a306b2242/",
        },
      ],
      resume: {
        Experience: [
          {
            index: 1,
            title: "Internship Project: Web App Hampton Hair Salon",
            date: "Feb 2021 - Jun 2021",
            description:
              "Contributed to web app development, gaining hands-on experience and collaborating with a team to create a user-friendly application",
          },
          {
            index: 2,
            title: "Web Development for Gavilanes Construction",
            date: "Aug 2021 - Apr 2022",
            description:
              "Designed and maintained the company's web presence, ensuring a seamless user experience and implementing web solutions",
          },

          {
            index: 3,
            title: "API system for Skycode Graphics(Personal Project)",
            date: "March 2023 - Present",
            description:
              "Currently developing an API system for Skycode Graphics, showcasing self-motivation and ongoing commitment to software development.",
          },
        ],
        EDUCATION: [
          {
            index: 1,
            title: "GED - IES Carpe Diem, Madrid Spain",
            date: "2009 - 2015",
            description: "Completed the high school ",
          },
          {
            index: 2,
            title: "Associate Degree - University of Cuenca, Ecuador",
            date: "2016 - 2018",
            description: "Completed Associate Degree in Math and Statistics.",
          },

          {
            index: 3,
            title: "GED - University of New York",
            date: "Dec 2020",
            description:
              "Completed the high school equivalency exam at the University of New York.",
          },
        ],
        SKILLS: [
          {
            index: 1,
            title: "Javascript",
            icon: Skills.javascript,
          },
          {
            index: 2,
            title: "Typescript",
            icon: Skills.typescript,
          },
          {
            index: 3,
            title: "React",
            icon: Skills.react,
          },
          {
            index: 4,
            title: "Rust",
            icon: Skills.rust,
          },
          {
            index: 5,
            title: "Python",
            icon: Skills.python,
          },
          {
            index: 6,
            title: "Docker",
            icon: Skills.docker,
          },
          {
            index: 7,
            title: "Nextjs",
            icon: Skills.nextjs,
          },
          {
            index: 8,
            title: "Nestjs",
            icon: Skills.nestjs,
          },
          {
            index: 9,
            title: "Redis",
            icon: Skills.redis,
          },
          {
            index: 10,
            title: "GraphQL",
            icon: Skills.graphql,
          },
        ],
      },
    },
  },
  {
    index: 3,
    title: "My Portfolio",
    work: [
      {
        index: 1,
        title: "E-commerce",
        client: "Personal Project",
        startDate: "02/04/2021",
        endDate: "04/27/2021",
        iconUsedTechnologies: [
          TechIcon.aws,
          TechIcon.docker,
          TechIcon.react,
          TechIcon.mongodb,
          TechIcon.prisma,
        ],
        imagePreview: "/img/ecommerce.png",
        description:
          "ModernShop is a state-of-the-art eCommerce platform designed to provide businesses with a robust, scalable, and efficient solution for online retail. Harnessing the capabilities of Next.js, Prisma, and MongoDB, ModernShop offers a seamless fusion of cutting-edge technology and user-centric design, ensuring a superior shopping experience for customers and streamlined operations for businesses.",
        url: "https://github.com/starks97/e-commerce",
      },
      {
        index: 2,
        title: "Manage your budget app",
        client: "Personal Project",
        startDate: "05/10/2021",
        endDate: "05/27/2021",
        iconUsedTechnologies: [TechIcon.react],
        imagePreview: "/img/manageBudget.png",
        description:
          "This project, undertaken as a learning initiative, is a React-based budget management application. Developed to explore React and its hooks, the app follows best practices in modern web development",
        url: "https://budget-manage-app.netlify.app/",
      },
      {
        index: 3,
        title: "Pokemon app",
        client: "Personal Project",
        startDate: "06/20/2021",
        endDate: "09/02/2021",
        iconUsedTechnologies: [TechIcon.react],
        imagePreview: "/img/pokemon.png",
        description:
          "More than just a Pokemon application, this project is a gateway to understanding Next.js and API integration. Whether you're new to Next.js or seeking to enhance your skills in fetching and displaying data dynamically, this app provides hands-on experience and insights into the world of modern web development",
        url: "https://pokemon-app-plum-three.vercel.app/",
      },
      {
        index: 4,
        title: "Todo app",
        client: "Personal Project",
        startDate: "03/04/2022",
        endDate: "06/17/2022",
        iconUsedTechnologies: [
          TechIcon.aws,
          TechIcon.docker,
          TechIcon.react,
          TechIcon.mongodb,
          TechIcon.prisma,
        ],
        imagePreview: "/img/todoApp.png",
        description:
          "This project goes beyond the ordinary by combining the flexibility of MongoDB with the dynamic capabilities of Next.js. The integration of a NoSQL database enhances scalability and data handling, providing a robust foundation for your todo management.",
        url: "https://todo-challenge-iota.vercel.app/",
      },
      {
        index: 5,
        title: "Hampton Hair Salon",
        client: "Hampton Hair Salon",
        startDate: "02/04/2021",
        endDate: "06/04/2021",
        iconUsedTechnologies: [
          TechIcon.aws,
          TechIcon.docker,
          TechIcon.react,
          TechIcon.mongodb,
          TechIcon.prisma,
        ],
        imagePreview: "/img/hampton.png",
        description:
          "The primary goal of this project was to create a digital platform for Hampton Hair Salon, allowing them to efficiently manage appointments and showcase their services online. The implementation reflects a commitment to leveraging technology to enhance local business operations.",
        url: "https://www.hamptonshairsalon.com/",
      },
      {
        index: 6,
        title: "API system for Skycode Graphics",
        client: "Personal Project",
        startDate: "03/04/2023",
        endDate: "Present",
        iconUsedTechnologies: [
          TechIcon.aws,
          TechIcon.docker,
          TechIcon.nestjs,
          TechIcon.mongodb,
          TechIcon.prisma,
          TechIcon.typescript,
          TechIcon.redis,
        ],
        imagePreview: "/img/admin.png",
        description:
          "ModernShop stands as a testament to my commitment to continuous learning and exploration within the realm of modern web development. This personal project, initiated on 03/04/2023 and ongoing, was specifically crafted for a blog platform. By employing technologies such as NestJS, Prisma, MongoDB, and Redis for caching, I aimed to deepen my knowledge and understanding of these cutting-edge tools.",
        url: "https://github.com/starks97/adminPanel",
      },
    ],
  },
  {
    index: 4,
    title: "Get in touch",
    info: {
      index: 1,
      phone: "+1(631)903-3732",
      email: "ifrit68@hotmail.com",
      socialMedia: [
        {
          index: 1,
          value: socialMediaIcons.instagram,
          path: "https://www.instagram.com/",
        },
        {
          index: 2,
          value: socialMediaIcons.github,
          path: "https://github.com/starks97",
        },
        {
          index: 3,
          value: socialMediaIcons.linkedIn,
          path: "https://www.linkedin.com/in/david-espinoza-a306b2242/",
        },
      ],
    },
  },
];

export default data;
