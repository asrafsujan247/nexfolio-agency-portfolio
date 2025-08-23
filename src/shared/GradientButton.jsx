import { ChevronRight, CloudCog } from "lucide-react";
import { useState } from "react";

const GradientButton = ({ children }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <button
      className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden font-semibold"
      onMouseEnter={() => setHoveredElement("cta-primary")}
      onMouseLeave={() => setHoveredElement(null)}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default GradientButton;
