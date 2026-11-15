import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaLinkedinIn,
    FaInstagram, FaWhatsapp, FaTwitter, FaPalette, FaPenNib, FaCode, FaServer, FaMobileAlt, FaCloud, FaTerminal, FaEnvelope,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiVite, SiPostman, SiRedux } from "react-icons/si";

// Use these keys in content.js. To add one, import the icon above and add a line below.
const icons = {
    react: FaReact, node: FaNodeJs, html: FaHtml5, css: FaCss3Alt, javascript: FaJs, git: FaGitAlt, github: FaGithub,
    figma: FaFigma, database: FaDatabase, linkedin: FaLinkedinIn, instagram: FaInstagram, whatsapp: FaWhatsapp,
    twitter: FaTwitter, design: FaPalette, pen: FaPenNib, code: FaCode, server: FaServer, mobile: FaMobileAlt,
    cloud: FaCloud, terminal: FaTerminal, email: FaEnvelope,
    tailwind: SiTailwindcss, mongodb: SiMongodb, express: SiExpress, typescript: SiTypescript, vite: SiVite,
    postman: SiPostman, redux: SiRedux,
};

export const getIcon = (key) => icons[(key || "").toLowerCase()] || FaCode;