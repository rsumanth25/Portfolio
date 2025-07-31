import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

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
    link: "tel:+919876543210",
  },
  {
    label: "Location",
    value: "Hyderabad, India",
    icon: <FaMapMarkerAlt />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sumanth-reddy",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/rayeni-sumanth-reddy",
  },
  {
    label: "GitHub",
    value: "github.com/rsumanth25",
    icon: <FaGithub />,
    link: "https://github.com/rsumanth25",
  },
];

function ContactInfo() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">Contact Information</h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow p-4 rounded-lg hover:shadow-md transition"
          >
            <div className="text-blue-600 text-xl">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">{item.label}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
