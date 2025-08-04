import { facebook, github, instagram, linkedin, shieldTick, support, tech, truckFast, twitter } from "../assets/icons";
import {customer1, customer2, shoe4, shoe5, shoe6, shoe7, shoe1, shoe2, shoe3, samir, rayane, guelma, sonatrach } from "../assets/images";

export const navLinks = [
    { href: "#about_me", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#education&experience", label: "Education & Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#cv", label: "CV" },
    { href: "#contactme", label: "Contact Me" },


];

export const shoes = [
    {
        imgURL: shoe1,
        link: 'https://github.com/0ahmed0ghoul/Classroom-management',
        name: "Classroom Managment System",
        techs: "html css react express mysql",
        Date: "2025-02-24",
    },
    {
        imgURL: shoe2,
        link: 'https://github.com/0ahmed0ghoul/LAN-Monitoring-System',
        techs: "html css react express python",
        name: "LAN monitoring system",
        Date: "2025-05-31",
    },
    {
        imgURL: shoe3,
        link: 'https://github.com/0ahmed0ghoul/ALGCourses',
        techs: "html css react express mysql",
        name: "courses and quizzes management",
        Date: "2025-01-24",
    },
    {
        imgURL: shoe6,
        name: "Nike Landing Page",
        techs: "html css js tailwindcss",
        link: "https://github.com/0ahmed0ghoul/Nike",
        Date: "2025-08-01",
    },
    {
        imgURL: shoe4,
        name: "Conference Management System",
        techs: "laravel html mysql",
        link: "https://github.com/0ahmed0ghoul/Conference-Paper-Management-System",
        Date: "2025-06-13",
    },
    {
        imgURL: shoe5,
        name: "Face recognation",
        techs: "python pyqt5 opencv",
        link: "https://github.com/0ahmed0ghoul/face-recognation",
        Date: "2025-04-16",
    },
];

export const statistics = [
    { value: '+2 Years', label: 'of Experience' },
    { value: '30+', label: 'Projects' },
    { value: '9+', label: 'Techs' },];



export const services = [
    {
        imgURL: truckFast,
        label: "Easy Use Systems",
        subtext: "Experience seamless integration and user-friendly interfaces with my systems."
    },
    {
        imgURL: shieldTick,
        label: "trending Technologies",
        subtext: "Stay ahead with our cutting-edge technologies and innovative solutions."
    },
    {
        imgURL: support,
        label: "Custom Support",
        subtext: "Get assistance anytime with my 24/7 customer support service."
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
