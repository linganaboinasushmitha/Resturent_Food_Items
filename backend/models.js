const mongoose = require('./db');

const MenuSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  price: { type: Number, required: true }
});

const DishSchema = new mongoose.Schema({
  dish_name: { type: String, required: true },
  description: String,
  image_url: String
});

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: String
});

const Menu = mongoose.model('Menu', MenuSchema);
const Dish = mongoose.model('Dish', DishSchema);
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = { Menu, Dish, Contact };