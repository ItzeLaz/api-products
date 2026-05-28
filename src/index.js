import app from "./app.js";
import "./database.js";

// Render asigna un puerto automáticamente en la variable de entorno PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});