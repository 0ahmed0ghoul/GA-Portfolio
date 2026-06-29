import {
  api, clients, compo, facebook, git, github,massar,apex,alphax,
  instagram, linkedin, responsive, techs, ui, projects_img,client
} from "../assets/icons";
import {
  samir, rayane,
  tarfa,
  mourad,
  dahma} from "../assets/images/pictures";
import {
  LANmonitoring, face, classroom, algc, nike, conference, anon, portfolio,
  massarweb,
  askyourpdfweb,
  alphaxweb,
  apexweb
} from "../assets/images/projects";

import {guelma, sonatrach } from "../assets/images/logos";


// ---------------------------------------------------------------------------
// All Projects  (shown on /show/projects — title/desc written inline, no i18n)
// ---------------------------------------------------------------------------
export const all_projects = [
  {
    imgURL: askyourpdfweb,
    title: "RAG Document Analytics Platform",
    desc: "Enterprise document-search web app built during thesis internship at Algérie Télécom. Integrated semantic search via FAISS vector embeddings (~50 ms latency reduction) and automated unstructured-document chunking. RESTful APIs connect React frontend, Node.js backend, and Python retrieval service.",
    techs: "React, Node.js, Python, PostgreSQL, FAISS",
    demoURL: "",
    githubURL: "",
  },
  {
    imgURL: massarweb,
    title: "Massar — Recruitment MVP",
    desc: "Production PWA for job-posting management, candidate tracking, and admin dashboards. Implements JWT auth, Role-Based Access Control (RBAC), and REST APIs. Deployed via GitHub Actions CI/CD on Vercel.",
    techs: "React, Node.js, Supabase, PostgreSQL",
    demoURL: "https://massar-dz.vercel.app",
    githubURL: "",
  },
  {
    imgURL: alphaxweb,
    title: "AlphaX — Education PWA",
    desc: "Course-management platform with automated assessments and student-progress tracking. Delivered as a production PWA for an Algerian education client.",
    techs: "React, Node.js, Firebase",
    demoURL: "https://alphax-lms.vercel.app",
    githubURL: "",
  },
  {
    imgURL: apexweb,
    title: "Apex News",
    desc: "Real-time news PWA with dynamic content management and mobile-first delivery. Full project-lifecycle ownership from design to CI/CD deployment.",
    techs: "React, Node.js, MongoDB",
    demoURL: "https://apex-news-dz.vercel.app",
    githubURL: "",
  },
  {
    imgURL: LANmonitoring,
    title: "LAN Monitoring System",
    desc: "Real-time network-tracking platform monitoring 100+ devices across Sonatrach infrastructure. Reduced manual asset-discovery time by 40%. Live dashboards visualise packet activity, bandwidth utilisation, and device health.",
    techs: "Python, Node.js, React, Socket.io",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/LAN-Monitoring-System",
  },
  {
    imgURL: face,
    title: "Face Detection System",
    desc: "Desktop application with live-stream face detection achieving >90% accuracy. Offline, lightweight solution built with PyQt5 — no cloud dependency.",
    techs: "PyQt5, Python, OpenCV",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/face-recognation",
  },
  {
    imgURL: classroom,
    title: "Classroom Management System",
    desc: "Web application for administrative control, attendance tracking, and classroom-data management for educational institutions.",
    techs: "HTML, CSS, React, Express, MySQL",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: algc,
    title: "ALG Courses",
    desc: "Academic platform connecting teachers and students — course creation tools, interactive lessons, quizzes, and coding challenges.",
    techs: "HTML, CSS, React, Express, MySQL",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/ALGCourses",
  },
  {
    imgURL: nike,
    title: "Nike Landing Page",
    desc: "Fully responsive product landing page showcasing advanced Tailwind CSS techniques and a polished e-commerce experience.",
    techs: "HTML, CSS, JavaScript, Tailwind CSS",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/Nike",
  },
  {
    imgURL: conference,
    title: "Conference Paper Management System",
    desc: "Laravel web app automating the full lifecycle of academic conference paper management — submission, peer review, and final decision — with role-based dashboards for authors, reviewers, and chairs.",
    techs: "Laravel, HTML, MySQL",
    demoURL: "",
    githubURL: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
  },
  {
    imgURL: anon,
    title: "EcoDZ — Eco-Friendly Travel Platform",
    desc: "Web platform promoting sustainable travel in Algeria — eco-friendly accommodations, green activity listings, and responsible-tourism guides.",
    techs: "React, Node.js, MongoDB",
    demoURL: "",
    githubURL: "",
  },
  {
    imgURL: portfolio,
    title: "Portfolio Website",
    desc: "This portfolio — built with React, Tailwind CSS, Framer Motion, and react-i18next. Terminal/typewriter design system; amber-on-ink colour palette.",
    techs: "React, Tailwind CSS, Framer Motion",
    demoURL: "https://ga-portfolio-bice.vercel.app",
    githubURL: "",
  },
];


