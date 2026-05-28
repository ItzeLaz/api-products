import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/products", productsRoutes);

// --- ESTO ES LO QUE FALTA ---
// Render asigna un puerto automáticamente en la variable de entorno PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
// ----------------------------

export default app;