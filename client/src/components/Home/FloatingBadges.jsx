import { motion } from "framer-motion";

const badges = [
  {
    text: "React",
    color: "bg-sky-500",
    top: "18%",
    left: "-8%"
  },
  {
    text: "Node.js",
    color: "bg-green-500",
    top: "28%",
    right: "-8%"
  },
  {
    text: "Java",
    color: "bg-orange-500",
    top: "65%",
    left: "-8%"
  },
  {
    text: "Python",
    color: "bg-yellow-500",
    top: "72%",
    right: "-8%"
  },
  {
    text: "MongoDB",
    color: "bg-green-600",
    bottom: "-5%",
    left: "38%"
  }
];

function FloatingBadges() {
  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={badge.text}
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity
          }}
          className={`absolute ${badge.color} px-6 py-4 rounded-2xl text-white font-semibold shadow-xl`}
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom
          }}
        >
          {badge.text}
        </motion.div>
      ))}
    </>
  );
}

export default FloatingBadges;