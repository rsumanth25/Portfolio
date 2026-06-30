import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#070B18]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        -left-40
        top-10
        h-[650px]
        w-[650px]
        rounded-full
        bg-blue-600/20
        blur-[170px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        -right-40
        top-28
        h-[700px]
        w-[700px]
        rounded-full
        bg-purple-600/25
        blur-[190px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute
        bottom-[-250px]
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[900px]
        rounded-full
        bg-pink-500/10
        blur-[180px]"
      />
    </div>
  );
}

export default HeroBackground;