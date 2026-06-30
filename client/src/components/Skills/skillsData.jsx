import {
  SiReact,
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiFlask,

  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiVercel,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaPython } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

export const skills = [
  {
  title: "Frontend",
  items: [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#8B5CF6" },
  ],
},

  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
    ],
  },

  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C", icon: FaCode, color: "#00BFFF" },
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
    ],
  },

  {
    title: "AI / ML",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Pandas", icon: SiPandas, color: "#ffffff" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Scikit Learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];