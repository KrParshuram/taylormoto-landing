import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <a
          href="/"
          className="text-2xl font-bold text-red-600 tracking-wide"
          aria-label="Taylor Moto Homepage"
        >
          Taylor Moto
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-700 hover:text-red-600 transition font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden px-4 pb-4 space-y-3 bg-white shadow"
          aria-label="Mobile Navigation"
        >
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-red-600 transition font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
