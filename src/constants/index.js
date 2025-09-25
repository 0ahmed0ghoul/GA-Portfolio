import { api, clients, compo, experience, facebook, git, github, instagram, linkedin, responsive,techs,ui,projects_img } from "../assets/icons";
import {samir, rayane, guelma, sonatrach, conference, LANmonitoring, algc, classroom, nike,launch, face, xora, ai, anon, edge_ai, foodie, grilli, orish, portfolio, purple_saas, techx, virtaulIr } from "../assets/images";



export const all_projects = [
  {
    imgURL: classroom,
    title: 'Classroom Management',
    desc: 'A web application for managing classrooms, including features for scheduling, attendance tracking, and resource allocation.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.classroom-management.com',
    githubURL: ''
  },
  {
    imgURL: LANmonitoring,
    title: 'LAN Monitoring System',
    desc: 'A system designed to monitor and manage local area networks, providing real-time insights into network performance and security.',
    techs: 'HTML, CSS, React, Express, Python',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: algc,
    title: 'ALG Courses',
    desc: 'A platform offering a variety of courses in algorithms and data structures, complete with interactive lessons and coding challenges.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: nike,
    title: 'Nike Landing Page',
    desc: 'A visually appealing landing page for Nike, showcasing their latest products and promotions with a focus on user experience.',
    techs: 'HTML, CSS, JavaScript, Tailwind',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: conference,
    title: 'Conference Paper Management System',
    desc: 'A web-based system for managing conference paper submissions, reviews, and scheduling, streamlining the entire process for organizers and participants.',
    techs: 'Laravel, HTML, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: face,
    title: 'Face Recognition App',
    desc: 'A desktop application that utilizes facial recognition technology for secure access and user authentication.',
    techs: 'Python, PyQt5, OpenCV',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: xora,
    title: 'Xora',
    desc: 'A cutting-edge platform that leverages AI to provide personalized recommendations and insights across various domains.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''

  },
  {
    imgURL: ai,
    title: 'AI Project',
    desc: 'An innovative project that explores the applications of artificial intelligence in solving real-world problems.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: anon,
    title: 'Anon',
    desc: 'A privacy-focused application that enables anonymous communication and data sharing while ensuring user security.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: edge_ai,
    title: 'Edge AI',
    desc: 'A project that implements AI algorithms on edge devices, allowing for real-time data processing and decision-making without relying on cloud connectivity.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: foodie,
    title: 'Foodie',
    desc: 'A mobile app that connects food enthusiasts with local restaurants, offering reviews, recommendations, and exclusive deals.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: grilli,
    title: 'Grilli',
    desc: 'A social platform for grilling enthusiasts to share recipes, tips, and experiences, fostering a community of barbecue lovers.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: orish,
    title: 'Orish',
    desc: 'A cultural heritage app that celebrates and preserves traditional practices, stories, and artifacts from around the world.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: portfolio,
    title: 'Portfolio Website',
    desc: 'A personal portfolio website showcasing projects, skills, and experiences, designed to attract potential employers and collaborators.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: purple_saas,
    title: 'Purple SaaS',
    desc: 'A software-as-a-service platform that offers a suite of tools for businesses to manage operations, enhance productivity, and drive growth.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: techx,
    title: 'TechX',
    desc: 'A technology blog and resource hub that provides insights, tutorials, and news on the latest trends in the tech industry.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: virtaulIr,
    title: 'Virtual IR',
    desc: 'A virtual reality application that simulates immersive environments for training, education, and entertainment purposes.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  },
  {
    imgURL: launch,
    title: 'Project Launch',
    desc: 'A comprehensive project management tool that facilitates planning, execution, and tracking of projects from inception to completion.',
    techs: 'HTML, CSS, React, Express, MySQL',
    demoURL: 'https://www.lan-monitoring.com',
    githubURL: ''
  }
]

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
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: LANmonitoring,
    link: 'https://github.com/0ahmed0ghoul/LAN-Monitoring-System',
    techs: "HTML CSS React Express Python",
    nameKey: "lan_monitoring",
    descKey: "lan_monitoring_desc",
    Date: "May 2024",
    category: "category_internship",
    status: "status_completed", 
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/LAN-Monitoring-System",
  },
  {
    imgURL: algc,
    link: 'https://github.com/0ahmed0ghoul/ALGCourses',
    techs: "HTML CSS React Express MySQL",
    descKey: "alg_courses_desc",
    nameKey: "alg_courses",
    Date: "Jan 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/ALGCourses",
  },
  {
    imgURL: nike,
    nameKey: "nike_landing",
    techs: "HTML CSS JavaScript Tailwind",
    link: "https://github.com/0ahmed0ghoul/Nike",
    descKey: "nike_landing_desc",
    Date: "Aug 2024",
    category: "category_ui",
    status: "status_completed",
    role: "Frontend Developer",
    github: "https://github.com/0ahmed0ghoul/Nike",
  },
  {
    imgURL: conference,
    nameKey: "conference_system",
    techs: "Laravel HTML MySQL",
    link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
    descKey: "conference_system_desc",
    Date: "Jun 2024",
    category: "category_web",
    status: "status_completed",
    role: "Backend Developer",
    github: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
  },
  {
    imgURL: face,
    nameKey: "face_recognition",
    techs: "Python PyQt5 OpenCV",
    link: "https://github.com/0ahmed0ghoul/face-recognation",
    descKey: "face_recognition_desc",
    Date: "Apr 2024",
    category: "category_desktop",
    status: "status_completed",
    role: "Desktop Developer",
    github: "https://github.com/0ahmed0ghoul/face-recognation",
  },
  {
    imgURL: xora,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: ai,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: anon,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: edge_ai,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: foodie,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: grilli,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: orish,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: portfolio,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: purple_saas,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: techx,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: virtaulIr,
    link: 'https://github.com/0ahmed0ghoul/Classroom-management',
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  }
];

export const statistics = [

  {
    value: 15,
    label: "projects completed",
    icon: projects_img,
  },
  {
    value: 12,
    label: "technologies mastered",
    icon: techs,
  },
  {
    value: 8,
    label: "happy clients",
    icon: clients,
  },
];

export const services = [
  {
      imgURL: responsive,
      labelKey: "responsive_design",
      subtextKey: "responsive_design_desc",
      techsKey: "responsive_design_techs"
  },
  {
      imgURL: compo,
      labelKey: "react_development",
      subtextKey: "react_development_desc",
      techsKey: "react_development_techs"
  },
  {
      imgURL: ui,
      labelKey: "ui_ux_implementation",
      subtextKey: "ui_ux_implementation_desc",
      techsKey: "ui_ux_implementation_techs"
  },
  {
      imgURL: git,
      labelKey: "version_control",
      subtextKey: "version_control_desc",
      techsKey: "version_control_techs"
  },
  {
      imgURL: api,
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
  'organized',
  'Team_collaboration' ,
  'Time_management' ,
  'Agile_scrum_familiarity',
  'Communication_with_clients',
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

  