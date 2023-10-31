import * as SiIcons from "react-icons/si";

export const TechIcon = {
  typescript: SiIcons.SiTypescript,
  docker: SiIcons.SiDocker,
  mongodb: SiIcons.SiMongodb,
  prisma: SiIcons.SiPrisma,
  react: SiIcons.SiReact,
  nestjs: SiIcons.SiNestjs,
  javascript: SiIcons.SiJavascript,
  aws: SiIcons.SiAmazonaws,
};

export const data = [
  {
    index: 1,
    title: "Hi there! I'm",
    subtitle: "David Espinoza",
    description: ["full stack developer", "web designer", "blogger"],
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
            title: "Web designer- envato",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },
          {
            index: 2,
            title: "Web designer- envato",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },

          {
            index: 3,
            title: "Web designer- envato",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },
        ],
        EDUCATION: [
          {
            index: 1,
            title: "ENGINEERING DIPLOMA - OXFORD UNIVERSITY",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },
          {
            index: 2,
            title: "MASTERS DEGREE - PARIS UNIVERSITY",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },

          {
            index: 3,
            title: "BACHELOR DEGREE - BERLIN HIGHER INSTITUTE",
            date: "11/04/2021",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper",
          },
        ],
        SKILLS: [
          {
            index: 1,
            title: "HTML",
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
        title: "Image Project",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [
          TechIcon.aws,
          TechIcon.docker,
          TechIcon.react,
          TechIcon.nestjs,
        ],
        imagePreview: "/dados.svg",
      },
      {
        index: 2,
        title: "Mauro",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [TechIcon.aws, TechIcon.docker],
        imagePreview: "/dados.svg",
      },
      {
        index: 3,
        title: "David",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [TechIcon.aws, TechIcon.docker, TechIcon.react],
        imagePreview: "/dados.svg",
      },
      {
        index: 4,
        title: "Saul",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [TechIcon.aws, TechIcon.docker],
        imagePreview: "/dados.svg",
      },
      {
        index: 5,
        title: "Carlos",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [TechIcon.aws, TechIcon.docker],
        imagePreview: "/dados.svg",
      },
      {
        index: 6,
        title: "Jorge",
        client: "Random",
        startDate: "11/04/2021",
        endDate: "11/04/2021",
        iconUsedTechnologies: [TechIcon.aws, TechIcon.docker],
        imagePreview: "/dados.svg",
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
    },
  },
];

export default data;
