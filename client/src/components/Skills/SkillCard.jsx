import { motion } from "framer-motion";

function SkillCard({ name, icon: Icon, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.08,
        rotate: 2,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
      }}
      className="group relative flex flex-col items-center justify-center
      w-28 h-28 rounded-2xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      hover:border-blue-500/40
      hover:bg-white/10
      transition-all duration-300
      overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
        style={{
          background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <Icon
        size={42}
        color={color}
        className="relative z-10 mb-3 transition duration-300 group-hover:scale-125"
      />

      {/* Name */}
      <span className="relative z-10 text-sm text-gray-200 font-medium text-center">
        {name}
      </span>
    </motion.div>
  );
}

export default SkillCard;