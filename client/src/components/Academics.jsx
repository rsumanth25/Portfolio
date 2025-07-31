import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

function Academics() {
  const education = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      degree: "Bachelor of Technology (B.Tech) - CSE - CyberSecurity",
      institution: "CMR Institute of Technology, Hyderabad",
      year: "2022 – 2026",
      grade: "8.03 CGPA",
    },
    {
      icon: <FaUniversity className="text-3xl text-green-600" />,
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      year: "2020 – 2022",
      grade: "94.2%",
    },
    {
      icon: <FaSchool className="text-3xl text-purple-600" />,
      degree: "SSC",
      institution: "Dr.KKR Gowtham School, Bachupally",
      year: "2019 – 2020",
      grade: "10 GPA",
    },
  ];

  return (
    <section id="academics" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">
        Academic Background
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 border-l-4 border-blue-500 bg-white dark:bg-gray-800 shadow rounded"
          >
            <div>{edu.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.year}</p>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Academics;
