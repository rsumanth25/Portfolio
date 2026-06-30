import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CTAButtons from "./CTAButtons";
import SocialLinks from "./SocialLinks";

function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      {/* Availability Badge */}

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-8">

        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

        <span className="text-gray-300 text-sm">
          Available for new opportunities • Open to Relocation
        </span>

      </div>

      {/* Heading */}
<h1 className="text-[40px] lg:text-[60px] font-extrabold leading-[0.9] tracking-[-1px]">

        <span className="text-white">
          Hi, I'm
        </span>

        <br />
        <span className="text-white">
          Rayeni
        </span>
   <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">

        Sumanth Reddy 

        </span>

     

        

      </h1>

      {/* Typewriter */}

      <div className="mt-8 text-2xl font-semibold text-white">

        <TypeAnimation
          sequence={[
            "Aspiring Software Engineer",2000,
            "Full Stack Developer",2000,
            "AI & ML Enthusiast",2000,
          ]}
          repeat={Infinity}
          cursor
        />

      </div>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

        Passionate Software Engineer specializing in Full Stack Development,
        Artificial Intelligence and scalable software systems. I build modern,
        high-performance applications using React, Node.js, Java and Python,
        while continuously exploring AI-driven technologies.

      </p>

      {/* Buttons */}

      <div className="mt-10">

        <CTAButtons />

      </div>

      {/* Social */}

      <div className="mt-10">

        <SocialLinks />

      </div>

    </motion.div>
  );
}

export default HeroLeft;