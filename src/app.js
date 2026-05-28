import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productsRoutes);

export default app;