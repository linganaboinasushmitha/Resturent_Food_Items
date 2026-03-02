import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? "gold" : "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "linear-gradient(90deg, #000, #111)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid gold",
        boxShadow: "0 4px 15px rgba(255,215,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h1 style={{ color: "gold", letterSpacing: "1px" }}>
        🍴 Food Ordering
      </h1>

      {/* Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
        }}
      >
        <li>
          <Link to="/" style={linkStyle("/")}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu" style={linkStyle("/menu")}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/dishes" style={linkStyle("/dishes")}>
            Dishes
          </Link>
        </li>

        <li>
          <Link to="/contact" style={linkStyle("/contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;