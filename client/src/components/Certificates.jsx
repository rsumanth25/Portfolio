import { FaFilePdf } from 'react-icons/fa';

const certificates = [
  {
    title: 'Accenture: Data Analytics and Visualization',
    link: 'https://drive.google.com/file/d/1FfuL25IvwnqdZtOCEN1IBV3MXwZ5F7dR/view?usp=drive_link',
  },
  {
    title: 'Google: Cyber Security',
    link: 'https://drive.google.com/file/d/1oqUnaHP4pQgYtjfHM5GBbs8MJmkQEmF8/view?usp=drive_link',
  },
  {
    title: 'Walmart: Advance Software Engineering',
    link: 'https://drive.google.com/file/d/1AODNrNSzNWp-FDKMf02K72sUANDHusaB/view?usp=drive_link',
  },
  {
    title: 'Python Essentials - 1',
    link: 'https://drive.google.com/file/d/1AL3UnfBla_cnpD1a5Jd6zmksT6jH3u1H/view?usp=drive_link',
  },
  {
    title: 'Python Essentials - 2',
    link: 'https://drive.google.com/file/d/1iNxQnNWm2mqJfiNSD1_sDNrUDHc8ql01/view?usp=drive_link',
  },
  {
    title: 'AI Advanced',
    link: 'https://drive.google.com/file/d/1uTT5lJIr6855cTMe_GtC69sPDEtNW0YN/view?usp=drive_link',
  },
];

export default function Certificates() {
  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen" id="certificates">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-center mb-4 text-red-600 text-5xl">
              <FaFilePdf />
            </div>
            <p className="text-lg font-semibold text-gray-800">{cert.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
