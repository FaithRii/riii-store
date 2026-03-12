import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-riii-black border-b border-riii-gold border-opacity-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="font-display text-3xl font-bold text-riii-gold tracking-widest cursor-pointer">
          RIII&amp;
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Shop', 'Men', 'Women', 'About', 'Contact'].map((link) => (
            <span
              key={link}
              className="font-ui text-sm tracking-widest uppercase text-white hover:text-riii-gold transition-colors duration-300 cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-riii-gold transition-colors duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>

          {/* Account */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-riii-gold transition-colors duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
          </svg>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-riii-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-riii-gold text-riii-black text-xs font-ui font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-riii-gold transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-riii-charcoal border-t border-riii-gold border-opacity-20 px-6 py-4">
          {['Home', 'Shop', 'Men', 'Women', 'About', 'Contact'].map((link) => (
            <div
              key={link}
              className="font-ui text-sm tracking-widest uppercase text-white hover:text-riii-gold transition-colors duration-300 cursor-pointer py-3 border-b border-white border-opacity-10"
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;