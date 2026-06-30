import { FaArrowRight, FaDownload } from "react-icons/fa";

function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-5">

      <a
        href="#projects"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-3 hover:scale-105 duration-300"
      >
        View Projects
        <FaArrowRight />
      </a>


    </div>
  );
}

export default CTAButtons;