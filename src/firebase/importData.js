import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import fs from "fs"; // Para leer el archivo JSON

// Leer el archivo JSON
const data = JSON.parse(fs.readFileSync("../data/data.json", "utf-8"));

const uploadData = async () => {
  const productosRef = collection(db, "productos"); // Referencia a la colección

  for (const item of data) {
    const { id, ...productoSinId } = item; // Eliminar el campo "id"

    // Mantener la categoría y guardarla en minúsculas
    const productoConCategoria = {
      ...productoSinId,
      category: item.category.toLowerCase(), // Se asegura de que category esté presente y en minúsculas
    };

    try {
      await addDoc(productosRef, productoSinId);
      console.log(`✅ Producto "${productoSinId.name}" agregado.`);
    } catch (error) {
      console.error("❌ Error al agregar el producto:", error);
    }
  }
  console.log("🚀 Todos los productos fueron subidos a Firebase.");
};

// Ejecutar la función
uploadData();