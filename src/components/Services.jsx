import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  Check,
  ExternalLink,
  Zap,
  Users,
  Globe,
} from "lucide-react";

// Mock SpotlightCard component since you have it separately
const SpotlightCard = ({ children, className, spotlightColor }) => {
  return <div className={`relative group ${className}`}>{children}</div>;
};

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Cross-browser Compatible",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that provide exceptional user experiences and drive conversions.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless performance.",
      features: [
        "React Native",
        "Native Development",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      features: [
        "SEO Strategy",
        "Social Media",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern web applications.",
      features: [
        "AWS/Azure Setup",
        "DevOps",
        "CI/CD Pipelines",
        "Performance Monitoring",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions about your digital transformation.",
      features: [
        "Technology Audit",
        "Strategic Planning",
        "Architecture Design",
        "Best Practices",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-20 w-40 h-40 bg-blue-100 rounded-full animate-pulse"></div>
        <div
          className="absolute top-96 right-32 w-32 h-32 bg-purple-100 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-64 left-1/3 w-28 h-28 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-50 to-blue-50 transform rotate-45 animate-spin"
          style={{ animationDuration: "25s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-20 h-20 bg-green-100 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section Badge */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm border-b-2 border-blue-100 pb-1">
                Our Services
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 w-20"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We offer comprehensive digital solutions to help your business
              thrive in the modern digital landscape. From concept to
              deployment, we've got you covered.
            </p>

            {/* Enhanced subtitle */}
            <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-6 border border-blue-100 shadow-sm inline-block">
              <p className="text-gray-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                Transforming ideas into digital excellence
              </p>
            </div>
          </div>
        </div>

        {/* Beautiful Services Grid */}
        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Grid Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <SpotlightCard
                  className="custom-spotlight-card h-full group"
                  spotlightColor="rgba(184,230,254,0.8)"
                >
                  <div
                    className="relative h-full rounded-3xl p-8 bg-white border-2 border-gray-100 hover:border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Vibrant Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-3xl"></div>

                    {/* Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-t-3xl"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon Container with Enhanced Design */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          {service.icon}
                        </div>

                        {/* Glowing ring effect */}
                        <div className="absolute inset-0 w-20 h-20 border-4 border-blue-200 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>

                        {/* Floating badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 shadow-lg">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        {/* Enhanced Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {service.title}
                        </h3>

                        {/* Enhanced Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {service.description}
                        </p>

                        {/* Enhanced Features List */}
                        <ul className="space-y-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300"
                              style={{
                                transitionDelay: `${featureIndex * 100}ms`,
                              }}
                            >
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-500 group-hover:to-purple-600 rounded-lg flex items-center justify-center mr-4 transform group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                <Check className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                              </div>
                              <span
                                className="group-hover:translate-x-2 transition-transform duration-300 font-medium"
                                style={{
                                  transitionDelay: `${featureIndex * 100}ms`,
                                }}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Beautiful CTA Button */}
                      <button
                        type="button"
                        className="group/btn relative w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>

                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>

                    {/* Enhanced corner decorations */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 animate-pulse"></div>
                    <div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-50 group-hover:scale-100"
                      style={{ transitionDelay: "300ms" }}
                    ></div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          {/* Grid Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced CTA Section - About Section Style */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Text Section */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Section Badge */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm border-b-2 border-blue-100 pb-1">
                      Custom Solutions
                    </span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"></div>
                </div>

                {/* Main Title */}
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Need a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Custom Solution?
                  </span>
                </h3>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We'd love to discuss your project and create a{" "}
                    <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-lg">
                      tailored solution
                    </span>{" "}
                    that perfectly fits your business needs and goals.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500">
                    <p className="text-gray-700 leading-relaxed flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      From initial consultation to final deployment, our expert
                      team guides you through every step of your digital
                      transformation journey.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer group text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Users className="w-full h-full text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">500+</div>
                    <div className="text-xs text-gray-500 font-medium">
                      Projects Delivered
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer group text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Zap className="w-full h-full text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-xs text-gray-500 font-medium">
                      Client Satisfaction
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer group text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Globe className="w-full h-full text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">24/7</div>
                    <div className="text-xs text-gray-500 font-medium">
                      Support Available
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                    <span className="flex items-center justify-center">
                      Get Custom Quote
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  <button className="group bg-white text-gray-700 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold flex items-center justify-center">
                    <ExternalLink className="mr-2 w-5 h-5 text-blue-600" />
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* Right Content - Visual Section */}
              <div className="relative order-1 lg:order-2 group">
                <div className="relative w-5/6 lg:w-4/6 mx-auto lg:mx-0">
                  {/* Main Visual Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                    <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 p-12 aspect-square flex items-center justify-center">
                      {/* Central Icon */}
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                          <svg
                            className="w-16 h-16"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>

                        {/* Floating elements around central icon */}
                        <div
                          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 shadow-lg animate-bounce"
                          style={{ animationDelay: "1s" }}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </div>

                        <div
                          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-50 group-hover:scale-100 shadow-lg animate-pulse"
                          style={{ transitionDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Decorative Border */}
                  <div className="hidden lg:block absolute lg:w-4/6 h-full -top-10 left-16 border-8 border-blue-600 rounded-2xl p-5 z-0 transition-all duration-500 group-hover:border-purple-600 group-hover:scale-105"></div>
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-6 hover:rotate-0 transition-all duration-500 z-30 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">Free</div>
                    <div className="text-sm text-gray-500 font-medium">
                      Consultation
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-6 hover:rotate-0 transition-all duration-500 z-30 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      Fast
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Delivery
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
