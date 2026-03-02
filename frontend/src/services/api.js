import axios from "axios";

const API = axios.create({
  baseURL: "https://resturent-food-items.onrender.com"
});

export default API;