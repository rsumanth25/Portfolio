import { motion } from "framer-motion";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/10 blur-[170px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-purple-600/10 blur-[170px] rounded-full" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            PROJECTS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Some Things I've{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A collection of full-stack, AI and software engineering projects
            demonstrating modern technologies and real-world problem solving.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;