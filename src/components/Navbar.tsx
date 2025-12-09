import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "../types";
import { motion } from "framer-motion";

const Navbar: React.FC<NavbarProps> = ({ search, setSearch }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <motion.li
                className="nav-item"
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Info */}
          <motion.div
            className="d-flex align-items-center me-3 text-white small"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            
          </motion.div>

          {/* Search */}
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <motion.input
              className="form-control form-control-sm me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
            <motion.button
              className="btn btn-sm btn-outline-light"
              type="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
