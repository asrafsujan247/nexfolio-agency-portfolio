import React, { useState, useEffect } from "react";

/**
 * Header component that displays a responsive navigation bar.
 *
 * The navigation bar becomes sticky and changes its style upon scrolling.
 * It includes both desktop and mobile versions with a toggleable mobile menu.
 */
const Header = () => {
  /**
   * State to track if the page has been scrolled
   */
  const [isScrolled, setIsScrolled] = useState(false);
  /**
   * State to track if the mobile menu is open
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Effect to add a scroll event listener that updates the isScrolled state
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Navigation items for the header
   */
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? " bg-emerald-200/95 backdrop-blur-xl shadow-lg"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <div
            className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-blue-600"
            }`}
          >
            <span className="text-primary drop-shadow-sm">Nex</span>
            <span className="drop-shadow-sm">Folio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-3 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 group overflow-hidden ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-black/90 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md"
                        : "bg-white/80 backdrop-blur-sm shadow-lg"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                      isScrolled ? "bg-blue-600" : "bg-white"
                    }`}
                  ></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              className={`relative px-8 py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 group overflow-hidden ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl"
                  : "bg-gradient-to-r from-blue-700 to-blue-800 text-white border-2 border-white/30 hover:border-white/60"
              }`}
            >
              <span className="relative z-10">Get Started</span>
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-700 to-blue-800"
                    : "bg-white/20"
                }`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative p-3 rounded-xl transition-all duration-300 group ${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-300"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                isScrolled ? "bg-blue-50" : "bg-white/10 backdrop-blur-sm"
              }`}
            ></div>
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mb-4 rounded-2xl backdrop-blur-xl transition-all duration-300 transform ${
              isScrolled
                ? "bg-white/95 shadow-xl border border-gray-100"
                : "bg-gray-800/90 border border-white/10 shadow-2xl"
            }`}
          >
            <div className="p-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative block px-6 py-4 rounded-xl font-medium text-base transition-all duration-300 group overflow-hidden ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                        : "bg-white/10 backdrop-blur-sm"
                    }`}
                  ></div>
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200/20">
                <button
                  className={`relative w-full px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 group overflow-hidden ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-sm text-white border-2 border-white/30"
                  }`}
                >
                  <span className="relative z-10">Get Started</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-700 to-blue-800"
                        : "bg-white/20"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
