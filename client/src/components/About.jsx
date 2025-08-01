import { motion } from 'framer-motion';
import profilePic from '../assets/sumanth.jpg'; // Add your photo

function About() {
  return (
    <section
  id="about"
  className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
>
  <motion.div
    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img src={profilePic} alt="Sumanth Reddy" className="w-full rounded-xl shadow-lg" />
    <div>
      <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I'm Rayeni Sumanth Reddy, a Cybersecurity and web dev enthusiast from Hyderabad.
        I build secure tools and solve real-world problems through code.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
          With hands-on experience in Python, Java, and web development, I’ve worked on projects like encryption tools, chatbots, and visualizers.
          I’m always looking to explore real-world security problems and build solutions that are impactful and user-friendly.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          My toolkit includes technologies like Flask, Node.js, MongoDB, MySQL, and tools like Wireshark and SIEM platforms.
          I’m eager to contribute to innovative teams and continuously grow as a developer and security engineer.
        </p>
      <a
    href="https://drive.google.com/file/d/your_file_id/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
  >
    📄 View Resume
  </a>
      
    </div>
  </motion.div>
</section>

  );
}

export default About;
