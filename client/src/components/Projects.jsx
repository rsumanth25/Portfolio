import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Caesar Cipher Tool',
      desc: 'Encrypt and decrypt text using Caesar cipher in JS.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rsumanth25/ceasar-ciper-tool',
    },
    {
      title: 'Mental Health Chatbot',
      desc: 'Flask chatbot with NLP and MySQL journaling.',
      tech: ['Python', 'Flask', 'NLP'],
      github: 'https://github.com/rsumanth25/Mental-Health-Chatbot',
    },
    {
      title: 'Text Sentiment Analysis',
      desc: 'ML model to classify text sentiment.',
      tech: ['Python', 'scikit-learn', 'NLTK'],
      github: 'https://github.com/rsumanth25/text-sentiment-analysis',
    },
  ];

  return (
    <section
  id="projects"
  className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
>

      <h2 className="text-3xl font-bold text-blue-600 dark:text-white text-center mb-10">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{p.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 text-sm rounded">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
