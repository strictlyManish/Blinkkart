import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon from lucide-react (install if not already)

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkClass =
    "block text-white px-4 py-2 hover:text-orange-400 font-medium";
  const activeLinkClass = "text-orange-400";

  return (
    <nav className="bg-transparent text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <NavLink to="/">
          <span className="font-bold text-2xl"> BlinkKart</span>
          </NavLink>

          <div className="hidden md:flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${linkClass} text-xl ${isActive ? activeLinkClass : ""}`
              }
            >
              <i className="ri-shopping-bag-line"></i>
            </NavLink>
          </div>

       
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-1 pb-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${linkClass} text-xl ${isActive ? activeLinkClass : ""}`
              }
            >
              <i className="ri-shopping-bag-line"></i>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
