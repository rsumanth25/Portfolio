import { motion } from "framer-motion";
import { certificates } from "./certificatesData";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <section
      id="certificates"
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
            CERTIFICATIONS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise in
            Software Engineering, Cloud Computing, Full Stack Development,
            Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* Certificates */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;