export const navLinks = [
  { href: "#aboutme",             label: "About Me",               key: "about_me" },
  { href: "#projects",            label: "Projects",               key: "projects" },
  { href: "#services",            label: "Services",               key: "services" },
  { href: "#education_experience",label: "Education & Experience", key: "education_experience" },
  { href: "#certifications", label: "Certifications", key: "certifications" },
  { href: "#testimonials",        label: "Testimonials",           key: "testimonials" },
  { href: "#cv",                  label: "CV",                     key: "cv" },
  { href: "#contact_me",          label: "Contact Me",             key: "contact_me" },
];

export const projects = [
  {
    imgURL: askyourpdfweb,
    link: "https://github.com/0ahmed0ghoul",
    nameKey: "rag_document_analysis",
    descKey: "rag_document_analysis_desc",
    techs: "React Node.js Python PostgreSQL FAISS",
    Date: "Apr 2026",
    category: "category_internship",
    status: "status_completed",
    role: "Full-Stack Developer",
    github: "https://github.com/0ahmed0ghoul",
    demo: "https://askurpdf.vercel.app/"
  },
  {
    imgURL: massarweb,
    link: "https://massar-dz.vercel.app",
    nameKey: "massar",
    descKey: "massar_desc",
    techs: "React Node.js Supabase PostgreSQL",
    Date: "Jan 2025",
    category: "category_web",
    status: "status_in_progress",
    role: "Full-Stack Developer",
    demo: "https://massar-dz.vercel.app",
  },
  
  {
    imgURL: alphaxweb,
    link: "https://alphax-lms.vercel.app",
    nameKey: "alphax",
    descKey: "alphax_desc",
    techs: "React Node.js Firebase",
    Date: "Mar 2025",
    category: "category_web",
    status: "status_completed",
    role: "Full-Stack Developer",
    demo: "https://alphax-lms.vercel.app",
  },
  {
    imgURL: apexweb,
    link: "https://apex-news-dz.vercel.app",
    nameKey: "apex_news",
    descKey: "apex_news_desc",
    techs: "React Node.js MongoDB",
    Date: "Jun 2025",
    category: "category_web",
    status: "status_completed",
    role: "Full-Stack Developer",
    demo: "https://apex-news-dz.vercel.app",
  },

  {
    imgURL: LANmonitoring,
    link: "https://github.com/0ahmed0ghoul/LAN-Monitoring-System",
    nameKey: "lan_monitoring",
    descKey: "lan_monitoring_desc",
    techs: "Python Node.js React Socket.io",
    Date: "May 2025",
    category: "category_internship",
    status: "status_completed",
    role: "Full-Stack Developer",
    github: "https://github.com/0ahmed0ghoul/LAN-Monitoring-System",
  },

  {
    imgURL: face,
    link: "https://github.com/0ahmed0ghoul/face-recognation",
    nameKey: "face_recognition",
    descKey: "face_recognition_desc",
    techs: "Python PyQt5 OpenCV",
    Date: "Apr 2024",
    category: "category_desktop",
    status: "status_completed",
    role: "Desktop Developer",
    github: "https://github.com/0ahmed0ghoul/face-recognation",
  },
  {
    imgURL: classroom,
    link: "https://github.com/0ahmed0ghoul/Classroom-management",
    nameKey: "classroom_management",
    descKey: "classroom_management_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Feb 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-Stack Developer",
    github: "https://github.com/0ahmed0ghoul/Classroom-management",
  },
  {
    imgURL: algc,
    link: "https://github.com/0ahmed0ghoul/ALGCourses",
    nameKey: "alg_courses",
    descKey: "alg_courses_desc",
    techs: "HTML CSS React Express MySQL",
    Date: "Jan 2024",
    category: "category_web",
    status: "status_completed",
    role: "Full-Stack Developer",
    github: "https://github.com/0ahmed0ghoul/ALGCourses",
  },
  {
    imgURL: nike,
    link: "https://github.com/0ahmed0ghoul/Nike",
    nameKey: "nike_landing",
    descKey: "nike_landing_desc",
    techs: "HTML CSS JavaScript Tailwind",
    Date: "Aug 2024",
    category: "category_ui",
    status: "status_completed",
    role: "Frontend Developer",
    github: "https://github.com/0ahmed0ghoul/Nike",
  },
  {
    imgURL: conference,
    link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
    nameKey: "conference_system",
    descKey: "conference_system_desc",
    techs: "Laravel HTML MySQL",
    Date: "Jun 2024",
    category: "category_web",
    status: "status_completed",
    role: "Backend Developer",
    github: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
  },
];

// ---------------------------------------------------------------------------
// About Me statistics
// ---------------------------------------------------------------------------
export const statistics = [
  { value: 15, label: "projects completed",    icon: projects_img },
  { value: 18, label: "technologies mastered", icon: techs },
  { value: 8,  label: "happy clients",         icon: clients },
];

