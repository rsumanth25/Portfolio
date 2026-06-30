import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaHeart,
} from "react-icons/fa";
const navigation = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Education", href: "#academics" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/rsumanth25",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/rayeni-sumanth-reddy",
    icon: <FaLinkedin />,
  },
  {
    title: "Email",
    href: "mailto:rayenisumanthreddy@gmail.com",
    icon: <FaEnvelope />,
  },
  
];

function Footer() {
  return (
    <footer className="relative bg-[#050816] border-t border-white/10 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Navigation */}

         {/* Navigation */}

<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-white font-semibold text-lg mb-4">
    Navigation
  </h3>

  <div className="grid grid-cols-2 gap-x-8 gap-y-3">

    <a
      href="#home"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Home
    </a>

    <a
      href="#skills"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Skills
    </a>

    <a
      href="#about"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      About
    </a>

    <a
      href="#projects"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Projects
    </a>

    <a
      href="#academics"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Education
    </a>

    <a
      href="#contact"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Contact
    </a>

    <a
      href="#experience"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      Experience
    </a>

  </div>
</motion.div>
          {/* Middle */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white">
            Let's Build Something Amazing 🚀
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Passionate about building scalable software,
              creating seamless user experiences,
              and leveraging AI to solve real-world problems.
            </p>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h3 className="text-white font-semibold text-lg mb-4">
              Connect
            </h3>

            <div className="space-y-3">

              {socialLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:justify-end items-center gap-3 text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  {item.icon}
                  {item.title}
                </a>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using React • Tailwind CSS • Framer Motion
          </p>

          <p className="text-gray-500 text-sm text-center">
            © 2026 Sumanth Reddy Rayeni. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;