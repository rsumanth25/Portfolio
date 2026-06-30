import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

const activities = [
  {
    year: "2026",
    title: "AI/ML Virtual Intern",
    company: "Infosys Springboard 6.0",
    duration: "Feb 2026 – Apr 2026",
    location: "Remote",
    icon: <FaLaptopCode />,
    certificate:
      "https://drive.google.com/file/d/1SWOmID2mEnMV83Bj4qg7vSD0IaesSIPO/view",
    points: [
      "Developed a web application for comparing product prices across multiple e-commerce platforms using modern web technologies.",
      "Participated in the complete software development lifecycle, including requirement analysis, application development, testing, and documentation.",
      "Strengthened skills in problem-solving, full-stack development concepts, and collaborative software engineering practices.",
    ]
  },
  {
    year: "2025",
    title: "Tech Lead",
    company: "Vishwam AI – Summer of AI",
    duration: "May 2025 – Jul 2025",
    location: "Hybrid",
    icon: <FaUsers />,
    certificate:
      "https://drive.google.com/file/d/1sGG0vWDK0ILG5hWxjL9Ddk9MT66u8N45/view",
    points: [
      "Led a student team in designing and implementing AI-based solutions as part of an 8-week collaborative program.",
      "Coordinated task planning, technical discussions, and solution development while working with team members in an Agile environment.",
      "Explored practical applications of Generative AI and machine learning by building AI-driven solutions and presenting project outcomes.",
    ]
  }
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-14"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            Leadership
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Leadership experiences, internships and programs that shaped my
            engineering journey.
          </p>

        </motion.div>

        <div className="relative border-l border-gray-700 ml-4">

          {activities.map((item,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,x:-40}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="relative mb-12 ml-10"
            >

              <div className="absolute -left-[58px] top-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg p-6 hover:border-blue-500 transition">

                <div className="flex justify-between items-start flex-wrap gap-3">

                  <div>

                    <span className="text-blue-400 text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-1">
                      {item.title}
                    </h3>

                    <p className="text-purple-400">
                      {item.company}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.duration} • {item.location}
                    </p>

                  </div>

                  <FaAward className="text-3xl text-purple-400"/>
                </div>

                <ul className="mt-5 space-y-3">

                  {item.points.map((point,i)=>(
                    <li
                      key={i}
                      className="flex gap-3 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1">▹</span>
                      {point}
                    </li>
                  ))}

                </ul>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
                >
                  <FaExternalLinkAlt size={12}/>
                  View Certificate
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}