import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const experience = {
  company: "Quinterra Software Solutions",
  role: "Software Development Intern",
  duration: "Mar 2026 – Present",
  location: "Hyderabad, India",

  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "Typescript",
    "Javascript",
    "MongoDB",
    "REST APIs",
    "Git",
  ],

  achievements: [
    "Developed responsive marketplace modules using React, TypeScript, Context API, React Router, and Axios, translating Figma designs into reusable, production-ready components",
"Built and integrated RESTful APIs using Node.js, Express.js, MongoDB, and JWT authentication to implement secure user authentication, cart management, and order processing workflows",
"Collaborated in Agile team with the engineering manager to analyze client requirements, conduct product research, prepare technical documentation, and deliver iterative software enhancements using GitLab.",
"Contributed to backend administration modules by implementing product management features and supporting API-driven workflows across multiple internal web applications",
"Independently designed and developed a full-stack media marketplace application to strengthen practical software engineering skills and gain hands-on experience across the complete development lifecycle.",
  ]
};

function Experience() {
  return (
    <section
      id="experience"
      className="py-16 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-3 text-base">
            Building scalable applications and gaining real-world software engineering experience.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative pl-20"
          >

            {/* Timeline Icon */}

            <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/40">

              <FaBriefcase className="text-lg" />

            </div>

            {/* Card */}

            <motion.div
              whileHover={{
                y: -8,
                transition: { duration: .3 }
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >

              <div className="flex flex-col lg:flex-row justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="text-blue-400 text-xl mt-2">
                    {experience.company}
                  </p>

                </div>

                <div className="mt-6 lg:mt-0 text-gray-400">

                  <div className="flex items-center gap-2 mb-2">

                    <FaCalendarAlt />

                    {experience.duration}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaMapMarkerAlt />

                    {experience.location}

                  </div>

                </div>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-8">

                {experience.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Responsibilities */}

              <ul className="mt-6 space-y-3">
  {experience.achievements.map((item, index) => (
    <li key={index} className="flex items-start gap-3 text-gray-300">
      <span className="text-blue-400 mt-1">▹</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

              {/* Icons */}

              <div className="flex gap-4 mt-6 text-2xl text-blue-400">

                <FaReact />

                <FaNodeJs />

                <SiExpress />

                <SiMongodb />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;