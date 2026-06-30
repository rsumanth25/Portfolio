import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaCode,
  FaFolderOpen,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: 250,
    suffix: "+",
    title: "Coding Problems",
    color: "text-cyan-400",
  },
  {
    icon: <FaFolderOpen />,
    number: 10,
    suffix: "+",
    title: "Projects",
    color: "text-purple-400",
  },
  {
    icon: <FaCertificate />,
    number: 8,
    suffix: "+",
    title: "Certifications",
    color: "text-pink-400",
  },
  {
    icon: <FaBriefcase />,
    number: 3,
    suffix: "",
    title: "Experience & Programs",
    color: "text-green-400",
  },
];

function HeroStats() {
  return (
    <section className="relative -mt-20 z-30 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-2xl"
            >

              <div
                className={`text-5xl mb-5 flex justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-5xl font-black text-white">

                <CountUp
                  end={item.number}
                  duration={2.5}
                />

                {item.suffix}

              </h2>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HeroStats;