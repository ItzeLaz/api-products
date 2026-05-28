import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Esta es la ruta raíz que pediste para que no dé error 404
app.get("/", (req, res) => {
  res.send("API de Productos funcionando correctamente de ItzelLV");
});

// Tus rutas de productos
app.use("/api/products", productsRoutes);

export default app;