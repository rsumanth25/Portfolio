import { motion } from "framer-motion";
import {
  FaHtml5, FaJs, FaPython, FaJava, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaTerminal
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";



const skills = [
  {
    title: "Languages",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaTerminal />, name: "C" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ]
  },
  {
    title: "Databases",
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ]
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-10">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <span className="text-sm mt-1">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
