import { facebook, github, instagram, linkedin, shieldTick, support, truckFast } from "../assets/icons";
import {samir, rayane, guelma, sonatrach, conference, LANmonitoring, algc, classroom, nike, face } from "../assets/images";

export const navLinks = [
  { href: "aboutme", label: "About Me", key: "about_me" },
  { href: "projects", label: "Projects", key: "projects" },
  { href: "services", label: "Services", key: "services" },
  { href: "education_experience", label: "Education and Experience", key: "education_experience" },
  { href: "testimonials", label: "Testimonials", key: "testimonials" },
  { href: "cv", label: "CV", key: "cv" },
  { href: "contact_me", label: "Contact Me", key: "contact_me" },
];

export const projects = [
  {
      imgURL: classroom,
      link: 'https://github.com/0ahmed0ghoul/Classroom-management',
      nameKey: "classroom_management",
      descKey: "classroom_management_desc",
      techs: "html css react express mysql",
      Date: "2025-02-24",
  },
  {
      imgURL: LANmonitoring,
      link: 'https://github.com/0ahmed0ghoul/LAN-Monitoring-System',
      techs: "html css react express python",
      nameKey: "lan_monitoring",
      descKey: "lan_monitoring_desc",
      Date: "2025-05-31",
  },
  {
      imgURL: algc,
      link: 'https://github.com/0ahmed0ghoul/ALGCourses',
      techs: "html css react express mysql",
      descKey: "alg_courses_desc",
      nameKey: "alg_courses",
      Date: "2025-01-24",
  },
  {
      imgURL: nike,
      nameKey: "nike_landing",
      techs: "html css js tailwindcss",
      link: "https://github.com/0ahmed0ghoul/Nike",
      descKey: "nike_landing_desc",
      Date: "2025-08-01",
  },
  {
      imgURL: conference,
      nameKey: "conference_system",
      techs: "laravel html mysql",
      link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
      descKey: "conference_system_desc",
      Date: "2025-06-13",
  },
  {
      imgURL: face,
      nameKey: "face_recognition",
      techs: "python pyqt5 opencv",
      link: "https://github.com/0ahmed0ghoul/face-recognation",
      descKey: "face_recognition_desc",
      Date: "2025-04-16",
  },
];

// export const projects = [
//     {
//         imgURL: classroom,
//         link: 'https://github.com/0ahmed0ghoul/Classroom-management',
//         name: "Classroom Managment System",
//         desc:"This web application is designed for managing classroom data, focusing on administrative control, student and teacher attendance tracking, and attendance rate calculation. It allows educational institutions to efficiently monitor and update classroom-related information via a user-friendly and responsive interface.",
//         techs: "html css react express mysql",
//         Date: "2025-02-24",
//     },
//     {
//         imgURL: LANmonitoring,
//         link: 'https://github.com/0ahmed0ghoul/LAN-Monitoring-System',
//         techs: "html css react express python",
//         name: "LAN monitoring system",
//         desc:'This web application is a real-time LAN monitoring and device inventory system, designed and implemented during an internship at DCRD – SONATRACH. It provides IT administrators with a centralized dashboard to monitor system and software configurations of devices connected within a Local Area Network (LAN).',
//         Date: "2025-05-31",
//     },
//     {
//         imgURL: algc,
//         link: 'https://github.com/0ahmed0ghoul/ALGCourses',
//         techs: "html css react express mysql",
//         desc:"ALGCourses is an academic platform that connects teachers and students. It empowers instructors with course creation tools while giving learners an easy way to discover and join classes.",
//         name: "courses and quizzes management",
//         Date: "2025-01-24",
//     },
//     {
//         imgURL: nike,
//         name: "Nike Landing Page",
//         techs: "html css js tailwindcss",
//         link: "https://github.com/0ahmed0ghoul/Nike",
//         desc:"This project is a fully responsive Nike landing page designed to demonstrate advanced Tailwind CSS techniques while delivering a sleek, modern e-commerce experience. Built with reusable components and optimized for performance, this page highlights Tailwind’s utility-first approach for rapid, scalable development.",
//         Date: "2025-08-01",
//     },
//     {
//         imgURL: conference,
//         name: "Conference Management System",
//         techs: "laravel html mysql",
//         link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
//         desc:'This web application is designed to automate and simplify the entire lifecycle of conference paper management—from submission to final decision. Built with Laravel, it provides secure, role-based dashboards for authors, reviewers, and chairs, ensuring a seamless workflow for academic conferences.',
//         Date: "2025-06-13",
//     },
//     {
//         imgURL: face,
//         name: "Face recognation",
//         techs: "python pyqt5 opencv",
//         link: "https://github.com/0ahmed0ghoul/face-recognation",
//         desc:"FaceTrack is a Python-based desktop application built with PyQt5 that simplifies workforce management using AI-powered face recognition. Designed for small businesses and security needs, it offers an offline, lightweight solution to track employee attendance without complex setups.",
//         Date: "2025-04-16",
//     },
// ];

