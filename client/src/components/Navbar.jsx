import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-radial-[at_50%_120%] from-sky-200 via-blue-400 to-indigo-300 to-90% w-full p-5 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo + Menu Items */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <img
            src="src/assets/logo.png"
            alt="Website Logo"
            className="w-20 hover:scale-150 transition duration-800"
          />

          {/* Desktop Menu */}
          <ul className="hidden xl:flex gap-8 font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="inline-block px-4 py-2 rounded-lg text-gray-900 hover:bg-white hover:text-indigo-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="inline-block px-4 py-2 rounded-lg text-gray-900 hover:bg-white hover:text-indigo-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="inline-block px-4 py-2 rounded-lg text-gray-900 hover:bg-white hover:text-indigo-600 transition"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block px-4 py-2 rounded-lg text-gray-900 hover:bg-white hover:text-indigo-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Mobile Menu Icon */}
        <i
          className="px-3 py-2 rounded-xl bg-white/70 text-gray-900 hover:bg-white hover:text-indigo-600 shadow-md transition-all duration-300 hover:scale-105 active:scale-95 xl:hidden bx bx-menu text-4xl cursor-pointer backdrop-blur-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="z-20 fixed inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Drawer */}
            <div
              className="z-20 absolute top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-xl rounded-l-2xl p-6 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 hover:text-indigo-600 text-3xl font-bold transition"
                >
                  &times;
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-4 font-semibold text-gray-900 text-lg">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/explore"
                  className="px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
