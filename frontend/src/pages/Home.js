import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Slides outside component */
const slides = [
  "/images/chicken-biryani.png",
  "/images/chicken-biryani.png",
  "/images/chicken-biryani.png",
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menu, setMenu] = useState([]); // backend menu data
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL; // backend URL from .env

  /* Slideshow effect */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Fetch menu from backend */
  useEffect(() => {
    fetch(`${API_URL}/menu`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, [API_URL]);

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#fff" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 1s ease-in-out",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            textAlign: "center",
            padding: "20px",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              color: "gold",
              fontFamily: "Playfair Display, serif",
            }}
          >
            Welcome to Royal Flavors
          </h1>

          <p style={{ maxWidth: "700px", margin: "20px auto" }}>
            A warm welcome to our valued customers. Experience the royal
            taste crafted with passion and authentic flavors.
          </p>

          <button
            onClick={() => navigate("/menu")}
            style={{
              padding: "12px 28px",
              backgroundColor: "gold",
              color: "#000",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* MENU SECTION */}
      <div
        id="menu"
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "gold", marginBottom: "20px" }}>
          Our Menu
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Discover a variety of delicious dishes prepared with love and tradition.
        </p>

        {/* Display menu from backend */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          {menu.length > 0 ? (
            menu.map((item) => (
              <div
                key={item._id}
                style={{
                  backgroundColor: "#1a1a1a",
                  padding: "20px",
                  borderRadius: "15px",
                  width: "200px",
                  color: "#fff",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
                <p>{item.description}</p>
                <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "gold", marginTop: "20px" }}>Loading menu...</p>
          )}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div
        id="contact"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        <h2 style={{ color: "gold", marginBottom: "20px" }}>
          Contact Us
        </h2>
        <p>Email: royalflavors@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Hyderabad, India</p>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#000",
          color: "gold",
        }}
      >
        © 2026 Royal Flavors | Designed with ❤️
      </footer>
    </div>
  );
}

export default Home;