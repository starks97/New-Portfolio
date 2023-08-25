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

const data = [
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
        "Hello! My name is David and I enjoy creating things that live on the internet. My journey in technologies started back in 2019 when I decided to try make a website for my friend, in that time she needed for her business. After that opportunity I made the decision to keep learning as much as I could. My main focus these days is building accessible, inclusive products and digital experiences and also keep learning new technologies focus on backend development.",
      firstName: "David",
      LastName: "Espinoza",
      phoneNumber: "+1(631)903-3732",
      email: "ifrit68@hotmai.com",
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
