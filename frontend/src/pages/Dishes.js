import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Dishes() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { name: "Chicken Biryani", category: "Non-Veg", image: "/images/chicken-biryani.png", price: "₹250" },
    { name: "Paneer Butter Masala", category: "Veg", image: "/images/paneer-butter-masala.png", price: "₹220" },
    { name: "Grilled Fish", category: "Non-Veg", image: "/images/grilled-fish.png", price: "₹300" },
    { name: "Tomato Soup", category: "Soups", image: "/images/tomato-soup.png", price: "₹120" },
    { name: "Sweet Corn Soup", category: "Soups", image: "/images/sweet-corn-soup.png", price: "₹130" },
    { name: "Butter Naan", category: "Veg", image: "/images/butter-naan.png", price: "₹60" },
    { name: "Gulab Jamun", category: "Desserts", image: "/images/gulab-jamun.png", price: "₹90" },
    { name: "Veg Biryani", category: "Veg", image: "/images/veg-biryani.png", price: "₹180" },
    { name: "Idli Sambar", category: "Veg", image: "/images/idli-sambar.png", price: "₹140" },
    { name: "Masala Dosa", category: "Veg", image: "/images/masala-dosa.png", price: "₹160" }
  ]);

  // ✅ Optional: Fetch dishes from backend if available
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL; // e.g., https://resturent-food-items.onrender.com
    fetch(`${API_URL}/dishes`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log("Backend fetch error, using default items:", err));
  }, []);

  const filteredItems = items.filter((item) => item.category === category);

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#fff",
      }}
    >
      <button
        onClick={() => navigate("/menu")}
        style={{
          backgroundColor: "gold",
          border: "none",
          padding: "8px 15px",
          borderRadius: "20px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        ← Back to Menu
      </button>

      <h1
        style={{
          textAlign: "center",
          color: "gold",
          marginBottom: "40px",
        }}
      >
        {category} Dishes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#1a1a1a",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "gold" }}>{item.name}</h3>
              <h4 style={{ marginTop: "10px" }}>{item.price}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;