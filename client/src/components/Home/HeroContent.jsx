import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Available Badge */}
      <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 backdrop-blur-md">
        <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-sm text-emerald-300 font-medium">
          Available for Opportunities
        </span>
      </div>

      {/* Heading */}
      

      {/* Type Animation */}
      

      {/* Description */}
      <p className="mt-6 max-w-3xl text-xl leading-10 text-gray-300">
        Passionate Software Engineer specializing in Full Stack Development,
        Artificial Intelligence and scalable software systems. I build
        high-performance web applications with modern technologies while
        continuously exploring AI-driven solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-5">

        <a
          href="#projects"
          className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
        >
          View Projects
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </a>

       

        <a
          href="#contact"
          className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 backdrop-blur-md hover:border-purple-500 transition"
        >
          Contact
        </a>

      </div>

      {/* Social Icons */}
      <div className="flex gap-5 pt-3">

        <a
          href="https://github.com/rsumanth25"
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 transition"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 transition"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="mailto:rayenisumanthreddy@gmail.com"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 transition"
        >
          <FaEnvelope size={20} />
        </a>

      </div>
    </motion.div>
  );
}

export default HeroContent;