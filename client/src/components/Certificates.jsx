import React from 'react';

const certificates = [
  {
    title: "Google CyberSecurity",
    link: "https://drive.google.com/file/d/1oqUnaHP4pQgYtjfHM5GBbs8MJmkQEmF8/view?usp=drive_link"
  },
  {
    title: "Data Analytics and Data Visualization - Accenture",
    link: "https://drive.google.com/file/d/1FfuL25IvwnqdZtOCEN1IBV3MXwZ5F7dR/view?usp=drive_link"
  },
  {
    title: "Advance Software engineer - Walmart",
    link: "https://drive.google.com/file/d/1AODNrNSzNWp-FDKMf02K72sUANDHusaB/view?usp=drive_link"
  },
  
  // Add more certificates here
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-10">Certificates</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
