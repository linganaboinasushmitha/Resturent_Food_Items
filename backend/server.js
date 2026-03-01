const express = require('express');
const cors = require('cors');
const { Menu, Dish, Contact } = require('./models');

const app = express();
app.use(cors()); // ✅ allow frontend requests
app.use(express.json());

// Routes
app.get('/menu', async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});

app.get('/dishes', async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  await contact.save();
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));