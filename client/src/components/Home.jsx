import { motion } from "framer-motion";

import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
   <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>
  {/* Decorative circles */}
  <div className="absolute top-10 left-10 w-60 h-60 bg-blue-300 opacity-30 blur-3xl rounded-full z-0"></div>
  <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-300 opacity-30 blur-3xl rounded-full z-0"></div>

  {/* Main content */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center z-10"
  >
    <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-white mb-4">
      Hi, I’m Sumanth Reddy 👋
    </h1>

    <TypeAnimation
      sequence={[
        'Web Developer 💻', 2000,
        'Cybersecurity Learner 🔐', 2000,
        'Project Builder 🚀', 2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
      style={{ display: 'inline-block', marginTop: '1rem' }}
    />

    <a
      href="#projects"
      className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      View My Work
    </a>
  </motion.div>
</section>

  );
}

export default Home;
