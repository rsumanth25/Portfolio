import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaMicrophoneAlt,
  FaCode,
  FaRocket,
  FaCloud,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    color: "from-yellow-400 to-orange-500",
    title: "State Finalist",
    subtitle: "OpenAI Academy × NxtWave",
    description:
      "Qualified for the National Finals of the GenAI Buildathon 2025 after becoming a State Finalist.",
  },
  {
    icon: <FaMedal />,
    color: "from-blue-500 to-cyan-500",
    title: "Department Rank",
    subtitle: "Top 3",
    description:
      "Ranked 3rd in the Computer Science & Cyber Security Department during both the 7th and 8th semesters.",
  },
  {
    icon: <FaMicrophoneAlt />,
    color: "from-pink-500 to-purple-500",
    title: "Technical Paper",
    subtitle: "3rd Prize Winner",
    description:
      "Secured 3rd Prize in the Institute Technical Paper Presentation Competition.",
  },
  {
    icon: <FaCode />,
    color: "from-green-400 to-emerald-500",
    title: "250+ Problems",
    subtitle: "DSA Practice",
    description:
      "Solved 250+ coding problems across LeetCode (82) and GeeksforGeeks (168), strengthening problem-solving skills.",
  },
  {
    icon: <FaRocket />,
    color: "from-indigo-500 to-violet-500",
    title: "6+ Projects",
    subtitle: "Full Stack & AI",
    description:
      "Designed and developed full-stack web applications, AI/ML systems, and enterprise software projects.",
  },
  {
    icon: <FaCloud />,
    color: "from-sky-500 to-blue-600",
    title: "Cloud Certified",
    subtitle: "Oracle • Azure • Google",
    description:
      "Earned industry-recognized certifications in Oracle Cloud, Microsoft Azure, and Google Cloud.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-20 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            ACHIEVEMENTS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Career{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Key milestones, technical accomplishments, leadership experiences,
            and recognitions throughout my engineering journey.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition duration-500`}
              />

              {/* Icon */}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-blue-400 mt-1 font-medium">
                {item.subtitle}
              </p>

              <p className="text-gray-400 text-sm mt-4 leading-6">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;