// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // -----------------------------------------------------------------------
      // About Me section
      // -----------------------------------------------------------------------

      about: {
        my_picture_alt: "Ahmed Ghoul",
        greeting: "Hi, I'm",
        my_name: "Ahmed",
        last_name: "Ghoul",
        profession1: "Full-Stack",
        profession2: "Developer",
        from: "Based in",
        location: "Setif, Algeria",
        description:
          "Full-Stack Developer specializing in modern web applications, backend systems, and AI-powered solutions. Built 4+ production PWAs and developed an AI-powered RAG document analysis platform at Algérie Télécom, alongside a real-time network monitoring system at Sonatrach. Graduated 1st in my Computer Science cohort with a GPA of 15.63/20. Currently pursuing a Master's degree in Distributed Systems and Networks.",
        language_proficiency: "Language Proficiency",
        english: "English",
        english_level: "B2 · IELTS 6.5",
        french: "French",
        french_level: "A2",
        german: "German",
        german_level: "A1 · learning",
        welcome_note: "Open to international opportunities",
        available: "Available for freelance & full-time work",
        years_experience: "2+",
        see_projects: "Explore My Projects",
      },

      // -----------------------------------------------------------------------
      // Stats (used in About Me stat cards)
      // -----------------------------------------------------------------------
      stats: {
        years_of_experience: "Years of Experience",
        projects_completed: "Projects Completed",
        technologies_mastered: "Techs Mastered",
        happy_clients: "Happy Clients",
      },

      // -----------------------------------------------------------------------
      // Navigation
      // -----------------------------------------------------------------------
      nav: {
        about_me: "About Me",
        projects: "Projects",
        services: "Services",
        education_experience: "Education & Experience",
        testimonials: "Testimonials",
        cv: "CV",
        contact_me: "Contact Me",
        menu: "Menu",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode",
        logo_alt: "GA Portfolio",
        footer: "GA | Portfolio",
        certifications: "Certifications",
      },

      // -----------------------------------------------------------------------
      // Projects section
      // -----------------------------------------------------------------------
      projects: {
        // Section UI
        projects: "My Projects",
        see_more: "See More",
        title_part1: "Few of my",
        title_part2: "Projects",
        subtitle:
          "A selection of production, internship, and personal projects spanning full-stack web apps, AI pipelines, and desktop tools.",
        view_project_button: "View Project",
        project_showcase_alt: "Project screenshot",
        project_thumbnail_alt: "{{name}}",
        all_projects: "All Projects",
        view_code: "Source Code",
        live_demo: "Live Demo",
        tech_label: "Stack",
        role_label: "Role",
        date_label: "Date",

        // Categories
        category_web: "Web Application",
        category_desktop: "Desktop Application",
        category_ui: "UI / Design",
        category_internship: "Internship Project",
        portfolio: "Portfolio",

        // Status
        status_completed: "Completed",
        status_in_progress: "In Progress",

        // Roles
        role_fullstack: "Full-Stack Developer",
        role_frontend: "Frontend Developer",
        role_backend: "Backend Developer",
        role_desktop: "Desktop Developer",

        // ── Featured & all_projects entries ──────────────────────────────────

        rag_document_analysis: "RAG Document Analytics Platform",
        rag_document_analysis_desc:
          "Enterprise document-search web app built during my thesis internship at Algérie Télécom. Integrated semantic search with FAISS vector embeddings, reducing query latency by ~50 ms. Automated unstructured-document chunking and vector embedding generation, eliminating manual indexing. RESTful APIs connect the React frontend, Node.js backend, and Python retrieval service for context-aware search across internal knowledge bases.",


          apex_news: "Max News DZ",
          apex_news_desc:
            "A modern, mobile-first news platform delivering up-to-date news and articles through a dynamic content management system. Built and managed the entire project lifecycle, from architecture and full-stack development to CI/CD and production deployment. Uses MongoDB Atlas to power content storage and management.",
          
        lan_monitoring: "LAN Monitoring System",
        lan_monitoring_desc:
          "Real-time network-tracking platform built during my internship at SONATRACH – DCRD. Monitors 100+ network devices, reducing manual asset-discovery time by 40%. Live dashboards visualise packet activity, bandwidth utilisation, and device health metrics, enabling proactive anomaly detection before outages. Delivered through structured QA testing and staged corporate deployment.",

        massar: "Massar — Recruitment Platform",
        massar_desc:
          "Production PWA for the Algerian job market — job-posting management, candidate tracking pipelines, and admin dashboards. Implemented JWT authentication, Role-Based Access Control (RBAC), and REST APIs. Full project-lifecycle ownership: from requirements to CI/CD deployment via GitHub Actions and Vercel.",

        face_recognition: "Face Detection System",
        face_recognition_desc:
          "Desktop application with live-stream face detection achieving >90% accuracy. Designed as an offline, lightweight workforce-management tool for small businesses — no cloud dependency, no complex setup. Built with PyQt5 for a clean native experience.",

        alphax: "AlphaX — Education Platform",
        alphax_desc:
          "Course-management PWA with automated assessment and student-progress tracking. Built for an Algerian education client, covering the full stack from data modelling to responsive UI. Firebase handles real-time sync and authentication.",


          max_news: "Max News",
          max_news_desc:
            "A modern news platform providing readers with up-to-date news and articles through a responsive, mobile-first experience. Developed a dynamic content management system and handled the complete project lifecycle, including architecture, full-stack development, CI/CD, and production deployment. Supabase powers the platform's database and content management.",
          
        classroom_management: "Classroom Management System",
        classroom_management_desc:
          "Web application for administrative control, student and teacher attendance tracking, and attendance-rate calculation. Gives educational institutions a responsive interface to monitor and update classroom-related information efficiently.",

        alg_courses: "ALG Courses — Learning Platform",
        alg_courses_desc:
          "Academic platform connecting teachers and students. Instructors create and publish courses; learners discover, enrol, and complete interactive lessons and coding challenges.",

        conference_system: "Conference Paper Management System",
        conference_system_desc:
          "Laravel web app automating the full lifecycle of academic conference paper management — submission, peer review, and editorial decision. Secure role-based dashboards for authors, reviewers, and programme chairs ensure a seamless workflow.",

        eco_dz: "EcoDZ — Eco-Friendly Travel",
        eco_dz_desc:
          "Web platform promoting sustainable travel in Algeria — eco-friendly accommodations, green activity listings, and responsible-tourism guides to help travellers make environmentally conscious choices.",
      },

      // -----------------------------------------------------------------------
      // Services section
      // -----------------------------------------------------------------------


      services: {
        subtitle: "What I Offer",
        title_part1: "Digital",
        title_part2: "Solutions",
        title_part3: "That Deliver",
        description:
          "I help startups, businesses, and agencies turn ideas into reliable digital products — from full-stack web applications and AI-powered solutions to secure backend systems and production deployment.",
      
        responsive_design: "Business Websites & Web Applications",
        responsive_design_desc:
          "Build modern, responsive websites and progressive web applications that help businesses establish their online presence, engage users, and streamline their operations.",
        responsive_design_techs: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PWA",
        ],
      
        fullstack_development: "Custom Full-Stack Development",
        fullstack_development_desc:
          "Turn your business requirements into production-ready applications. From user authentication and role-based access control to admin dashboards, recruitment platforms, and custom business systems.",
        fullstack_development_techs: [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "Supabase",
          "PostgreSQL",
        ],
      
        ui_ux_implementation: "Admin Dashboards & UI Development",
        ui_ux_implementation_desc:
          "Transform your ideas or design files into polished, interactive interfaces. Build intuitive admin panels, analytics dashboards, management systems, and data-driven user experiences.",
        ui_ux_implementation_techs: [
          "React.js",
          "Tailwind CSS",
          "TypeScript",
          "Framer Motion",
          "Charting Libraries",
          "Figma-to-Code",
        ],
      
        api_backend: "AI Integration & Backend Development",
        api_backend_desc:
          "Build secure APIs and intelligent AI-powered features. Integrate LLMs, document processing, semantic search, and RAG pipelines to turn business data into useful, searchable knowledge.",
        api_backend_techs: [
          "Node.js",
          "Python",
          "FastAPI",
          "REST APIs",
          "RAG",
          "FAISS",
          "LLM Integration",
          "Vector Databases",
        ],
      
        devops_deployment: "Deployment & Technical Maintenance",
        devops_deployment_desc:
          "Take applications from development to production. Configure hosting, automate deployment workflows, containerize services, and maintain reliable application releases.",
        devops_deployment_techs: [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Vercel",
          "Docker",
          "CI/CD",
        ],
      },
      
      // -----------------------------------------------------------------------
      // Education & Experience section
      // -----------------------------------------------------------------------

      education_experience: {
        subtitle: "My Journey",
        title: "Education & Experience",
        education: "Education",
        experience: "Professional Experience",
        achievements: "Achievements",
      
        // Education entries
        masters_degree: "M.Sc. Distributed Systems & Networks",
        masters_details:
          "Currently pursuing a Master's degree focused on distributed computing, computer networks, and advanced software systems. Expanding expertise in scalable architectures, network technologies, and modern computing infrastructure.",
      
        bachelors_degree: "B.Sc. Computer Science — University of Guelma",
        bachelors_details:
          "Graduated 1st in my cohort with a GPA of 15.63/20 (Très Bien). Awarded academic excellence certificates for outstanding performance. Built a strong foundation in algorithms, software engineering, databases, networking, and computer systems.",
      
        undergraduate_studies:
          "Computer Science Programme — University of 8 May 1945, Guelma",
        undergraduate_details:
          "Three-year undergraduate programme in Computer Science. Developed strong foundations in programming, data structures, algorithms, databases, networking, and software development through academic coursework and practical projects.",
      
        // Experience entries
        sonatrach: "Software Engineering Intern — Sonatrach",
        sonatrach_description:
          "Developed a real-time LAN monitoring system for Sonatrach's Technology & Development division (DCRD). Built interactive dashboards to monitor network devices, packet activity, bandwidth utilisation, and device health. Contributed to improving network visibility and simplifying infrastructure monitoring through a centralised solution.",
      
        algerie_telecom: "Software Engineering Intern — Algérie Télécom",
        algerie_telecom_description:
          "Developed an AI-powered document analysis platform using Retrieval-Augmented Generation (RAG). Implemented document processing, text chunking, embeddings, and FAISS vector indexing to enable semantic search across internal knowledge bases. Integrated a React frontend, Node.js backend, and Python retrieval service through REST APIs.",
      
        agriculture_institution: "Independent Development & Freelance",
        agriculture_description:
          "Started building real-world software projects through independent development and early freelance work. Created web applications, educational platforms, management systems, and desktop applications using React, Node.js, Python, and SQL. Progressively expanded into delivering production-ready solutions for clients.",
      
        // Achievement entries
        hakathon: "University Hackathon — Computer Science Club",
        hakathon_desc:
          "Collaborated with fellow developers in a university hackathon, working under time constraints to develop and present a practical solution. Strengthened problem-solving, teamwork, and rapid prototyping skills.",
      
        leetcode: "LeetCode — Algorithmic Problem Solving",
        leetcode_desc:
          "Practiced algorithmic problem solving through coding challenges, strengthening knowledge of data structures, algorithms, dynamic programming, and time and space complexity.",
      
        flex_box_grid: "Responsive Design & CSS Layouts",
        flex_box_grid_desc:
          "Developed practical expertise in modern CSS layouts using Flexbox and Grid. Applied responsive design principles to build consistent, accessible interfaces across desktop and mobile devices.",
      },
      

      // -----------------------------------------------------------------------
      // Testimonials
      // -----------------------------------------------------------------------
      testimonials: {
        title_part1: "Testimonials from",
        title_part2: "People",
        title_part3: "I've",
        title_part4: "Learned",
        title_part5: "from and",
        title_part6: "Worked",
        title_part7: "under their supervision",
        subtitle:
          "Genuine feedback from professors and engineers who mentored me or supervised my work.",
        scroll_hint: "Scroll to read more",

        samir_name: "Dr. Hallaci Samir",
        samir_profession:
          "Director, AI House — University of Guelma | Deputy Head of IT Dept.",
        samir_feedback:
          "I had the pleasure of teaching Ahmed in Data Structures and Algorithms, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead.",

        amani_name: "Ms.Tarfa Amani Assia",
        amani_profession: "English Teacher & CEO — AlphaX",
        amani_feedback:
          "I had the pleasure of teaching Ahmed and later working with him as a client. He is dedicated, professional, and always delivers high-quality work. His commitment helped him achieve an IELTS band score of 6.5, and he did an excellent job developing my AlphaX English learning platform. I highly recommend him for any project or role that requires technical expertise, creativity, and a strong work ethic.",

        abderahmane_name: "Mr. Zerguine Abderahmane",
        abderahmane_profession: "Journalist & CEO — Apex News Dz",
        abderahmane_feedback:
          "From our very first conversation, I knew Ahmed was a skilled and professional developer. He was honest, transparent, and delivered a website that exceeded my expectations while offering excellent value for the quality of his work. His dedication, attention to detail, and genuine commitment to my project's success make him someone I highly recommend.",

        rayane_name: "Mr. Merchichi Rayane",
        rayane_profession:
          "Software Research & Development Engineer — Sonatrach",
        rayane_feedback:
          "During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",
      },

      // -----------------------------------------------------------------------
      // Skills (soft skills)
      // -----------------------------------------------------------------------
      skills: {
        self_motivation: "Self-Motivation",
        problem_solving: "Problem-Solving",
        analytical_thinking: "Analytical Thinking",
        clear_communicator: "Clear Communicator",
        creativity: "Creativity",
        user_centered: "User-Centered",
        lifelong_learner: "Lifelong Learner",
        organized: "Organised",
        Team_collaboration: "Team Collaboration",
        Time_management: "Time Management",
        Agile_scrum_familiarity: "Agile / Scrum",
        Communication_with_clients: "Client Communication",
      },

      // -----------------------------------------------------------------------
      // CV section
      // -----------------------------------------------------------------------
      cv: {
        title_part1: "Take a Look at My",
        title_part2: "CV",
        subtitle:
          "A concise view of my professional journey, skills, and achievements.",
        and: "And",
        cv_preview_alt: "CV Preview",
        download_text: "Download Full CV",
        click_to_download: "Click to save PDF",
        download_button: "Download Full CV",
        thank_you_part1: "Thank You for Your",
        thank_you_part2: "Time",
        thank_you_message:
          "I appreciate you taking the time to review my qualifications. Feel free to reach out if you'd like to discuss opportunities.",
        profile_alt: "Ahmed Ghoul",
      },

      // -----------------------------------------------------------------------
      // Footer
      // -----------------------------------------------------------------------
      footer: {
        logo_alt: "GA Portfolio Logo",
        description:
          "Full-Stack & AI/ML Developer based in Guelma, Algeria. Building production web apps and enterprise systems with React, Node.js, Python, and modern AI tooling. Open to remote roles and relocation across Europe.",
        copyright_alt: "Copyright",
        copyright_text: "© Ahmed Ghoul. All rights reserved.",
        terms_conditions: "Terms & Conditions",

        // About Me column
        about_me: "About Me",
        birth_date: "03/08/2005 · 20 yo",
        location: "Setif, Algeria",
        profession: "Full-Stack & AI Developer",
        freelancer: "Freelancer — May 2025 – Present",
        student_at: "B.Sc. CS — University of",
        university: "8 May 1945, Guelma · Ranked 1st",

        // Techs column
        techs: "Tech Stack",
        html_css_js: "HTML · CSS · JavaScript · TypeScript",
        react_node: "React.js · Node.js · Express.js",
        python_fastapi: "Python · FastAPI",
        supabase_firebase: "Supabase · Firebase",
        postgresql_mongodb: "PostgreSQL · MongoDB · MySQL",
        docker_github_actions: "Docker · GitHub Actions · Vercel",
        rag_faiss: "RAG Pipelines · FAISS · OpenCV",

        // Contact column
        get_in_touch: "Get in Touch",
        email: "0ahmedghoul0@gmail.com",
        phone: "+213 563 437 394",

        // Social
        linkedin: "LinkedIn",
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
