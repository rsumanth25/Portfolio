import React from "react";

const certificates = [
  {
    title: "Accenture: Data Analytics and Visualization",
    img: "https://drive.google.com/uc?export=view&id=1FfuL25IvwnqdZtOCEN1IBV3MXwZ5F7dR",
    link: "https://drive.google.com/file/d/1FfuL25IvwnqdZtOCEN1IBV3MXwZ5F7dR/view?usp=drive_link",
  },
  {
    title: "Google: Cyber Security",
    img: "https://drive.google.com/uc?export=view&id=1oqUnaHP4pQgYtjfHM5GBbs8MJmkQEmF8",
    link: "https://drive.google.com/file/d/1oqUnaHP4pQgYtjfHM5GBbs8MJmkQEmF8/view?usp=drive_link",
  },
  {
    title: "Walmart: Advance Software Engineering",
    img: "https://drive.google.com/uc?export=view&id=1AODNrNSzNWp-FDKMf02K72sUANDHusaB",
    link: "https://drive.google.com/file/d/1AODNrNSzNWp-FDKMf02K72sUANDHusaB/view?usp=drive_link",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-white">
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 text-center"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-52 object-contain rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {cert.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
