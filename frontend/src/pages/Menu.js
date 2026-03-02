import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const navigate = useNavigate();

  // Hardcoded categories remain unchanged
  const categories = [
    {
      name: "Veg",
      image: "/images/veg-biryani.png",
      description: "Pure vegetarian delicious dishes",
    },
    {
      name: "Non-Veg",
      image: "/images/chicken-biryani.png",
      description: "Authentic non-veg royal flavors",
    },
    {
      name: "Soups",
      image: "/images/tomato-soup.png",
      description: "Warm and comforting soups",
    },
    {
      name: "Desserts",
      image: "/images/gulab-jamun.png",
      description: "Sweet treats to end your meal",
    },
  ];

  // Backend connection (just added, does not replace categories)
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL; // e.g., https://resturent-food-items.onrender.com

    fetch(`${API_URL}/categories`) // you can use this later
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories from backend:", data);
        // optional: use data to update state later
      })
      .catch((err) => console.error("Backend fetch error:", err));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "gold",
          marginBottom: "50px",
          fontSize: "40px",
        }}
      >
        Our Menu Categories
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.08 }}
            onClick={() => navigate(`/dishes/${cat.name}`)}
            style={{
              cursor: "pointer",
              background: "#1a1a1a",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px", textAlign: "center" }}>
              <h2 style={{ color: "gold" }}>{cat.name}</h2>
              <p style={{ fontSize: "14px", opacity: "0.8" }}>
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Menu;