// ---------------------------------------------------------------------------
// Services  (label / subtext keys map to i18n under services.*)
// ---------------------------------------------------------------------------
export const services = [
  {
    imgURL: responsive,
    labelKey: "responsive_design",
    subtextKey: "responsive_design_desc",
    techsKey: "responsive_design_techs",
  },
  {
    imgURL: compo,
    labelKey: "fullstack_development",
    subtextKey: "fullstack_development_desc",
    techsKey: "fullstack_development_techs",
  },
  {
    imgURL: ui,
    labelKey: "ui_ux_implementation",
    subtextKey: "ui_ux_implementation_desc",
    techsKey: "ui_ux_implementation_techs",
  },
  {
    imgURL: api,
    labelKey: "api_backend",
    subtextKey: "api_backend_desc",
    techsKey: "api_backend_techs",
  },
  {
    imgURL: git,
    labelKey: "devops_deployment",
    subtextKey: "devops_deployment_desc",
    techsKey: "devops_deployment_techs",
  },
];

// ---------------------------------------------------------------------------
// Languages  (progress bar values; labels come from i18n about.*)
// ---------------------------------------------------------------------------
export const languages = [
  { lang: "english", score: 70 },
  { lang: "french",  score: 28 },
  { lang: "german",  score: 15 },
];

// ---------------------------------------------------------------------------
// Soft skills
// ---------------------------------------------------------------------------
export const skills = [
  "self_motivation",
  "problem_solving",
  "analytical_thinking",
  "clear_communicator",
  "creativity",
  "user_centered",
  "lifelong_learner",
  "organized",
  "Team_collaboration",
  "Time_management",
  "Agile_scrum_familiarity",
  "Communication_with_clients",
];

// ---------------------------------------------------------------------------
// Testimonials / reviews
// ---------------------------------------------------------------------------
export const reviews = [
  {
    imgURL: samir,
    nameKey: "samir_name",
    status : "Internship Supervisor",
    professionKey: "samir_profession",
    feedbackKey: "samir_feedback",
    linkedin: "https://www.linkedin.com/in/hallacisamir/",
    logo: guelma,
  },
  {
    imgURL: rayane,
    status : "Internship Supervisor",
    nameKey: "rayane_name",
    professionKey: "rayane_profession",
    feedbackKey: "rayane_feedback",
    linkedin: "https://www.linkedin.com/in/rayan-mohamed-merchichi-724426168/",
    logo: sonatrach,
  },
  {
    imgURL: client,
    nameKey: "youssef_name",
    status : "Client",
    professionKey: "youssef_profession",
    feedbackKey: "youssef_feedback",
    linkedin: "",
    logo: massar,
    website : "https://massar-dz.vercel.app/",
  },
  {
    imgURL: tarfa,
    status : "Client",
    nameKey: "amani_name",
    professionKey: "amani_profession",
    feedbackKey: "amani_feedback",
    linkedin: "https://www.linkedin.com/in/tarfa-amani-asya-/",
    logo: alphax,
    website : "https://aplhax-academy.vercel.app/",
  },
  {
    imgURL: dahma,
    nameKey: "abderahmane_name",
    status : "Client",
    professionKey: "abderahmane_profession",
    feedbackKey: "abderahmane_feedback",
    linkedin: "",
    logo: apex,
    website : "https://apex-news-sigma.vercel.app/",
  },
  {
    imgURL: mourad,
    status : "My Teacher",
    nameKey: "mourad_name",
    professionKey: "mourad_profession",
    feedbackKey: "mourad_feedback",
    linkedin: "https://www.linkedin.com/in/mourad-hadjeris-b6a98133/",
    logo: guelma,
  },
];

// ---------------------------------------------------------------------------
// Footer links
// ---------------------------------------------------------------------------
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
      { nameKey: "html_css_js",        link: "/" },
      { nameKey: "react_node",          link: "/" },
      { nameKey: "python_fastapi",      link: "/" },
      { nameKey: "supabase_firebase",   link: "/" },
      { nameKey: "postgresql_mongodb",  link: "/" },
      { nameKey: "docker_github_actions", link: "/" },
      { nameKey: "rag_faiss",           link: "/" },
    ],
  },
  {
    titleKey: "get_in_touch",
    links: [
      { nameKey: "email", link: "mailto:0ahmedghoul0@gmail.com" },
      { nameKey: "phone", link: "tel:+213563437394" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Social media
// ---------------------------------------------------------------------------
export const socialMedia = [
  { src: linkedin,  altKey: "linkedin",  link: "https://www.linkedin.com/in/ghoul-ahmed-dev/" },
  { src: github,    altKey: "github",    link: "https://github.com/0ahmed0ghoul" },
  { src: facebook,  altKey: "facebook",  link: "https://www.facebook.com/ahmd.ghwl.918968/" },
  { src: instagram, altKey: "instagram", link: "https://www.instagram.com/ga.js/" },
];

// ---------------------------------------------------------------------------
// Shared Framer Motion variants
// ---------------------------------------------------------------------------
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const itemVariants = {
  hidden:  { y: 20, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.5 } },
};

export const imageVariants = {
  enter:  (dir) => ({ x: dir > 0 ?  1000 : -1000, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit:   (dir) => ({ x: dir < 0 ?  1000 : -1000, opacity: 0, transition: { duration: 0.3 } }),
};

export const infoVariants = {
  enter:  { opacity: 0, y: 50 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  exit:   { opacity: 0 },
};