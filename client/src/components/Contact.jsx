import { useState } from "react";
import { motion } from "framer-motion";


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://portfolio-bilw.onrender.com/send", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
  } catch (error) {
    alert("⚠️ Server error. Please check your internet or try again later.");
    console.error(error);
  }
};


  return (
    <section
  id="contact"
  className="bg-white dark:bg-gray-900 py-20 px-6 text-center"
>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto text-left bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      <motion.div
    className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* your contact form here */}
  </motion.div>
</section>
  );
}

export default Contact;
