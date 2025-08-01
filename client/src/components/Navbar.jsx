import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-white cursor-pointer" onClick={() => scrollTo("home")}>
          Rayeni Sumanth Reddy
        </h1>
        <ul className="flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
          {["Home", "About", "Projects","Certificates", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </li>
            
          ))}
          
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
