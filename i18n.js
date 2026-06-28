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
        location: "Guelma, Algeria",
        description:
          "Full-Stack & AI/ML Developer with 2+ years delivering production web apps and enterprise systems. Graduated 1st in Computer Science cohort (GPA 15.63/20). Built a RAG document platform for Algérie Télécom and a real-time LAN monitoring system for Sonatrach.",
        language_proficiency: "Language Proficiency",
        english: "English",
        english_level: "B2 · IELTS 6.5",
        french: "French",
        french_level: "A2",
        german: "German",
        german_level: "A1 · learning",
        welcome_note: "Open to opportunities",
        available: "Available for work",
        years_experience: "Years of Experience",
        see_projects: "See My Projects",
      },

      // -----------------------------------------------------------------------
      // Stats (used in About Me stat cards)
      // -----------------------------------------------------------------------
      stats: {
        years_of_experience:   "Years of Experience",
        projects_completed:    "Projects Completed",
        technologies_mastered: "Techs Mastered",
        happy_clients:         "Happy Clients",
      },

      // -----------------------------------------------------------------------
      // Navigation
      // -----------------------------------------------------------------------
      nav: {
        about_me:            "About Me",
        projects:            "Projects",
        services:            "Services",
        education_experience:"Education & Experience",
        testimonials:        "Testimonials",
        cv:                  "CV",
        contact_me:          "Contact Me",
        menu:                "Menu",
        dark_mode:           "Dark Mode",
        light_mode:          "Light Mode",
        logo_alt:            "GA Portfolio",
        footer:              "GA | Portfolio",
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
        view_project_button:  "View Project",
        project_showcase_alt: "Project screenshot",
        project_thumbnail_alt:"{{name}}",
        all_projects: "All Projects",
        view_code:    "Source Code",
        live_demo:    "Live Demo",
        tech_label:   "Stack",
        role_label:   "Role",
        date_label:   "Date",

        // Categories
        category_web:        "Web Application",
        category_desktop:    "Desktop Application",
        category_ui:         "UI / Design",
        category_internship: "Internship Project",
        portfolio:           "Portfolio",

        // Status
        status_completed:   "Completed",
        status_in_progress: "In Progress",

        // Roles
        role_fullstack: "Full-Stack Developer",
        role_frontend:  "Frontend Developer",
        role_backend:   "Backend Developer",
        role_desktop:   "Desktop Developer",

        // ── Featured & all_projects entries ──────────────────────────────────

        rag_document_analysis:"RAG Document Analytics Platform",
        rag_document_analysis_desc:"Enterprise document-search web app built during my thesis internship at Algérie Télécom. Integrated semantic search with FAISS vector embeddings, reducing query latency by ~50 ms. Automated unstructured-document chunking and vector embedding generation, eliminating manual indexing. RESTful APIs connect the React frontend, Node.js backend, and Python retrieval service for context-aware search across internal knowledge bases.",

        lan_monitoring: "LAN Monitoring System",
        lan_monitoring_desc:"Real-time network-tracking platform built during my internship at SONATRACH – DCRD. Monitors 100+ network devices, reducing manual asset-discovery time by 40%. Live dashboards visualise packet activity, bandwidth utilisation, and device health metrics, enabling proactive anomaly detection before outages. Delivered through structured QA testing and staged corporate deployment.",

        massar:"Massar — Recruitment Platform",
        massar_desc:"Production PWA for the Algerian job market — job-posting management, candidate tracking pipelines, and admin dashboards. Implemented JWT authentication, Role-Based Access Control (RBAC), and REST APIs. Full project-lifecycle ownership: from requirements to CI/CD deployment via GitHub Actions and Vercel.",


        face_recognition:"Face Detection System",
        face_recognition_desc:"Desktop application with live-stream face detection achieving >90% accuracy. Designed as an offline, lightweight workforce-management tool for small businesses — no cloud dependency, no complex setup. Built with PyQt5 for a clean native experience.",

        alphax: "AlphaX — Education Platform",
        alphax_desc:"Course-management PWA with automated assessment and student-progress tracking. Built for an Algerian education client, covering the full stack from data modelling to responsive UI. Firebase handles real-time sync and authentication.",

        apex_news: "Apex News",
        apex_news_desc:"Real-time news PWA with dynamic content management and mobile-first delivery. Owned the entire project lifecycle — architecture, development, CI/CD, and production deployment. MongoDB Atlas powers the content backend.",

        classroom_management: "Classroom Management System",
        classroom_management_desc:"Web application for administrative control, student and teacher attendance tracking, and attendance-rate calculation. Gives educational institutions a responsive interface to monitor and update classroom-related information efficiently.",

        alg_courses: "ALG Courses — Learning Platform",
        alg_courses_desc:"Academic platform connecting teachers and students. Instructors create and publish courses; learners discover, enrol, and complete interactive lessons and coding challenges.",

        conference_system: "Conference Paper Management System",
        conference_system_desc:"Laravel web app automating the full lifecycle of academic conference paper management — submission, peer review, and editorial decision. Secure role-based dashboards for authors, reviewers, and programme chairs ensure a seamless workflow.",

        eco_dz: "EcoDZ — Eco-Friendly Travel",
        eco_dz_desc:"Web platform promoting sustainable travel in Algeria — eco-friendly accommodations, green activity listings, and responsible-tourism guides to help travellers make environmentally conscious choices.",
      },

      // -----------------------------------------------------------------------
      // Services section
      // -----------------------------------------------------------------------
      services: {
        subtitle:    "What I Offer",
        title_part1: "Full-Stack",
        title_part2: "Web Development",
        title_part3: "Services",
        description:
          "End-to-end solutions — from pixel-perfect frontends to scalable backends and AI-powered features.",

        // Responsive Design
        responsive_design:
          "Responsive Web Design & Development",
        responsive_design_desc:
          "Build fully responsive websites and PWAs that look and perform great on every screen size.",
        responsive_design_techs: ["HTML5", "CSS3", "Tailwind CSS", "Flexbox", "Grid", "Media Queries"],

        // Full-Stack (replaces the old frontend-only React service)
        fullstack_development:
          "Full-Stack Application Development",
        fullstack_development_desc:
          "Deliver complete web applications — React frontends, Node.js/Express backends, database design, and REST APIs — under one roof.",
        fullstack_development_techs: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Supabase"],

        // UI/UX
        ui_ux_implementation:
          "UI/UX Implementation from Design Files",
        ui_ux_implementation_desc:
          "Convert Figma or XD prototypes into pixel-perfect, production-ready interfaces with smooth animations.",
        ui_ux_implementation_techs: ["HTML", "CSS", "Tailwind CSS", "Framer Motion", "Figma-to-code"],

        // API & Backend
        api_backend:
          "Backend API Design & Integration",
        api_backend_desc:
          "Design, document, and integrate RESTful APIs; connect frontends to backend services and third-party platforms.",
        api_backend_techs: ["Node.js", "Express.js", "FastAPI", "REST", "JWT/RBAC", "Axios"],

        // DevOps / Deployment
        devops_deployment:
          "CI/CD, Deployment & Version Control",
        devops_deployment_desc:
          "Set up GitHub Actions pipelines, Vercel deployments, and Git workflows so releases are predictable and rollbacks are safe.",
        devops_deployment_techs: ["Git", "GitHub", "GitHub Actions", "Vercel", "Docker"],
      },

      // -----------------------------------------------------------------------
      // Education & Experience section
      // -----------------------------------------------------------------------
      education_experience: {
        subtitle: "Career Timeline",
        title:    "Education & Experience",
        education:    "Education",
        experience:   "Experience",
        achievements: "Achievements",

        // Education entries
        bachelors_degree:
          "B.Sc. Computer Science — University of Guelma",
        bachelors_details:
          "Graduated 1st in cohort with GPA 15.63/20 (Très Bien). Degree recognised in Germany (H+ in the Anabin database). Awarded Major & 5-Stars Student Excellence Certificates. Thesis: RAG-powered document analytics platform deployed at Algérie Télécom.",

        undergraduate_studies:
          "Computer Science Programme — University of 8 May 1945, Guelma",
        undergraduate_details:
          "Three-year LMD (Bologna-compatible) Computer Science Licence. Coursework spanned algorithms, networking, databases, software engineering, and HCI. Consistently ranked top of class throughout the programme.",

        // Experience entries
        sonatrach: "Software Engineering Intern — Sonatrach",
        sonatrach_description:
          "Built a real-time LAN monitoring system tracking 100+ network devices across Sonatrach's Technology & Development division (DCRD). Reduced manual asset-discovery time by 40%. Engineered live dashboards visualising packet activity, bandwidth utilisation, and device health — enabling proactive anomaly detection. Delivered through structured QA testing and staged corporate deployment following Sonatrach engineering and security standards.",

        // Used for the 2024 "work" git-log entry — freelance / independent projects phase
        agriculture_institution:
          "Independent Projects & Early Freelance",
        agriculture_description:
          "Developed a suite of academic and personal full-stack projects — classroom management, course platforms, face-recognition desktop app, and a conference-paper system — building production-ready skills across React, Node.js, Python, and MySQL before transitioning to paid freelance work in 2025.",

        // Achievement entries
        hakathon:      "University Hackathon — Computer Science Club",
        hakathon_desc:
          "Participated in a large-scale hackathon organised by the CS Club at the University of Guelma. Collaborated with peers to prototype and pitch a real-world solution under time pressure, placing among the top finalists.",

        leetcode:      "LeetCode — Algorithm Practice",
        leetcode_desc:
          "Solved 150+ algorithmic problems on LeetCode using Python, strengthening foundations in data structures, dynamic programming, and complexity analysis.",

        flex_box_grid:      "CSS Flexbox & Grid Mastery",
        flex_box_grid_desc:
          "Completed Flexbox Froggy, Grid Garden, and a set of real-world layout challenges — cementing responsive-design intuition applied directly in production projects.",
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

        samir_name:"Dr. Hallaci Samir",
        samir_profession: "Director, AI House — University of Guelma | Deputy Head of IT Dept.",
        samir_feedback:
          "I had the pleasure of teaching Ahmed in Data Structures and Algorithms, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead.",

        youssef_name:"Mr. Frahtia Youssef",
        youssef_profession:"Computer Science Student & CEO - Massar Dz",
        youssef_feedback:"During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",
      
        amani_name:"Ms.Tarfa Amani Assia",
        amani_profession:"English Teacher & CEO — AlphaX",
        amani_feedback:"During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",

        abderahmane_name:"Mr. Zerguine Abderahmane",
        abderahmane_profession:"Journalist & CEO — Apex News Dz",
        abderahmane_feedback:"During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",

        rayane_name:"Mr. Merchichi Rayane",
        rayane_profession:"Software Research & Development Engineer — Sonatrach",
        rayane_feedback:"During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",

        mourad_name:"Dr. Hadjeris Mourad",
        mourad_profession:"Computer science Teacher  — Univ of Guelma",
        mourad_feedback:"During his internship at SONATRACH, Ahmed built an impressive LAN monitoring system using React and Python. His frontend work stood out for its clarity, responsiveness, and user-friendly design. Ahmed's technical skills and professionalism were evident throughout — he quickly became a valuable part of the team.",


      
        },

      // -----------------------------------------------------------------------
      // Skills (soft skills)
      // -----------------------------------------------------------------------
      skills: {
        self_motivation:           "Self-Motivation",
        problem_solving:           "Problem-Solving",
        analytical_thinking:       "Analytical Thinking",
        clear_communicator:        "Clear Communicator",
        creativity:                "Creativity",
        user_centered:             "User-Centered",
        lifelong_learner:          "Lifelong Learner",
        organized:                 "Organised",
        Team_collaboration:        "Team Collaboration",
        Time_management:           "Time Management",
        Agile_scrum_familiarity:   "Agile / Scrum",
        Communication_with_clients:"Client Communication",
      },

      // -----------------------------------------------------------------------
      // CV section
      // -----------------------------------------------------------------------
      cv: {
        title_part1:        "Take a Look at My",
        title_part2:        "CV",
        subtitle:           "A concise view of my professional journey, skills, and achievements.",
        and:                "And",
        cv_preview_alt:     "CV Preview",
        download_text:      "Download Full CV",
        click_to_download:  "Click to save PDF",
        download_button:    "Download Full CV",
        thank_you_part1:    "Thank You for Your",
        thank_you_part2:    "Time",
        thank_you_message:
          "I appreciate you taking the time to review my qualifications. Feel free to reach out if you'd like to discuss opportunities.",
        profile_alt: "Ahmed Ghoul",
      },

      // -----------------------------------------------------------------------
      // Footer
      // -----------------------------------------------------------------------
      footer: {
        logo_alt:       "GA Portfolio Logo",
        description:
          "Full-Stack & AI/ML Developer based in Guelma, Algeria. Building production web apps and enterprise systems with React, Node.js, Python, and modern AI tooling. Open to remote roles and relocation across Europe.",
        copyright_alt:  "Copyright",
        copyright_text: "© Ahmed Ghoul. All rights reserved.",
        terms_conditions: "Terms & Conditions",

        // About Me column
        about_me:   "About Me",
        birth_date: "03/08/2005 · 20 yo",
        location:   "Guelma, Algeria",
        profession: "Full-Stack & AI Developer",
        freelancer: "Freelancer — May 2025 – Present",
        student_at: "B.Sc. CS — University of",
        university: "8 May 1945, Guelma · Ranked 1st",

        // Techs column
        techs:                "Tech Stack",
        html_css_js:          "HTML · CSS · JavaScript · TypeScript",
        react_node:           "React.js · Node.js · Express.js",
        python_fastapi:       "Python · FastAPI",
        supabase_firebase:    "Supabase · Firebase",
        postgresql_mongodb:   "PostgreSQL · MongoDB · MySQL",
        docker_github_actions:"Docker · GitHub Actions · Vercel",
        rag_faiss:            "RAG Pipelines · FAISS · OpenCV",

        // Contact column
        get_in_touch: "Get in Touch",
        email:        "0ahmedghoul0@gmail.com",
        phone:        "+213 563 437 394",

        // Social
        linkedin:  "LinkedIn",
        github:    "GitHub",
        facebook:  "Facebook",
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