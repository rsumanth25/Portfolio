import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";

const education = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Cyber Security",
    institute: "CMR Institute of Technology, Hyderabad",
    duration: "2022 – 2026",
    score: "CGPA: 8.32 / 10",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaUniversity />,
    title: "Intermediate (MPC)",
    subtitle: "Board of Intermediate Education",
    institute: "Sri Chaitanya Junior College, Hyderabad",
    duration: "2020 – 2022",
    score: "94.2%",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaSchool />,
    title: "Secondary School (SSC)",
    subtitle: "State Board, Telangana",
    institute: "Dr. KKR Gowtham School, Bachupally",
    duration: "2019 – 2020",
    score: "CGPA: 10 / 10",
    color: "from-green-500 to-emerald-500",
  },
];

function Academics() {
  return (
    <section
      id="academics"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Academic Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My educational background and academic achievements.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10"></div>

          <div className="space-y-10">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="relative flex gap-8"
              >

                {/* Icon */}

                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl shrink-0 z-10`}
                >
                  {item.icon}
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-blue-400 mt-1">
                        {item.subtitle}
                      </p>

                      <p className="text-gray-300 mt-4">
                        {item.institute}
                      </p>

                    </div>

                    <div className="mt-5 lg:mt-0 text-left lg:text-right">

                      <p className="text-gray-400">
                        {item.duration}
                      </p>

                      <p className="text-xl font-bold text-white mt-2">
                        {item.score}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Academics;