import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

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
      const res = await fetch(
        "https://portfolio-bilw.onrender.com/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

if (res.ok) {
  alert(data.message);

  setForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} else {
  alert(data.message);
}
    } catch (err) {
      console.log(err);
      alert("⚠️ Server Error");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-2xl font-bold text-white">
        Send a Message
      </h3>

      <p className="text-gray-400 mt-3 mb-8">
        Have a project, internship or full-time opportunity?
        Feel free to reach out.
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
          bg-black/20
          border
          border-white/10
          px-4 py-3
          text-white
          placeholder-gray-500
          focus:outline-none
          focus:border-blue-500
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
          bg-black/20
          border
          border-white/10
          p-4
          text-white
          placeholder-gray-500
          focus:outline-none
          focus:border-blue-500
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
          bg-black/20
          border
          border-white/10
          p-4
          text-white
          placeholder-gray-500
          focus:outline-none
          focus:border-blue-500
          "
        />

        <textarea
          rows={5}
          name="message"
          required
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          bg-black/20
          border
          border-white/10
          p-4
          text-white
          placeholder-gray-500
          resize-none
          focus:outline-none
          focus:border-blue-500
          "
        />

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: .96,
          }}
          type="submit"
          disabled={loading}
          className="
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
          text-white
          font-semibold
          flex
          justify-center
          items-center
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