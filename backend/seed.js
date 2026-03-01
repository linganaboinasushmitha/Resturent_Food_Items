require('dotenv').config();
const mongoose = require('./db');
const { Menu, Dish } = require('./models');

async function seedData() {
  await Menu.deleteMany({});
  await Dish.deleteMany({});

  await Menu.insertMany([
    { item_name: 'Veg Biryani', price: 150 },
    { item_name: 'Chicken Curry', price: 200 },
    { item_name: 'Paneer Butter Masala', price: 180 }
  ]);

  await Dish.insertMany([
    { dish_name: 'Masala Dosa', description: 'Crispy dosa with potato filling', image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Masala_Dosa.jpg' },
    { dish_name: 'Idli Sambar', description: 'Steamed rice cakes with sambar', image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Idli_Sambar.jpg' },
    { dish_name: 'Butter Naan', description: 'Soft naan with butter topping', image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Naan.jpg' }
  ]);

  console.log('✅ Seed data inserted');
  process.exit();
}

seedData();