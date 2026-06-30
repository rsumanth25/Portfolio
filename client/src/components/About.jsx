import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaCertificate,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaFolderOpen />,
    value: "10+",
    title: "Projects Completed",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaCertificate />,
    value: "8+",
    title: "Certifications Earned",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCode />,
    value: "250+",
    title: "Coding Problems",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaBriefcase />,
    value: "3",
    title: "Internships & Leadership",
    color: "from-orange-500 to-red-500",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-20 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-lg font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-5">
             More About Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Passionate about building scalable software,
            AI-powered applications, and modern web experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start max-w-6xl mx-auto">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
          >

            <h3 className="text-3xl font-bold mb-6">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-9 mb-6">
              I'm <span className="text-blue-400 font-semibold">Rayeni Sumanth Reddy</span>,
              an aspiring Software Engineer with a strong interest in Full Stack
              Development, Artificial Intelligence, and scalable software
              systems. I enjoy solving real-world problems by building
              high-quality applications using modern technologies.
            </p>

            <p className="text-gray-300 leading-9 mb-6">
              I have experience developing projects using React, Node.js,
              Express.js, Java, Python, MongoDB and MySQL. My interests
              also extend to AI, Machine Learning, Blockchain and Cloud
              Computing.
            </p>

            <p className="text-gray-300 leading-9 mb-6">
              Currently, I am working as a Software Development Intern at
              Quinterra Software Solutions, where I contribute to full-stack
              application development while continuously expanding my
              expertise in software engineering.
            </p>

            

          </motion.div>

          {/* Right */}

         <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">

            {stats.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-5`}
                >
                  {item.icon}
                </div>

                <h3 className="text-4xl font-black">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;