import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex justify-between items-center mt-6">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaGithub />
            Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              Live
              <FaExternalLinkAlt size={13} />
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;