import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import profile from "../../assets/SumanthReddy.jpeg";
import FloatingBadges from "./FloatingBadges";
function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-[430px] h-[430px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-[120px]"
      />

      {/* Floating Card */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="relative"
      >
        <div className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">

          <img
            src={profile}
            alt="Sumanth"
            className="w-[360px] h-[480px] object-cover rounded-[28px]"
          />
<FloatingBadges />
          {/* Bottom Card */}

          <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-5">

            <h3 className="text-white font-bold text-xl">
              Rayeni Sumanth Reddy
            </h3>

            <p className="text-gray-300 mt-2 text-sm">
              Aspring Software Engineer, Full Stack Developer
            </p>

            <div className="absolute right-5 top-5">

              <span className="flex h-3 w-3">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400"></span>

                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>

              </span>

            </div>

          </div>

        </div>

        {/* Floating React */}

        

        {/* Floating Node */}

        </motion.div>
        </motion.div>
  );
}

export default HeroImage;