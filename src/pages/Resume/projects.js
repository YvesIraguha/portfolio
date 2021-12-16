import authorsHeaven from "../../images/authors_heaven.png";
import teahouseMag from "../../images/teahousemag.png";
import edgenrw from "../../images/edgenrw.png";
import myBudget from "../../images/my_budget.png";
// import companionDialogFlow from "../../images/companion_dialogflow.png";
import companionApp from "../../images/companionApp.png";

export default [
  {
    title: "TeaHouse Magazine",
    thumbnail: teahouseMag,
    date: "2020-2021",
    description:
      "I designed, developed, and deployed the front-end and back-end service of Tea House Magazine. Tea House Magazine is a platform of writers, whereby authors submit their poems or short stories, they get reviewed by editors and published through the platform.",
    technologies: [
      "NodeJs",
      "ExpressJS",
      "Postgresql",
      "Sequelize",
      "Git",
      "GitHub",
      "AWS S3",
      "AWS CloudFront",
      "GitHub Actions",
      "React",
      "Redux",
      "Redux-thunk",
      "Mocha & Chai",
      "Axios",
      "Heroku",
      "CSS",
    ],
    links: {
      codebase: {
        frontEnd: "https://github.com/YvesIraguha/TeaHouse-FrontEnd",
        service: "https://github.com/YvesIraguha/TeaHouse",
      },
      hostedLink: "https://teahousemagazine.org/",
    },
  },
  {
    title: "Edified Generation Rwanda",
    date: "2020-2020",
    thumbnail: edgenrw,
    description:
      "Together with a small team of engineers, we developed Edified Generation Rwanda platform. We integrated Covid-19 essay writing contest through the app, so that students whose schools stopped due to Corona-Virus pandemic could learn while at home.",
    technologies: [
      "NodeJs",
      "ExpressJS",
      "Postgresql",
      "Sequelize",
      "Git",
      "GitHub",
      "AWS S3",
      "AWS CloudFront",
      "GitHub Actions",
      "React",
      "Redux",
      "Material UI",
    ],
    links: {
      codebase: {
        frontEnd:
          "https://github.com/Pierrenziza/edified-generation-rwanda-app",
        service: "https://github.com/Habinezajanvier/edified-gen-api",
      },
      hostedLink: "https://edigenrwanda.org/",
    },
  },
  {
    title: "Author's Heaven",
    thumbnail: authorsHeaven,
    date: "2019-2019",
    description:
      "Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web.",
    technologies: [
      "NodeJs",
      "ExpressJS",
      "Postgresql",
      "Sequelize",
      "Git",
      "GitHub",
      "Heroku",
      "React",
      "Redux",
      "Redux-thunk",
      "Mocha",
      "Chai",
      "Jest",
      "Slack",
      "Travis CI",
      "SASS & SCSS",
    ],
    links: {
      codebase: {
        frontEnd: "https://github.com/andela/titan-dev-ah-frontend",
        service: "https://github.com/andela/Titan-Devs",
      },
      hostedLink: "https://titan-dev-ah-frontend.herokuapp.com/",
    },
  },
  {
    title: "Personal Finance",
    thumbnail: myBudget,
    date: "2019-2021",
    description:
      "PersonalFinance is an application that help users to record expenses so that they can evaluate their spendings over time. You can use this product to record expenses as soon as you spend some money so that you can track how well you use random fund.",
    technologies: [
      "ReactNative",
      "Expo",
      "Graphql",
      "ApolloClient",
      "NodeJs",
      "ExpressJS",
      "Postgresql",
      "Sequelize",
      "Git",
      "GitHub",
      "Heroku",
    ],
    links: [
      {
        codebase: {
          frontEnd: "https://github.com/YvesIraguha/personalFinanceMobile",
          service: "https://github.com/YvesIraguha/personalFinanceApis",
        },
        hostedLink: "",
      },
    ],
  },
  {
    title: "CompanionApp",
    thumbnail: companionApp,
    date: "2019-2019",
    description:
      "This is a mobile application that acts as your virtual buddy that allows you to book meeting rooms directly from your phone in Andela. I worked on CompanionApp, as a mobile engineer. I used ReactNative to contribute to the product.",
    technologies: [
      "ReactNative",
      "NodeJs",
      "ExpressJS",
      "Postgresql",
      "Sequelize",
      "Git",
      "GitHub",
      "Jira",
      "Redux",
      "Redux-thunk",
      "Jest",
      "Slack",
    ],
    links: [
      {
        codebase: {
          frontEnd: "https://github.com/andela/converge-companion-app",
          service: "",
        },
        hostedLink: "",
      },
    ],
  },

  {
    title: "Python Blogging App",
    thumbnail: companionApp,
    date: "2019-2019",
    description:
      "This is a blogging application written in Flask framework based on python language.",
    technologies: [
      "Python",
      "Flask",
      "Postgresql",
      "psycopg2",
      "SQL",
      "Git",
      "GitHub",
      "HTML & CSS",
      "Heroku",
    ],
    links: [
      {
        codebase: {
          frontEnd: "https://github.com/YvesIraguha/python-flask-blogging-app",
          service: "https://github.com/YvesIraguha/python-flask-blogging-app",
        },
        hostedLink: "https://python-blogging-app.herokuapp.com/",
      },
    ],
  },
  {
    title: "SEND IT",
    thumbnail: companionApp,
    date: "2019-2019",
    description: "This is an Andela bootcamp project.",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "Postgresql",
      "pg",
      "SQL",
      "Git",
      "GitHub",
      "HTML & CSS",
      "Heroku",
      "Travis CI",
      "Coveralls",
    ],
    links: {
      codebase: {
        frontEnd: "https://github.com/YvesIraguha/send_it_challenge",
        service: "https://github.com/YvesIraguha/send_it_challenge",
      },
      hostedLink: "https://yvessendit.herokuapp.com/pages",
    },
  },
];
