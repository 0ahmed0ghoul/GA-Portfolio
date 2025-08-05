import { facebook, github, instagram, linkedin, shieldTick, support, truckFast } from "../assets/icons";
import {samir, rayane, guelma, sonatrach, conference, LANmonitoring, algc, classroom, nike, face } from "../assets/images";

export const navLinks = [
    { href: "#aboutme", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#education&experience", label: "Education & Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#cv", label: "CV" },
    { href: "#contactme", label: "Contact Me" },
];

export const projects = [
    {
        imgURL: classroom,
        link: 'https://github.com/0ahmed0ghoul/Classroom-management',
        name: "Classroom Managment System",
        desc:"This web application is designed for managing classroom data, focusing on administrative control, student and teacher attendance tracking, and attendance rate calculation. It allows educational institutions to efficiently monitor and update classroom-related information via a user-friendly and responsive interface.",
        techs: "html css react express mysql",
        Date: "2025-02-24",
    },
    {
        imgURL: LANmonitoring,
        link: 'https://github.com/0ahmed0ghoul/LAN-Monitoring-System',
        techs: "html css react express python",
        name: "LAN monitoring system",
        desc:'This web application is a real-time LAN monitoring and device inventory system, designed and implemented during an internship at DCRD – SONATRACH. It provides IT administrators with a centralized dashboard to monitor system and software configurations of devices connected within a Local Area Network (LAN).',
        Date: "2025-05-31",
    },
    {
        imgURL: algc,
        link: 'https://github.com/0ahmed0ghoul/ALGCourses',
        techs: "html css react express mysql",
        desc:"ALGCourses is an academic platform that connects teachers and students. It empowers instructors with course creation tools while giving learners an easy way to discover and join classes.",
        name: "courses and quizzes management",
        Date: "2025-01-24",
    },
    {
        imgURL: nike,
        name: "Nike Landing Page",
        techs: "html css js tailwindcss",
        link: "https://github.com/0ahmed0ghoul/Nike",
        desc:"This project is a fully responsive Nike landing page designed to demonstrate advanced Tailwind CSS techniques while delivering a sleek, modern e-commerce experience. Built with reusable components and optimized for performance, this page highlights Tailwind’s utility-first approach for rapid, scalable development.",
        Date: "2025-08-01",
    },
    {
        imgURL: conference,
        name: "Conference Management System",
        techs: "laravel html mysql",
        link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
        desc:'This web application is designed to automate and simplify the entire lifecycle of conference paper management—from submission to final decision. Built with Laravel, it provides secure, role-based dashboards for authors, reviewers, and chairs, ensuring a seamless workflow for academic conferences.',
        Date: "2025-06-13",
    },
    {
        imgURL: face,
        name: "Face recognation",
        techs: "python pyqt5 opencv",
        link: "https://github.com/0ahmed0ghoul/face-recognation",
        desc:"FaceTrack is a Python-based desktop application built with PyQt5 that simplifies workforce management using AI-powered face recognition. Designed for small businesses and security needs, it offers an offline, lightweight solution to track employee attendance without complex setups.",
        Date: "2025-04-16",
    },
];

export const statistics = [
    { value: '+2 Years', label: 'of Experience' },
    { value: '30+', label: 'Projects' },
    { value: '9+', label: 'Techs' },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Responsive Web Design & Development",
        subtext: "Build fully responsive websites that look great on desktop, tablet, and mobile.",
        techs: ['HTML', 'CSS',' Tailwind CSS', 'Flexbox', 'Grid',' Media Queries']
    },
    {
        imgURL: shieldTick,
        label: "Modern Front-End App Development with React",
        subtext: "Develop scalable and maintainable front-end applications using component-based architecture.",
        techs: ['React.js', 'Hooks', 'JSX', 'Component Reusability', 'State Management (useState, useEffect)']
    },
    {
        imgURL: support,
        label: "UI/UX Implementation from Design Files",
        subtext: "Convert design prototypes (Figma, XD, Sketch) into pixel-perfect, production-ready websites.",
        techs: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Figma-to-code skills']
    },
    {
      imgURL: support,
      label: "Version Control & Team Collaboration",
      subtext:"Use Git and GitHub to collaborate with teams, manage branches, resolve merge conflicts, and track changes.",
      techs: ['Git', 'GitHub', 'Git Flow', 'Pull Requests']
  },
  {
    imgURL: support,
    label: "REST API Integration & Dynamic Data Handling",
    subtext: "Connect front-end apps to back-end APIs to display real-time or user-generated content.",
    techs: ['JavaScript(Fetch,Axios)' ,'React(useEffect,useState)', 'JSON ','HTTP','methods']
},
];

export const languages =[
    {
        lang : "English",
        score : 60
    },
    {
        lang : "Deutsh",
        score : 20
    },
    {
        lang : "Portuguese",
        score : 10
    }
]
export const skills =['Self-Motivation','Problem-Solving','Analytical Thinking','Clear communicator','Creativity','User-centered','Lifelong learner','Organized']

export const reviews = [
    {
        imgURL: samir,
        personName: 'Dr. Hallaci Samir',
        personPrefession: 'Deputy Head of IT Department at univ Guelma',
        feedback: "I had the pleasure of teaching Ahmed Ghoul in the Data Structures and Algorithms course, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead.",
        linkedin: 'https://www.linkedin.com/in/hallacisamir/',
        logo:guelma
    },
    {
        imgURL: rayane,
        personName: 'Mr. Merchichi Rayane',
        personPrefession: 'Software research and development engineer at Sonatrach',
        feedback: "I had the pleasure of teaching Ahmed Ghoul in the Data Structures and Algorithms course, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead.",
        linkedin: 'https://www.linkedin.com/in/rayan-mohamed-merchichi-724426168/',
        logo:sonatrach

    }
];

export const footerLinks = [
    {
        title: "About Me",
        links: [
            { name: "03/08/2005 (20yo)"},
            { name: "from Tebessa ,Algeria"},
            { name: "Web Developer" },
            { name: "Freelancer" },
            { name: "Student at University of " },
            { name: "8 may 1945 Guelma, Algeria" },
        ],
    },
    {
        title: "Techs",
        links: [
            { name: "Html & Css & Js", link: "/" },
            { name: "React JS & Express JS", link: "/" },
            { name: "Bootstrap & Tailwind css", link: "/" },
            { name: "Python", link: "/" },
            { name: "MySQL", link: "/" },
            { name: "MongoDB", link: "/" },
            { name: "Git & Github", link: "/" },

        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "0ahmedghoul0@gmail.com", link: "mailto:0ahmedghoul0@gmail.com" },
            { name: "+213552055047", link: "tel:+213552055047" },
        ],
    },
];

export const socialMedia = [
    { src: linkedin, alt: "linkedIn" ,link: "https://www.linkedin.com/in/ghoul-ahmed-dev/" },
    { src: github, alt: "github ", link: "https://github.com/0ahmed0ghoul"},
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/ahmd.ghwl.918968/" },
    { src: instagram, alt: "instagram logo",link: "https://www.instagram.com/ga.js/" },
];


  export  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  export const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  export const infoVariants = {
    enter: { opacity: 0, y: 50 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    },
    exit: { opacity: 0 }
  };

  