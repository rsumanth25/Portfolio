import { motion } from "framer-motion";
import profile from "../../assets/SumanthReddy.jpeg";
import FloatingBadges from "./FloatingBadges";

function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      {/* Purple Glow */}

      <div className="absolute w-[620px] h-[620px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      {/* Outer Border */}

      <div className="relative p-4 rounded-[40px] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30">

        {/* Glass Border */}

        <div className="p-4 rounded-[34px] backdrop-blur-xl bg-white/5 border border-white/10">

          {/* Image */}

          <img
            src={profile}
            alt="Sumanth"
            className="w-[420px] h-[560px] object-cover rounded-[28px]"
          />

          {/* Bottom Card */}

          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-8 right-8 rounded-3xl bg-black/55 backdrop-blur-xl border border-white/10 p-6"
          >
            <h2 className="text-white text-2xl font-bold">
              Rayeni Sumanth Reddy
            </h2>

            <p className="text-gray-300 mt-2">
              Aspiring Software Engineer | Full Stack Developer | AI & ML Enthusiast
            </p>

            <div className="absolute right-5 top-5 w-5 h-5 rounded-full bg-green-400 animate-pulse"></div>
          </motion.div>

        </div>
      </div>

      <FloatingBadges />

    </motion.div>
  );
}

export default HeroRight;