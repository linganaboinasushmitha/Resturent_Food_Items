import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = process.env.REACT_APP_API_URL; // e.g., https://resturent-food-items.onrender.com
      await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("✨ Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      alert("⚠️ Failed to send message. Try again later.");
    }
  };

  // Optional: Check backend connectivity
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/status`)
      .then((res) => res.json())
      .then((data) => console.log("Backend status:", data))
      .catch((err) => console.error("Backend connection error:", err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000, #111111)",
        padding: "60px 40px",
        color: "#fff",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          color: "gold",
          marginBottom: "50px",
          fontSize: "42px",
          letterSpacing: "2px",
        }}
      >
        Get In Touch
      </motion.h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* CONTACT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1",
            minWidth: "300px",
            background: "#111",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid gold",
            boxShadow: "0 0 25px rgba(255,215,0,0.3)",
          }}
        >
          <h2 style={{ color: "gold", marginBottom: "30px" }}>
            Contact Information
          </h2>

          <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            <FaMapMarkerAlt style={{ color: "gold", marginRight: "10px" }} />
            Hyderabad, Telangana, India
          </p>

          <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            <a
              href="tel:7386792371"
              style={{ color: "#0ff", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ color: "gold", marginRight: "10px" }} />
              7386792371
            </a>
          </p>

          <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            <a
              href="mailto:sushmithalinganaboina@gmail.com"
              style={{ color: "#0ff", textDecoration: "none" }}
            >
              <FaEnvelope style={{ color: "gold", marginRight: "10px" }} />
              sushmithalinganaboina@gmail.com
            </a>
          </p>

          <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            <FaClock style={{ color: "gold", marginRight: "10px" }} />
            Mon - Sun : 11 AM - 10 PM
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://instagram.com/sushu_9718"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "gold", fontSize: "24px" }}
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* CONTACT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1",
            minWidth: "300px",
            background: "#111",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid gold",
            boxShadow: "0 0 25px rgba(255,215,0,0.3)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "gold" }}>
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid gold",
                background: "#000",
                color: "#fff",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid gold",
                background: "#000",
                color: "#fff",
              }}
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid gold",
                background: "#000",
                color: "#fff",
                minHeight: "120px",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "12px",
                background: "gold",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;