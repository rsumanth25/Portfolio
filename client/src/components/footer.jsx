import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 text-center">
      <div className="max-w-4xl mx-auto flex justify-center space-x-6 text-2xl text-gray-600 dark:text-gray-300">
        <a href="https://github.com/rsumanth25" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:rayenisumanthreddy@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
        © {new Date().getFullYear()} Rayeni Sumanth Reddy.
      </p>
    </footer>
  );
}

export default Footer;
