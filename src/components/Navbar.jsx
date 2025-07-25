import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={() => scrollToSection(item.href)}
                    className="font-inter"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Branding outside of dropdown */}
        <a
          onClick={() => scrollToSection("#home")}
          className="ml-2 lg:ml-20 text-xl font-poppins font-semibold cursor-pointer"
        >
          &lt;WasiqPortfolio/&gt;
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={() => scrollToSection(item.href)}
                className="font-inter"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
