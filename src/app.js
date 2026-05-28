import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';
const app=express();
//Middleweres
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.use("/api/products", productsRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
//Start server
export default app;