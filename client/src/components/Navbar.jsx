import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Leadership", href: "#leadership" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">

      <nav
        className="
        w-[92%]
        max-w-7xl
        bg-[#0B1220]/75
        backdrop-blur-xl
        border
        border-white/10
        rounded-full
        px-8
        py-4
        shadow-2xl
        "
      >

        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              SR
            </div>

            <h2 className="text-2xl font-bold text-white">
              Sumanth
              <span className="text-purple-400">Reddy</span>
            </h2>
          </a>

          {/* Navigation */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-5">

            

            <a
              href="#contact"
              className="
              px-7
              py-3
              rounded-full
              text-white
              font-semibold
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              hover:scale-105
              duration-300
              "
            >
              Let's Talk
            </a>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;