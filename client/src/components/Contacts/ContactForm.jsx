import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_qq9s9mx", // Service ID
        "template_kay8id1", // Template ID
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "7rpnWgsC-3oZsd3VQ" // Public Key
      );

      alert("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-2xl font-bold text-white">
        Send a Message
      </h3>

      <p className="text-gray-400 mt-3 mb-6">
        Have a project, internship, or full-time opportunity?
        I'd love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            text-white
            placeholder-gray-500
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            text-white
            placeholder-gray-500
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />

        <input
          type="text"
          name="subject"
          required
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            text-white
            placeholder-gray-500
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />

        <textarea
          rows={4}
          name="message"
          required
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            text-white
            placeholder-gray-500
            resize-none
            focus:border-blue-500
            focus:outline-none
            transition
          "
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            py-3
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-3
            hover:shadow-lg
            hover:shadow-blue-500/40
            transition
          "
        >
          {loading ? "Sending..." : "Send Message"}

          <FaPaperPlane />
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactForm;