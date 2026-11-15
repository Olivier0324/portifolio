/* ------------------------------------------------------------------
   Every image or file can be EITHER:
     • a local file inside /public, e.g.  "assets/images/olivier.jpg"
     • a full link,                        e.g.  "https://example.com/me.jpg"
------------------------------------------------------------------- */

export const site = {
    name: "Cyuzuzo Kwizera Olivier",
    brand: "Olivier",
    email: "cyuzuzokwizeraolivier2@gmail.com",
    location: "Rwanda",
    photo: "/assets/images/olivier.png",
    cv: "assets/files/cv.pdf", // leave "" to hide the Download CV button
    availability: "Open to opportunities", // e.g. "Available for hire"
    intro:
        "Software Engineer from Rwanda, focused on frontend development. I turn ideas and designs into fast, accessible and visually engaging web applications.",
    // The words the hero types, one after another
    roles: [
        "Frontend Developer",
        "UI/UX & Graphic Designer",
        "React & Tailwind Developer",
        "Aspiring Full-Stack Developer",
        "Lifelong Learner",
    ],
    // Paste a Formspree link here (https://formspree.io/f/xxxx) to receive messages by email.
    // Leave "" and the form opens the visitor's email app instead.
    web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
    // platform: github | linkedin | instagram | whatsapp | twitter | email
    socials: [
        { platform: "github", url: "https://github.com/Olivier0324/" }, // EDIT
        { platform: "linkedin", url: "https://www.linkedin.com/in/cyuzuzo-kwizera-olivier-b400b733b/" }, // EDIT
        
    ],
};

export const nav = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Research",
];

export const about = [
    "I am a passionate and dedicated Software Engineer with a strong interest in building intuitive, responsive, and user-centered digital solutions. My expertise lies in frontend development, where I transform ideas and designs into functional, accessible, and visually engaging web applications using modern technologies such as React, JavaScript, and Tailwind CSS.",
    "With a background in UI/UX and graphic design, I bring together technical skills and creative thinking to develop solutions that balance usability, functionality, and aesthetics. I am continuously expanding my knowledge in backend development, databases, and system architecture to become a well-rounded Full-Stack Developer.",
    "I enjoy solving problems, exploring emerging technologies, and turning complex ideas into practical solutions. I believe in continuous learning, collaboration, and writing clean, maintainable code. Above all, I am driven by curiosity, resilience, and the desire to use technology to make a meaningful impact.",
];

export const highlights = [
    {
        title: "Frontend",
        text: "React · JavaScript · Tailwind CSS",
        icon: "react",
    },
    { title: "UI/UX & Graphics", text: "Design with purpose", icon: "design" },
    {
        title: "Growing",
        text: "Backend · Databases · Architecture",
        icon: "database",
    },
   
];

export const education = [
    {
        school: "University of Rwanda",
        detail: "Bachelor's degree", // EDIT: add your programme, e.g. "BSc in Information Systems"
        years: "Graduated October 2026",
        note: "Completed my undergraduate studies, combining technical coursework with applied research.",
    },
   
];

// Each skill: a name and an icon key (see src/lib/icons.js)
export const skills = [
    {
        title: "Frontend",
        icon: "react",
        items: [
            { name: "React", icon: "react" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "HTML5", icon: "html" },
            { name: "CSS3", icon: "css" },
            { name: "Vite", icon: "vite" },
        ],
    },
    {
        title: "UI/UX & Graphics",
        icon: "design",
        items: [
            { name: "Figma", icon: "figma" },
            { name: "UI/UX design", icon: "design" },
            { name: "Graphic design", icon: "pen" },
        ],
    },
    {
        title: "Backend ",
        icon: "server",
        items: [
            { name: "Node.js", icon: "node" },
            { name: "Express", icon: "express" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "REST APIs", icon: "cloud" },
        ],
    },
    {
        title: "Tools",
        icon: "terminal",
        items: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Postman", icon: "postman" },
            { name: "Redux Toolkit", icon: "redux" },
        ],
    },
];

// EDIT: replace these with your real roles
export const experience = [
    {
        role: "FullStack Developer",
        org: "Niheza Solutions",
        when: "Ongoing",
        points: [
            "Build responsive React and Tailwind interfaces from design to deployment.",
            "Connect frontends to REST APIs and keep the code clean and maintainable.",
            "Build Rest Api and database architecture."
        ],
    },
    {
        role: "UI/UX & Graphic Designer",
        org: "Freelance",
        when: "Ongoing",
        points: [
            "Design interfaces, posters and visual identities with a focus on clarity.",
            "Turn designs into working prototypes in Figma and in code.",
        ],
    }
];

// EDIT: replace with your real projects.
// image: a local file like "assets/images/projects/campus-connect.jpg" or a link.
// liveUrl / repoUrl: leave "" to hide a button.
export const projects = [
    {
        name: "Campus Connect",
        cat: "Full Stack",
        desc: "A student services platform with role-based dashboards, announcements and request tracking.",
        tech: ["React", "Node.js", "MongoDB"],
        image:
            "/public/assets/images/projects/eba-observa.png",
        liveUrl: "https://eba-iot-system-frontend.vercel.app/",
        repoUrl: "https://github.com/Olivier0324/-eba-iot-system-frontend",
    }
];

// EDIT: replace with your real certificates. link and image are optional.
export const certifications = [
    {
        name: "Responsive Web Design",
        by: "freeCodeCamp",
        year: "2023",
        link: "",
        image: "",
    },
    {
        name: "Frontend Development ",
        by: "ALX",
        year: "2025",
        link: "",
        image: "public\assets\images\certs\alx.png",
    },
    {
        name: "UX Design Foundations",
        by: "SOlvit Africa",
        year: "2025",
        link: "",
        image: "",
    },
];

// EDIT: file or link are optional (e.g. "assets/files/my-paper.pdf")
export const research = [
    {
        title: "IoT-based Monitoring System for Ecosystem-Based Adaptation",
        status: "Ongoing",
        text: "How can IoT technology improve the monitoring and evaluation of ecosystem restoration and environmental conditions?",
        link: "",
    },
    
];
