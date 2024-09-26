import express, { json } from "express";
import { configDotenv } from "dotenv";
import cors from 'cors';

configDotenv();

const data = [
  {
    _id: "1",
    name: "Widget A",
    price: 29.99,
    targetPrice: 24.99,
    category: "Electronics",
  },
  {
    _id: "2",
    name: "Gadget X",
    price: 49.95,
    targetPrice: 39.95,
    category: "Gadgets",
  },
  {
    _id: "3",
    name: "Toolbox Set",
    price: 79.99,
    targetPrice: 69.99,
    category: "Tools",
  },
  {
    _id: "4",
    name: "Kitchen Blender",
    price: 39.99,
    targetPrice: 34.99,
    category: "Kitchen Appliances",
  },
  {
    _id: "5",
    name: "Smartwatch Z",
    price: 149.99,
    targetPrice: 129.99,
    category: "Wearable Technology",
  },
  {
    _id: "6",
    name: "Furniture Set",
    price: 299.95,
    targetPrice: 249.95,
    category: "Home & Living",
  },
  {
    _id: "7",
    name: "Running Shoes",
    price: 89.99,
    targetPrice: 79.99,
    category: "Sports & Outdoors",
  },
  {
    _id: "8",
    name: "Wireless Headphones",
    price: 119.95,
    targetPrice: 99.95,
    category: "Electronics",
  },
  {
    _id: "9",
    name: "Backpack",
    price: 49.99,
    targetPrice: 44.99,
    category: "Travel Accessories",
  },
  {
    _id: "10",
    name: "Digital Camera",
    price: 299.99,
    targetPrice: 279.99,
    category: "Photography",
  },
  {
    _id: "11",
    name: "Fitness Tracker",
    price: 69.95,
    targetPrice: 59.95,
    category: "Health & Fitness",
  },
  {
    _id: "12",
    name: "Camping Tent",
    price: 149.99,
    targetPrice: 129.99,
    category: "Outdoor Recreation",
  },
  {
    _id: "13",
    name: "Portable Speaker",
    price: 79.99,
    targetPrice: 69.99,
    category: "Audio & Video",
  },
  {
    _id: "14",
    name: "Desk Lamp",
    price: 34.95,
    targetPrice: 29.95,
    category: "Office Supplies",
  },
  {
    _id: "15",
    name: "Power Drill",
    price: 89.99,
    targetPrice: 79.99,
    category: "Tools",
  },
];

const app = express();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/data", (req, res) => {
    res.json(data);
})

app.listen(PORT, () => {
  console.log(`Server is listining on port : ${PORT}`);
});
