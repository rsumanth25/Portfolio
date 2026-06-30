import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/10 blur-[170px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-purple-600/10 blur-[170px] rounded-full" />

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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            CONTACT
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Open to Software Engineering, Full Stack Development,
            AI/ML opportunities, freelance projects and collaborations.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 items-start">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}

export default Contact;