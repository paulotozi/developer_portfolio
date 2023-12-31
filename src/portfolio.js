/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paulo Tozi",
  title: "Olá, eu sou o Paulo!",
  subTitle: emoji(
    "Eu sou um estudante a procura de um estágio! Tenho conhecimento em ferramentas front-end como Javascript / React.js / HTML / CSS e back-end como Python / Java / C/C++ /."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sAhLfq0ZcUfP0H79KIQ_UctneKg4gFz0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/paulotozi",
  linkedin: "https://www.linkedin.com/in/paulo-tozi-33678324a/",
  gmail: "paulotozi1512@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/paulo.tozi.5",
  medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/poro_fozzi/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "Tentando ser full-stack nesse mundo doido",
  skills: [
    emoji(
      "⚡ Criação e modelação de banco de dados"
    ),
    emoji("⚡ Últimamente passando nervoso com react.js"),
    emoji(
      "⚡ Exercícios de programação pelo Beecrowd"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Federal do ABC",
      logo: require("./assets/images/logotipo-ufabc-abaixo.png"),
      subHeader: "Bacharelado em Ciência e Tecnologia",
      duration: "Setembro 2020 - Atualmente",
      desc: "Ingresso pelo processo de Olimpíadas Científicas",
      descBullets: [
        "Pós-bacharelado interdisciplinar pretendo cursar Ciência da Computação ou engenharia de Automação",
        "Participando das entidades Green Team Hacker Club e Project Neon"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Membro de entidade",
      company: "Green Team Hacker Club",
      companylogo: require("./assets/images/logo-GTHC-removebg-preview.png"),
      date: "Junho 2023 – Presente",
      desc: "Membro dentro da área de banco de dados.",
      descBullets: [
        "Fiz parte do projeto de criar um banco de dados da entidade"
      ]
    },
    {
      role: "Membro de entidade",
      company: "Project Neon",
      companylogo: require("./assets/images/logo-Project-Neon-removebg-preview.png"),
      date: "Julho 2023 – Presente",
      desc: "Membro da área de gestão.",
      descBullets: [
        "Faço parte da equipe do financeiro e marketing dentro da equipe de gestão"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificados 🏆 "),
  subtitle:
    "Certificados que realizei nestes últimos anon!",

  achievementsCards: [
    {
      title: "Python Basics",
      subtitle:
        "Curso de introdução sobre Python.",
      image: require("./assets/images/Umich.png"),
      imageAlt: "Python Basics",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/PLNXUZYR4F4X"
        }
      ]
    },
    {
      title: "Python Functions, Files, and Dictionaries",
      subtitle:
        "Curso sobre ferramentas básicas de Python.",
      image: require("./assets/images/Umich.png"),
      imageAlt: "Python Functions, Files, and Dictionaries",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/GWY2YF2QEJR4"
        }
      ]
    },

    {
      title: "Python Classes and Inheritance",
      subtitle: "Curso que eu aprendi sobre programação orientada a objetos",
      image: require("./assets/images/Umich.png"),
      imageAlt: "Python Classes and Inheritance",
      footerLink: [
        {
          name: "Certification", 
          url: "https://coursera.org/verify/BFC82MSJM3NU"}
      ]
    },

    {
      title: "Data Collection and Processing with Python",
      subtitle: "Minha introdução à área de Dados!",
      image: require("./assets/images/Umich.png"),
      imageAlt: "Data Collection and Processing with Python",
      footerLink: [
        {
          name: "Certification", 
          url: "https://coursera.org/verify/KSFBF8FBN6E4"}
      ]
    },

    {
      title: "SQL for Data Science",
      subtitle: "Curso de introdução à SQL!",
      image: require("./assets/images/UCDavis.png"),
      imageAlt: "SQL for Data Science",
      footerLink: [
        {
          name: "Certification", 
          url: "https://coursera.org/verify/5V4QG6LSVNV7"}
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em contato ☎️"),
  subtitle:
    "Me mende uma mensagem case se interesse para participar de algum projeto ou entrevista!.",
  number: "+55 (11) 95305-0150",
  email_address: "paulotozi1512@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