export const statistics = [
    { value: '+2 Years', label: 'of Experience' },
    { value: '30+', label: 'Projects' },
    { value: '9+', label: 'Techs' },
];

export const services = [
  {
      imgURL: truckFast,
      labelKey: "responsive_design",
      subtextKey: "responsive_design_desc",
      techsKey: "responsive_design_techs"
  },
  {
      imgURL: shieldTick,
      labelKey: "react_development",
      subtextKey: "react_development_desc",
      techsKey: "react_development_techs"
  },
  {
      imgURL: support,
      labelKey: "ui_ux_implementation",
      subtextKey: "ui_ux_implementation_desc",
      techsKey: "ui_ux_implementation_techs"
  },
  {
      imgURL: support,
      labelKey: "version_control",
      subtextKey: "version_control_desc",
      techsKey: "version_control_techs"
  },
  {
      imgURL: support,
      labelKey: "api_integration",
      subtextKey: "api_integration_desc",
      techsKey: "api_integration_techs"
  }
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
export const skills = [
  'self_motivation',
  'problem_solving',
  'analytical_thinking',
  'clear_communicator',
  'creativity',
  'user_centered',
  'lifelong_learner',
  'organized'
];
export const reviews = [
  {
      imgURL: samir,
      nameKey: "samir_name",
      professionKey: "samir_profession",
      feedbackKey: "samir_feedback",
      linkedin: 'https://www.linkedin.com/in/hallacisamir/',
      logo: guelma
  },
  {
      imgURL: rayane,
      nameKey: "rayane_name",
      professionKey: "rayane_profession",
      feedbackKey: "rayane_feedback",
      linkedin: 'https://www.linkedin.com/in/rayan-mohamed-merchichi-724426168/',
      logo: sonatrach
  }
];

export const footerLinks = [
  {
      titleKey: "about_me",
      links: [
          { nameKey: "birth_date" },
          { nameKey: "location" },
          { nameKey: "profession" },
          { nameKey: "freelancer" },
          { nameKey: "student_at" },
          { nameKey: "university" },
      ],
  },
  {
      titleKey: "techs",
      links: [
          { nameKey: "html_css_js", link: "/" },
          { nameKey: "react_express", link: "/" },
          { nameKey: "bootstrap_tailwind", link: "/" },
          { nameKey: "python", link: "/" },
          { nameKey: "mysql", link: "/" },
          { nameKey: "mongodb", link: "/" },
          { nameKey: "git_github", link: "/" },
      ],
  },
  {
      titleKey: "get_in_touch",
      links: [
          { nameKey: "email", link: "mailto:0ahmedghoul0@gmail.com" },
          { nameKey: "phone", link: "tel:+213552055047" },
      ],
  },
];

export const socialMedia = [
  { src: linkedin, altKey: "linkedin", link: "https://www.linkedin.com/in/ghoul-ahmed-dev/" },
  { src: github, altKey: "github", link: "https://github.com/0ahmed0ghoul"},
  { src: facebook, altKey: "facebook", link: "https://www.facebook.com/ahmd.ghwl.918968/" },
  { src: instagram, altKey: "instagram", link: "https://www.instagram.com/ga.js/" },
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

  