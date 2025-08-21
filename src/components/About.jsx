import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Play,
  Users,
  Award,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TextType from "../shared/TextType";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const achievements = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: Award,
      value: "150+",
      label: "Projects Done",
      color: "text-purple-600",
    },
    { icon: Zap, value: "99%", label: "Success Rate", color: "text-blue-600" },
    { icon: Globe, value: "50+", label: "Countries", color: "text-purple-600" },
  ];

  return (
    <section
      id="about"
      className="py-12 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full animate-pulse"></div>
        <div
          className="absolute top-60 right-20 w-24 h-24 bg-purple-100 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-50 to-blue-50 transform rotate-45 animate-spin"
          style={{ animationDuration: "20s", animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      <div className="px-8 lg:mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Right Content - Mobile First (Order 1) */}
            <div
              className={`mt-12 lg:mt-0 order-1 lg:order-2 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Section Badge */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm border-b-2 border-blue-100 pb-1">
                    About Us
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"></div>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 my-8 leading-tight">
                About
                <span className="">
                  <TextType
                    text={["NexFolio"]}
                    typingSpeed={80}
                    pauseDuration={1500}
                    deletingSpeed={50}
                    showCursor={true}
                    cursorCharacter="_"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3"
                    textColors={["blue-600", "purple-600", "blue-600"]}
                    cursorClassName="text-secondary"
                    startOnVisible={true}
                  />
                </span>
              </h2>

              {/* Description with Enhanced Styling */}
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a{" "}
                  <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-lg">
                    passionate team
                  </span>{" "}
                  of designers, developers, and digital strategists dedicated to
                  creating exceptional digital experiences. Our mission is to
                  help businesses thrive in the digital landscape through
                  innovative solutions and cutting-edge technology.
                </p>

                {/* Additional Content Card */}
                <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500">
                  <p className="text-gray-700 leading-relaxed flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    We transform complex challenges into elegant solutions,
                    combining creativity with technical expertise to deliver
                    results that exceed expectations.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                      onMouseEnter={() =>
                        setHoveredElement(`achievement-${index}`)
                      }
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-800">
                            {achievement.value}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            {achievement.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden font-semibold"
                  onMouseEnter={() => setHoveredElement("cta-primary")}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More About Us
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group bg-white text-gray-700 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 text-blue-600" />
                  Watch Our Story
                </button>
              </div>
            </div>

            {/* Left Content - Image/Visual (Order 2) */}
            <div
              className={`relative order-2 lg:order-1 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="w-5/6 lg:w-4/6 z-2 mx-auto lg:mx-0 group">
                {/* Main Image Container */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-700"
                  ref={imageRef}
                >
                  <img
                    className="z-10 relative w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/about-1.jpg"
                    alt="About NexFolio Team"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="hidden lg:flex absolute lg:w-4/6 h-full -top-10 left-16 border-8 border-blue-600 rounded-2xl p-5 z-0 transition-all duration-500 group-hover:border-purple-600 group-hover:scale-105"></div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-6 hover:rotate-0 transition-all duration-500 z-30 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-500 font-medium">Years</div>
                  <div className="text-xs text-gray-400">Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-6 hover:rotate-0 transition-all duration-500 z-30 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-500 font-medium">
                    Support
                  </div>
                  <div className="text-xs text-gray-400">Available</div>
                </div>
              </div>

              {/* Geometric Decorations */}
              <div
                className="absolute top-20 -left-8 w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-70 animate-bounce hidden lg:block"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-24 -right-8 w-12 h-12 bg-gradient-to-r from-purple-200 to-blue-200 transform rotate-45 opacity-70 animate-pulse hidden lg:block"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Additional floating elements */}
              <div
                className="absolute top-32 -right-4 w-8 h-8 bg-blue-100 rounded-full animate-ping hidden lg:block"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-40 -left-4 w-6 h-6 bg-purple-100 rounded-full animate-ping hidden lg:block"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
