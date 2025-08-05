// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      about: {
        my_picture_alt: "my picture",
        greeting: "Hi, I'm",
        my_name: "Ahmed",
        last_name: "Ghoul",
        from: "From",
        location: "Tebessa, Algeria",
        description: "A frontend Developer with +2 years experience in html, css and react js.",
        language_proficiency: "Language Proficiency",
        english: "English",
        english_level: "60%",
        german: "German",
        german_level: "20% (still learning)",
        portuguese: "Portuguese",
        portuguese_level: "10% (started recently)",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        fluent: "Fluent",
        see_projects: "See My Projects"
      },
      stats: {
        projects_completed: "Projects Completed",
        happy_clients: "Happy Clients",
        customer_reviews: "Customer Reviews"
      },
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
        logo_alt: "My Portfolio Logo",
        footer: "GA | Portfolio"
      },
      projects: {
        // Titles and UI text
        title_part1: "Few of my",
        title_part2: "Projects",
        subtitle: "Here are some of the projects I have worked on recently...",
        view_project_button: "View project",
        project_showcase_alt: "project showcase",
        project_thumbnail_alt: "Thumbnail for project: {{name}}",

        
        // Project names and descriptions
        classroom_management: "Classroom Management System",
        classroom_management_desc: "This web application is designed for managing classroom data...",
        
        lan_monitoring: "LAN Monitoring System",
        lan_monitoring_desc: "This web application is a real-time LAN monitoring and device inventory system...",
        
        alg_courses: "Courses and Quizzes Management",
        alg_courses_desc: "ALGCourses is an academic platform that connects teachers and students...",
        
        nike_landing: "Nike Landing Page",
        nike_landing_desc: "This project is a fully responsive Nike landing page...",
        
        conference_system: "Conference Management System",
        conference_system_desc: "This web application is designed to automate and simplify...",
        
        face_recognition: "Face Recognition",
        face_recognition_desc: "FaceTrack is a Python-based desktop application..."
      },
      services: {
        title_part1: "I Provide You",
        title_part2: "Super",
        title_part3: "Quality",
        title_part4: "services",
        
        responsive_design: "Responsive Web Design & Development",
        responsive_design_desc: "Build fully responsive websites that look great on desktop, tablet, and mobile.",
        responsive_design_techs: ['HTML', 'CSS', 'Tailwind CSS', 'Flexbox', 'Grid', 'Media Queries'],
        
        react_development: "Modern Front-End App Development with React",
        react_development_desc: "Develop scalable and maintainable front-end applications using component-based architecture.",
        react_development_techs: ['React.js', 'Hooks', 'JSX', 'Component Reusability', 'State Management'],
        
        ui_ux_implementation: "UI/UX Implementation from Design Files",
        ui_ux_implementation_desc: "Convert design prototypes (Figma, XD, Sketch) into pixel-perfect, production-ready websites.",
        ui_ux_implementation_techs: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Figma-to-code skills'],
        
        version_control: "Version Control & Team Collaboration",
        version_control_desc: "Use Git and GitHub to collaborate with teams, manage branches, resolve merge conflicts, and track changes.",
        version_control_techs: ['Git', 'GitHub', 'Git Flow', 'Pull Requests'],
        
        api_integration: "REST API Integration & Dynamic Data Handling",
        api_integration_desc: "Connect front-end apps to back-end APIs to display real-time or user-generated content.",
        api_integration_techs: ['JavaScript (Fetch, Axios)', 'React (useEffect, useState)', 'JSON', 'HTTP methods']
      },
      education_experience: {
        education: "Education",
        experience: "Experience",
        academic_journey: "Academic Journey",
        bachelors_degree: "Bachelor's Degree in Computer Science with honors (GPA: 3.7/4.0)",
        undergraduate_studies: "Undergraduate studies at University of 8 May 1945, Guelma (Ranked top 3 in class)",
        view_certificates: "View Certificates",
        professional_experience: "Professional Experience",
        agriculture_institution: "Agriculture Institution",
        agriculture_description: "Developed a Python-based student management system that improved efficiency by 60%",
        sonatrach: "Sonatrach",
        sonatrach_description: "Engineered a LAN monitoring solution for the Technology & Development division that optimized software resource usage",
        see_projects: "See Projects"
      },
      testimonials: {
        title_part1: "Testimonials from",
        title_part2: "People",
        title_part3: "I've",
        title_part4: "Learned",
        title_part5: "from and",
        title_part6: "Worked",
        title_part7: "under their supervision",
        subtitle: "Genuine feedback from individuals who have mentored me, collaborated with me, or supervised my work. Their words reflect our shared professional journey.",
        
        // Review 1
        samir_name: "Dr. Hallaci Samir",
        samir_profession: "Deputy Head of IT Department at Univ Guelma",
        samir_feedback: "I had the pleasure of teaching Ahmed Ghoul in the Data Structures and Algorithms course, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead.",
        
        // Review 2
        rayane_name: "Mr. Merchichi Rayane",
        rayane_profession: "Software research and development engineer at Sonatrach",
        rayane_feedback: "I had the pleasure of teaching Ahmed Ghoul in the Data Structures and Algorithms course, and later supervising him during his internship. From the classroom to the professional setting, Ahmed has consistently shown remarkable dedication, a strong grasp of core computer science principles, and a genuine passion for learning. He approaches challenges with persistence and maturity, and his growth throughout the internship was impressive. I'm proud of his progress and confident he has a promising future ahead."
      },
      skills: {
        self_motivation: "Self-Motivation",
        problem_solving: "Problem-Solving",
        analytical_thinking: "Analytical Thinking",
        clear_communicator: "Clear Communicator",
        creativity: "Creativity",
        user_centered: "User-Centered",
        lifelong_learner: "Lifelong Learner",
        organized: "Organized"
      },
      cv: {
        title_part1: "Take A Look At My",
        title_part2: "CV",
        subtitle: "A summary of my professional journey, skills, and accomplishments",
        and: "And",
        cv_preview_alt: "CV Preview",
        download_text: "Download Full CV",
        click_to_download: "Click to save PDF",
        download_button: "Download Full CV",
        thank_you_part1: "Thank You For Your",
        thank_you_part2: "Time",
        thank_you_message: "I appreciate you taking the time to review my qualifications. Feel free to reach out if you'd like to discuss potential opportunities.",
        profile_alt: "Profile"
      },
      footer: {
        logo_alt: "Logo",
        description: "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and React, allowing me to build user-friendly interfaces and seamless user experiences. With experience in both front-end and back-end technologies, I create comprehensive solutions tailored to specific needs. I'm constantly learning new technologies and frameworks to stay at the forefront of web development.",        
        copyright_alt: "Copyright sign",
        copyright_text: "Copyright. All rights reserved.",
        terms_conditions: "Terms & Conditions",
        
        // About Me section
        about_me: "About Me",
        birth_date: "03/08/2005 (20yo)",
        location: "from Tebessa, Algeria",
        profession: "Web Developer",
        freelancer: "Freelancer",
        student_at: "Student at University of",
        university: "8 May 1945 Guelma, Algeria",
        
        // Techs section
        techs: "Techs",
        html_css_js: "HTML & CSS & JS",
        react_express: "React JS & Express JS",
        bootstrap_tailwind: "Bootstrap & Tailwind CSS",
        python: "Python",
        mysql: "MySQL",
        mongodb: "MongoDB",
        git_github: "Git & GitHub",
        
        // Get in touch section
        get_in_touch: "Get in touch",
        email: "0ahmedghoul0@gmail.com",
        phone: "+213552055047",
        
        // Social media
        linkedin: "LinkedIn",
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram"
      }

      
    }
  },
  de: {
    translation: {
      about: {
        my_picture_alt: "mein Bild",
        greeting: "Hallo, ich bin",
        my_name: "Ahmed",
        last_name: "Ghoul",
        from: "Aus",
        location: "Tebessa, Algerien",
        description: "Ein Frontend-Entwickler mit mehr als 2 Jahren Erfahrung in HTML, CSS und React JS.",
        language_proficiency: "Sprachkenntnisse",
        english: "Englisch",
        english_level: "60%",
        german: "Deutsch",
        german_level: "20% (lerne noch)",
        portuguese: "Portugiesisch",
        portuguese_level: "10% (kürzlich begonnen)",
        beginner: "Anfänger",
        intermediate: "Mittelstufe",
        advanced: "Fortgeschritten",
        fluent: "Fließend",
        see_projects: "Meine Projekte ansehen"
      },
      stats: {
        projects_completed: "Projekte abgeschlossen",
        happy_clients: "Zufriedene Kunden",
        customer_reviews: "Kundenbewertungen"
      },
      nav: {
        about_me: "Über Mich",
        projects: "Projekte",
        services: "Dienstleistungen",
        education_experience: "Bildung & Erfahrung",
        testimonials: "Referenzen",
        cv: "Lebenslauf",
        contact_me: "Kontaktieren Sie Mich",
        menu: "Menü",
        dark_mode: "Dunkelmodus",
        light_mode: "Hellmodus",
        logo_alt: "Mein Portfolio-Logo",
        footer: "GA | Portfolio"
      },
      projects: {
        title_part1: "Einige meiner",
        title_part2: "Projekte",
        subtitle: "Hier sind einige Projekte, an denen ich kürzlich gearbeitet habe...",
        view_project_button: "Projekt ansehen",
        project_showcase_alt: "Projektpräsentation",
        project_thumbnail_alt: "Miniaturansicht für Projekt: {{name}}",
        
        classroom_management: "Klassenraum-Management-System",
        classroom_management_desc: "Diese Webanwendung ist für die Verwaltung von Klassenzimmerdaten konzipiert...",
        
        lan_monitoring: "LAN-Überwachungssystem",
        lan_monitoring_desc: "Diese Webanwendung ist ein Echtzeit-LAN-Überwachungs- und Geräteinventarsystem...",
        
        alg_courses: "Kurs- und Quizverwaltung",
        alg_courses_desc: "ALGCourses ist eine akademische Plattform, die Lehrer und Schüler verbindet...",
        
        nike_landing: "Nike Landing Page",
        nike_landing_desc: "Dieses Projekt ist eine vollständig responsive Nike-Landingpage...",
        
        conference_system: "Konferenzverwaltungssystem",
        conference_system_desc: "Diese Webanwendung dient zur Automatisierung und Vereinfachung...",
        
        face_recognition: "Gesichtserkennung",
        face_recognition_desc: "FaceTrack ist eine Python-basierte Desktop-Anwendung..."
      },
      services: {
        title_part1: "Ich biete Ihnen",
        title_part2: "Super",
        title_part3: "Qualitäts",
        title_part4: "Dienstleistungen",
        
        responsive_design: "Responsives Webdesign & Entwicklung",
        responsive_design_desc: "Erstellung vollständig responsiver Websites, die auf Desktop, Tablet und Mobilgeräten großartig aussehen.",
        responsive_design_techs: ['HTML', 'CSS', 'Tailwind CSS', 'Flexbox', 'Grid', 'Media Queries'],
        
        react_development: "Moderne Front-End-Entwicklung mit React",
        react_development_desc: "Entwicklung skalierbarer und wartbarer Front-End-Anwendungen mit komponentenbasierter Architektur.",
        react_development_techs: ['React.js', 'Hooks', 'JSX', 'Komponenten-Wiederverwendung', 'Zustandsverwaltung'],
        
        ui_ux_implementation: "UI/UX-Implementierung aus Design-Dateien",
        ui_ux_implementation_desc: "Umsetzung von Design-Prototypen (Figma, XD, Sketch) in pixelgenaue, produktionsreife Websites.",
        ui_ux_implementation_techs: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Figma-zu-Code-Fähigkeiten'],
        
        version_control: "Versionskontrolle & Teamzusammenarbeit",
        version_control_desc: "Verwendung von Git und GitHub zur Zusammenarbeit mit Teams, Verwaltung von Branches, Lösung von Merge-Konflikten und Nachverfolgung von Änderungen.",
        version_control_techs: ['Git', 'GitHub', 'Git Flow', 'Pull Requests'],
        
        api_integration: "REST-API-Integration & dynamische Datenverarbeitung",
        api_integration_desc: "Anbindung von Front-End-Apps an Back-End-APIs zur Anzeige von Echtzeit- oder benutzergenerierten Inhalten.",
        api_integration_techs: ['JavaScript (Fetch, Axios)', 'React (useEffect, useState)', 'JSON', 'HTTP-Methoden']
      },
      education_experience: {
        education: "Bildung",
        experience: "Erfahrung",
        academic_journey: "Akademische Reise",
        bachelors_degree: "Bachelor-Abschluss in Informatik mit Auszeichnung (GPA: 3.7/4.0)",
        undergraduate_studies: "Grundstudium an der Universität 8. Mai 1945, Guelma (Platz 3 in der Klasse)",
        view_certificates: "Zertifikate anzeigen",
        professional_experience: "Berufserfahrung",
        agriculture_institution: "Landwirtschaftliche Einrichtung",
        agriculture_description: "Entwicklung eines Python-basierten Studentenverwaltungssystems, das die Effizienz um 60% steigerte",
        sonatrach: "Sonatrach",
        sonatrach_description: "Entwicklung einer LAN-Überwachungslösung für die Abteilung Technologie & Entwicklung, die die Software-Ressourcennutzung optimierte",
        see_projects: "Projekte ansehen"
      },
      testimonials: {
        title_part1: "Referenzen von",
        title_part2: "Menschen",
        title_part3: "von denen ich",
        title_part4: "gelernt",
        title_part5: "habe und",
        title_part6: "gearbeitet",
        title_part7: "habe unter ihrer Aufsicht",
        subtitle: "Echte Rückmeldungen von Personen, die mich betreut, mit mir zusammengearbeitet oder meine Arbeit überwacht haben. Ihre Worte spiegeln unsere gemeinsame berufliche Reise wider.",
        
        samir_name: "Dr. Hallaci Samir",
        samir_profession: "Stellvertretender Leiter der IT-Abteilung an der Universität Guelma",
        samir_feedback: "Ich hatte das Vergnügen, Ahmed Ghoul im Kurs „Datenstrukturen und Algorithmen“ zu unterrichten und ihn später während seines Praktikums zu betreuen. Vom Klassenzimmer bis zum beruflichen Umfeld zeigte Ahmed stets bemerkenswerte Einsatzbereitschaft, ein solides Verständnis der grundlegenden Informatikprinzipien und eine echte Leidenschaft fürs Lernen. Er begegnet Herausforderungen mit Ausdauer und Reife, und seine Entwicklung während des Praktikums war beeindruckend. Ich bin stolz auf seine Fortschritte und zuversichtlich, dass ihm eine vielversprechende Zukunft bevorsteht.",
        
        rayane_name: "Herr Merchichi Rayane",
        rayane_profession: "Softwareentwickler und Forscher bei Sonatrach",
        rayane_feedback: "Ich hatte das Vergnügen, Ahmed Ghoul im Kurs „Datenstrukturen und Algorithmen“ zu unterrichten und ihn später während seines Praktikums zu betreuen. Vom Klassenzimmer bis zum beruflichen Umfeld zeigte Ahmed stets bemerkenswerte Einsatzbereitschaft, ein solides Verständnis der grundlegenden Informatikprinzipien und eine echte Leidenschaft fürs Lernen. Er begegnet Herausforderungen mit Ausdauer und Reife, und seine Entwicklung während des Praktikums war beeindruckend. Ich bin stolz auf seine Fortschritte und zuversichtlich, dass ihm eine vielversprechende Zukunft bevorsteht."
      },
      skills: {
        self_motivation: "Selbstmotivation",
        problem_solving: "Problemlösung",
        analytical_thinking: "Analytisches Denken",
        clear_communicator: "Klare Kommunikation",
        creativity: "Kreativität",
        user_centered: "Benutzerorientiert",
        lifelong_learner: "Lebenslanges Lernen",
        organized: "Organisiert"
      },
      cv: {
        title_part1: "Schauen Sie sich meinen",
        title_part2: "Lebenslauf an",
        subtitle: "Eine Zusammenfassung meines beruflichen Werdegangs, meiner Fähigkeiten und Leistungen",
        and: "Und",
        cv_preview_alt: "Lebenslauf Vorschau",
        download_text: "Vollständigen Lebenslauf herunterladen",
        click_to_download: "Klicken Sie zum Herunterladen der PDF",
        download_button: "Lebenslauf herunterladen",
        thank_you_part1: "Vielen Dank für Ihre",
        thank_you_part2: "Zeit",
        thank_you_message: "Ich schätze es sehr, dass Sie sich die Zeit genommen haben, meine Qualifikationen zu prüfen. Zögern Sie nicht, mich zu kontaktieren, wenn Sie mögliche Möglichkeiten besprechen möchten.",
        profile_alt: "Profil"
      },
      footer: {
        logo_alt: "Logo",
        description: "Ich bin ein leidenschaftlicher Webentwickler mit Fokus auf die Erstellung dynamischer und responsiver Webanwendungen. Mein Fachwissen liegt in HTML, CSS, JavaScript und React, wodurch ich benutzerfreundliche Oberflächen und nahtlose Benutzererfahrungen erstellen kann. Mit Erfahrung in Front-End- und Back-End-Technologien entwickle ich umfassende Lösungen, die auf spezifische Anforderungen zugeschnitten sind. Ich lerne ständig neue Technologien und Frameworks, um an der Spitze der Webentwicklung zu bleiben.",        
        copyright_alt: "Copyright-Zeichen",
        copyright_text: "Urheberrecht. Alle Rechte vorbehalten.",
        terms_conditions: "Geschäftsbedingungen",
        
        about_me: "Über Mich",
        birth_date: "03/08/2005 (20 Jahre)",
        location: "aus Tebessa, Algerien",
        profession: "Webentwickler",
        freelancer: "Freiberufler",
        student_at: "Student an der Universität",
        university: "8. Mai 1945 Guelma, Algerien",
        
        techs: "Technologien",
        html_css_js: "HTML & CSS & JS",
        react_express: "React JS & Express JS",
        bootstrap_tailwind: "Bootstrap & Tailwind CSS",
        python: "Python",
        mysql: "MySQL",
        mongodb: "MongoDB",
        git_github: "Git & GitHub",
        
        get_in_touch: "Kontakt",
        email: "0ahmedghoul0@gmail.com",
        phone: "+213552055047",
        
        linkedin: "LinkedIn",
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram"
      }



    }
  },
  pt: {
    translation: {
      about: {
        my_picture_alt: "minha foto",
        greeting: "Olá, eu sou",
        my_name: "Ahmed",
        last_name: "Ghoul",
        from: "De",
        location: "Tebessa, Argélia",
        description: "Desenvolvedor Frontend com mais de 2 anos de experiência em HTML, CSS e React JS.",
        language_proficiency: "Proficiência em Idiomas",
        english: "Inglês",
        english_level: "60%",
        german: "Alemão",
        german_level: "20% (ainda aprendendo)",
        portuguese: "Português",
        portuguese_level: "10% (comecei recentemente)",
        beginner: "Iniciante",
        intermediate: "Intermediário",
        advanced: "Avançado",
        fluent: "Fluente",
        see_projects: "Ver Meus Projetos"
      },
      stats: {
        projects_completed: "Projetos Concluídos",
        happy_clients: "Clientes Satisfeitos",
        customer_reviews: "Avaliações de Clientes"
      },
      nav: {
        about_me: "Sobre Mim",
        projects: "Projetos",
        services: "Serviços",
        education_experience: "Educação & Experiência",
        testimonials: "Depoimentos",
        cv: "Currículo",
        contact_me: "Contate-me",
        menu: "Menu",
        dark_mode: "Modo Escuro",
        light_mode: "Modo Claro",
        logo_alt: "Logo do Meu Portfólio",
        footer: "GA | Portfólio"
      },
      projects: {
        title_part1: "Alguns dos meus",
        title_part2: "Projetos",
        subtitle: "Aqui estão alguns dos projetos em que trabalhei recentemente...",
        view_project_button: "Ver projeto",
        project_showcase_alt: "mostruário do projeto",
        project_thumbnail_alt: "Miniatura do projeto: {{name}}",

        
        classroom_management: "Sistema de Gestão de Sala de Aula",
        classroom_management_desc: "Esta aplicação web foi projetada para gerenciar dados de sala de aula...",
        
        lan_monitoring: "Sistema de Monitoramento LAN",
        lan_monitoring_desc: "Esta aplicação web é um sistema de monitoramento em tempo real...",
        
        alg_courses: "Gestão de Cursos e Questionários",
        alg_courses_desc: "ALGCourses é uma plataforma acadêmica que conecta professores e alunos...",
        
        nike_landing: "Página de Destino Nike",
        nike_landing_desc: "Este projeto é uma página de destino Nike totalmente responsiva...",
        
        conference_system: "Sistema de Gestão de Conferências",
        conference_system_desc: "Esta aplicação web foi projetada para automatizar e simplificar...",
        
        face_recognition: "Reconhecimento Facial",
        face_recognition_desc: "FaceTrack é um aplicativo desktop baseado em Python..."
        
      },
      services: {
        title_part1: "Eu forneço",
        title_part2: "Serviços de",
        title_part3: "Super",
        title_part4: "Qualidade",
        
        responsive_design: "Design e Desenvolvimento Web Responsivo",
        responsive_design_desc: "Construção de sites totalmente responsivos que ficam ótimos em desktop, tablet e mobile.",
        responsive_design_techs: ['HTML', 'CSS', 'Tailwind CSS', 'Flexbox', 'Grid', 'Media Queries'],
        
        react_development: "Desenvolvimento Moderno de Aplicativos Front-End com React",
        react_development_desc: "Desenvolvimento de aplicações front-end escaláveis e sustentáveis usando arquitetura baseada em componentes.",
        react_development_techs: ['React.js', 'Hooks', 'JSX', 'Reutilização de Componentes', 'Gerenciamento de Estado'],
        
        ui_ux_implementation: "Implementação UI/UX a partir de Arquivos de Design",
        ui_ux_implementation_desc: "Conversão de protótipos de design (Figma, XD, Sketch) em websites pixel-perfect e prontos para produção.",
        ui_ux_implementation_techs: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Habilidades Figma-to-code'],
        
        version_control: "Controle de Versão e Colaboração em Equipe",
        version_control_desc: "Uso de Git e GitHub para colaborar com equipes, gerenciar branches, resolver conflitos de merge e rastrear alterações.",
        version_control_techs: ['Git', 'GitHub', 'Git Flow', 'Pull Requests'],
        
        api_integration: "Integração REST API e Manipulação de Dados Dinâmicos",
        api_integration_desc: "Conecte aplicativos front-end a APIs back-end para exibir conteúdo em tempo real ou gerado pelo usuário.",
        api_integration_techs: ['JavaScript (Fetch, Axios)', 'React (useEffect, useState)', 'JSON', 'Métodos HTTP']
      },
      education_experience: {
        education: "Educação",
        experience: "Experiência",
        academic_journey: "Jornada Acadêmica",
        bachelors_degree: "Bacharelado em Ciência da Computação com honras (GPA: 3.7/4.0)",
        undergraduate_studies: "Estudos de graduação na Universidade 8 de Maio de 1945, Guelma (Top 3 da turma)",
        view_certificates: "Ver Certificados",
        professional_experience: "Experiência Profissional",
        agriculture_institution: "Instituição Agrícola",
        agriculture_description: "Desenvolvi um sistema de gerenciamento de alunos baseado em Python que melhorou a eficiência em 60%",
        sonatrach: "Sonatrach",
        sonatrach_description: "Desenvolvi uma solução de monitoramento de LAN para a divisão de Tecnologia & Desenvolvimento que otimizou o uso de recursos de software",
        see_projects: "Ver Projetos"
      },
      testimonials: {
        title_part1: "Depoimentos de",
        title_part2: "Pessoas",
        title_part3: "com quem",
        title_part4: "Aprendi",
        title_part5: "e",
        title_part6: "Trabalhei",
        title_part7: "sob sua supervisão",
        subtitle: "Feedback genuíno de indivíduos que me orientaram, colaboraram comigo ou supervisionaram meu trabalho. Suas palavras refletem nossa jornada profissional compartilhada.",
        
        samir_name: "Dr. Hallaci Samir",
        samir_profession: "Vice-chefe do Departamento de TI na Univ Guelma",
        samir_feedback: "Tive o prazer de ensinar Ahmed Ghoul no curso de Estruturas de Dados e Algoritmos e, mais tarde, de supervisioná-lo durante o seu estágio. Desde a sala de aula até o ambiente profissional, Ahmed demonstrou consistentemente uma dedicação notável, um sólido entendimento dos princípios fundamentais da ciência da computação e uma verdadeira paixão por aprender. Ele enfrenta desafios com persistência e maturidade, e seu crescimento ao longo do estágio foi impressionante. Tenho orgulho do seu progresso e estou confiante de que ele tem um futuro promissor pela frente.",
        
        rayane_name: "Sr. Merchichi Rayane",
        rayane_profession: "Engenheiro de pesquisa e desenvolvimento de software na Sonatrach",
        rayane_feedback: "Tive o prazer de ensinar Ahmed Ghoul no curso de Estruturas de Dados e Algoritmos..."
      },
      skills: {
        self_motivation: "Auto-Motivação",
        problem_solving: "Resolução de Problemas",
        analytical_thinking: "Pensamento Analítico",
        clear_communicator: "Comunicador Claro",
        creativity: "Criatividade",
        user_centered: "Orientado ao Usuário",
        lifelong_learner: "Aprendiz Contínuo",
        organized: "Organizado"
      },
      cv: {
        title_part1: "Dê uma olhada no meu",
        title_part2: "Currículo",
        subtitle: "Um resumo da minha jornada profissional, habilidades e conquistas",
        and: "E",
        cv_preview_alt: "Pré-visualização do currículo",
        download_text: "Baixar currículo completo",
        click_to_download: "Clique para salvar PDF",
        download_button: "Baixar currículo",
        thank_you_part1: "Obrigado pelo seu",
        thank_you_part2: "Tempo",
        thank_you_message: "Agradeço por dedicar seu tempo para revisar minhas qualificações. Sinta-se à vontade para entrar em contato se quiser discutir possíveis oportunidades.",
        profile_alt: "Perfil"
      },
      footer: {
        logo_alt: "Logotipo",
        description: "Sou um desenvolvedor web apaixonado com foco na criação de aplicações web dinâmicas e responsivas. Minha especialização está em HTML, CSS, JavaScript e React, permitindo-me construir interfaces amigáveis e experiências de usuário perfeitas. Com experiência em tecnologias front-end e back-end, crio soluções abrangentes adaptadas a necessidades específicas. Estou constantemente aprendendo novas tecnologias e frameworks para me manter na vanguarda do desenvolvimento web.",
        copyright_alt: "Símbolo de copyright",
        copyright_text: "Direitos autorais. Todos os direitos reservados.",
        terms_conditions: "Termos e Condições",
        
        about_me: "Sobre Mim",
        birth_date: "03/08/2005 (20 anos)",
        location: "de Tebessa, Argélia",
        profession: "Desenvolvedor Web",
        freelancer: "Freelancer",
        student_at: "Estudante na Universidade de",
        university: "8 de Maio de 1945 Guelma, Argélia",
        
        techs: "Tecnologias",
        html_css_js: "HTML & CSS & JS",
        react_express: "React JS & Express JS",
        bootstrap_tailwind: "Bootstrap & Tailwind CSS",
        python: "Python",
        mysql: "MySQL",
        mongodb: "MongoDB",
        git_github: "Git & GitHub",
        
        get_in_touch: "Contato",
        email: "0ahmedghoul0@gmail.com",
        phone: "+213552055047",
        
        linkedin: "LinkedIn",
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram"
      }
      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;