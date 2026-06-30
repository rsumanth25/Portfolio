import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

function CertificateCard({ certificate, index }) {
  const Icon = certificate.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:border-blue-500/40
      transition-all
      duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, ${certificate.color}, transparent)`,
        }}
      />

      {/* Content */}

      <div className="p-6">

        {/* Icon */}

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: `${certificate.color}20`,
          }}
        >
          <Icon
            size={34}
            color={certificate.color}
          />
        </div>

        {/* Issuer */}

        <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
          {certificate.issuer}
        </p>

        {/* Title */}

        <h3 className="text-xl font-bold text-white mt-2">
          {certificate.title}
        </h3>

        {/* Subtitle */}

        <p className="text-gray-400 mt-2 text-sm">
          {certificate.subtitle}
        </p>

        {/* Verified */}

        <div className="flex items-center gap-2 mt-5 text-green-400 text-sm">

          <FaCheckCircle />

          Verified Credential

        </div>

        {/* Button */}

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-blue-400
          hover:text-white
          transition
          "
        >
          View Credential

          <FaExternalLinkAlt size={12} />

        </a>

      </div>

      {/* Glow */}

      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition duration-500"
        style={{
          background: certificate.color,
        }}
      />
    </motion.div>
  );
}

export default CertificateCard;