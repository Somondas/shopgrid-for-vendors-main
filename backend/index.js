// ! Test Code
import express from "express";
import cors from "cors";
import pool from "./db.js";
import { config } from "dotenv";

const app = express();

config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
// >>Routes
// CREATE TABLE grocery_items (
//     id INT SERIAL PRIMARY KEY,
//     user_uid varchar(255) NOT NULL,
//     item_name VARCHAR(255) NOT NULL,
//     item_price DECIMAL(10, 2) NOT NULL,
//     hero_image  VARCHAR(255) NOT NULL,
//     item_description TEXT NOT NULL,
//     item_category VARCHAR(255) NOT NULL,
// );
app.post("/new-item", async (req, res) => {
  try {
    const { name, description, price, image, category, uid } = req.body;
    const newItem = await pool.query(
      "INSERT INTO grocery_items ( item_name, item_description, item_price, hero_image, item_category, user_uid) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, description, price, image, category, uid]
    );
    console.log(req.body);
    res.json(newItem);
    console.log(process.env.DB_PASSWORD);
  } catch (error) {
    console.error(error);
  }
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
