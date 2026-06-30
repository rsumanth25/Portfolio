import { motion } from "framer-motion";
import { skills } from "./skillsData";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full" />

      {/* Grid */}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white">
            Technologies{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Technologies, frameworks and tools I use to build modern
            full-stack applications, AI solutions and scalable software.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="space-y-16">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              {/* Category Title */}

              <div className="flex items-center gap-4 mb-8">

                <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500" />

                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-6">

                {category.items.map((skill) => (

                  <SkillCard
                    key={skill.name}
                    {...skill}
                  />

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;