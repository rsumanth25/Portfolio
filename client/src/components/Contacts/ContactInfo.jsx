import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

const contactDetails = [
  {
    label: "Email",
    value: "rayenisumanthreddy@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:rayenisumanthreddy@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9133006212",
    icon: <FaPhone />,
    link: "tel:+919133006212",
  },
  {
    label: "GitHub",
    value: "github.com/rsumanth25",
    icon: <FaGithub />,
    link: "https://github.com/rsumanth25",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rayeni-sumanth-reddy",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/rayeni-sumanth-reddy",
  },
  
  {
    label: "Location",
    value: "Hyderabad, Telangana, India",
    icon: <FaMapMarkerAlt />,
  },
];

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4"
    >
      <h3 className="text-1xl font-bold text-white">
        Reach Out
      </h3>

      <p className="text-gray-400 mt-3 mb-6">
        Open to internships, full-time roles,
        freelance projects and collaborations.
      </p>

      <div className="space-y-3">

        {contactDetails.map((item, index) => (

          <motion.a
            key={index}
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              x: 8,
            }}
            className="
            flex
            items-center
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            hover:border-blue-500/40
            hover:bg-blue-500/10
            transition-all
            duration-300
            "
          >

            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              text-lg
              "
            >
              {item.icon}
            </div>

            <div>

              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {item.label}
              </p>

              <h4 className="text-white font-semibold">
                {item.value}
              </h4>

            </div>

          </motion.a>

        ))}

      </div>
    </motion.div>
  );
}

export default ContactInfo;