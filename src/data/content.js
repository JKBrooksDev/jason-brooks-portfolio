// Home page image
import heroImg from "../assets/IMG_1696.jpg";

// Portfolio images
import drumMachine from "../assets/drummachine.png";
import clockImg from "../assets/25_5clock.png";
import calculatorImg from "../assets/calculator.png";
import markdownImg from "../assets/markdown_previewer.png";
import quoteImg from "../assets/quote_machine.png";
import capstoneImg from "../assets/capstone-login.png";

// Photos page images
import photo1 from "../assets/IMG_1696.jpg";
import photo2 from "../assets/20240726_073321.jpg";
import gradAmyDad from "../assets/Grad_Amy_Dad.jpg";
import graduation from "../assets/Graduation.jpg";



// About page images
import profileImg from "../assets/profile_pic.jpg";

export const introdata = {
  title: "Hello, I'm Jason (JKB)",
  animated: {
    first: "Responsive Web Design",
    second: "Full Stack Development",
    third: "Modern UI/UX",
  },

  description:
    "Dedicated technology enthusiast with an insatiable thirst for knowledge and a passion for building modern web applications.",
  your_img_url: heroImg,
};

export const dataabout = {
  title: "Who am I?",
  aboutme: "I’m Jason Kenneth Brooks (JKB), a full‑stack web developer with a strong foundation in the MERN stack and a passion for building clean, responsive, and modern applications. My background spans construction, production, and technical problem‑solving, giving me a practical, hands‑on approach to engineering and teamwork. I recently completed the Full Stack Web Development Certification through Persevere, along with Google’s Project Management Certificate and Microsoft 365 Fundamentals. I thrive in environments where learning, collaboration, and continuous improvement are valued.",
};

export const datapersevere = {
  title: "Persevere Class Creed",
  creed:
    "Unified by a collective pursuit of success, we draw strength from the fear of failure and the determination to break the cycle of hopelessness. Driven by a vision of a better future for our children, family, and ourselves, we build the structure needed to stay focused and level‑headed. We embody desire, dedication, and discipline, remembering not just the steps ahead but the countless steps it took to get here.",
};

export const dataportfolio = [
  {
  img: capstoneImg,
  description: "Capstone Ecommerce",
  link: "https://mern-ecommerce-platform-eight.vercel.app/login",
  github: "https://github.com/JKBrooksDev/mern-ecommerce-platform",
  detail:
    "Capstone Ecommerce is a full‑stack MERN application built to simulate a modern online shopping experience. It features user authentication, product browsing, cart management, and secure checkout workflows. Built with React, Node.js, Express, and MongoDB, it demonstrates real‑world architecture, responsive design, and API integration.",
  tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Material UI", "Redux Toolkit", "Vite"],
},
  {
    img: drumMachine,
    description: "Drum Machine",
    link: "https://drum-machine-five-steel.vercel.app/",
    github:"https://github.com/JKBrooksDev/drum-machine",
    detail:"An interactive drum machine built with React, featuring keyboard controls, dynamic sound playback, and responsive UI components. Demonstrates event handling, audio integration, and clean component structure.",
    tags: ["React", "JavaScript", "Audio API"],
  },
  {
    img: clockImg,
    description: "25 + 5 Clock",
    link: "https://25-5-clock-sage-delta.vercel.app/",
     github:"https://github.com/JKBrooksDev/25-5-clock",
    detail:"A Pomodoro‑style productivity timer that allows users to manage work and break intervals. Built with React using precise timer logic, state management, and clean UI updates.",
    tags: ["React", "JavaScript", "Timers"],
  },
  {
    img: calculatorImg,
    description: "Calculator",
    link: "https://javascript-calculator-two-gray.vercel.app/",
    github:"https://github.com/JKBrooksDev/javascript-calculator",
    detail:"A fully functional calculator built with React, supporting chained operations, clear/reset logic, and responsive button interactions. Showcases component composition and controlled state updates.",
    tags: ["React", "JavaScript", "Math Logic"],
  },
  {
    img: markdownImg,
    description: "Markdown Previewer",
    link: "https://markdown-previewer-xi-three.vercel.app/",
    github:"https://github.com/JKBrooksDev/markdown-previewer",
    detail:"A real‑time Markdown editor that converts user input into formatted output. Demonstrates parsing, live preview rendering, and a clean split‑pane interface using React.",
    tags: ["React", "Markdown", "Parsing"],
  },
  {
    img: quoteImg,
    description: "Random Quote Generator",
    link: "https://random-quote-machine-two-lilac.vercel.app/",
    github:"https://github.com/JKBrooksDev/random-quote-machine",
    detail:"A simple React application that fetches and displays random quotes with dynamic color transitions. Highlights API usage, state management, and smooth UI animations.",
    tags: ["React", "APIs", "JavaScript"],
  },
];

export const photodata = [
  {
    img: photo1,
    description: "Receiving my graduation certificate from the Mayor of Claiborne County.",
    link: photo1,
  },
  {
    img: photo2,
    description: "My instructor, Mr. Bull, and I during the Persevere program.",
    link: photo2,
  },
  {
    img: gradAmyDad,
    description: "Graduation day with Amy and my dad — a moment that represents how far I’ve come.",
    link: gradAmyDad,
  },
  {
    img: graduation,
    description: "Celebrating my graduation and the completion of my Full Stack Web Development program.",
    link: graduation,
  },
];


export const contactConfig = {
  YOUR_EMAIL: "jasonbrooks1127@gmail.com",
  YOUR_FONE: "(865) 352-3318",
  description: "Looking forward to hearing from you!",
};

export const aboutProfile = {
  img: profileImg,
};

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Responsive Design",
  "API Integration",
  "Project Management",
];

export const timeline = [
  {
    year: "2023-2025",
    title: "Full Stack Web Development Certification",
    place: "Persevere Coding Bootcamp",
  },
  {
    year: "2025",
    title: "Google Project Management Certificate",
    place: "Coursera",
  },
  {
    year: "2025",
    title: "Microsoft 365 Fundamentals Certificate",
    place: "Coursera",
  },
  {
    year: "2020–2022",
    title: "Construction Worker",
    place: "Chris Daniels Construction",
  },
  {
    year: "2018–2020",
    title: "Production Associate",
    place: "Giles",
  },
  {
    year: "2007",
    title: "High School Diploma",
    place: "Thomas Walker High School",
  },
];
