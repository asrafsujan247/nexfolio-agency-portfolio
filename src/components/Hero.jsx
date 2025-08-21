import React, { useState } from "react";
import HeroImage from "/agency-office-demo.jpg";
import { ChevronRight, Play } from "lucide-react";

/**
 * The Hero component is the main section of the homepage. It displays a background with a gradient and a title, a tagline, and a call-to-action.
 * It also contains a floating image with a gradient and a shadow.
 * The component makes use of Tailwind CSS utility classes to style the elements.
 * The components uses React Hooks to manage state and side-effects.
 */

const Hero = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 max-w-[1400px] mx-auto"
    >
      <div className="px-8 lg:my-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              We Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                Digital Excellence
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with cutting-edge web solutions, stunning
              designs, and innovative digital strategies that drive results.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden font-semibold"
                onMouseEnter={() => setHoveredElement("cta-primary")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group bg-white text-gray-700 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold flex items-center justify-center">
                <Play className="mr-2 w-5 h-5 text-blue-600" />
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mb-10 lg:mb-0">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-4">
                  <div className="w-full h-52 rounded-lg flex items-center justify-center">
                    <img
                      src={HeroImage}
                      className="w-full h-full object-cover rounded-2xl"
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
