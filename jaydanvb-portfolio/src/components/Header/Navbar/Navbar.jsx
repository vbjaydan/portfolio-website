import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full z-50  text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold">jaydan.vb</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 px-5 py-2 rounded border border-white">
        <a href="#home" className="hover:text-[#CB9531]">HOME</a>
        <a href="#aboutme" className="hover:text-[#CB9531]">ABOUT ME</a>
        <a href="#portfolio" className="hover:text-[#CB9531]">PORTFOLIO</a>
        <a href="#contact" className="hover:text-[#CB9531]">CONTACT</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-[#4e4D51]">
      <a href="#home" className="block px-3 py-2 rounded hover:bg-[#CB9531]">HOME</a>
      <a href="#aboutme" className="block px-3 py-2 rounded hover:bg-[#CB9531]">ABOUT ME</a>
      <a href="#portfolio" className="block px-3 py-2 rounded hover:bg-[#CB9531]">PORTFOLIO</a>
      <a href="#contact" className="block px-3 py-2 rounded hover:bg-[#CB9531]">CONTACT</a>
    </div>
  )}
</nav>
  );
};

export default Navbar;