import mongoose from "mongoose";
import dotenv from "dotenv";

// Configura dotenv para que lea el archivo .env
dotenv.config();

// Ahora usamos la variable que definimos en .env
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
  .then((cnn) => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

export default mongoose;