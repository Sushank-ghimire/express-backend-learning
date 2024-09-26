import express, { json } from "express";
import morgan from "morgan";
import productRoutes from "./routes/ProductRoutes.js";
import dummyRoutes from "./routes/DummyRoutes.js";

// The Way of MVC Model-View-Controller
const app = express();

const PORT = process.env.PORT || 3000;

// Adding Modern Router Techniques
app.use("/api", productRoutes);
app.use("/api/dummy", dummyRoutes)

app.use(json());
app.use(morgan("default"));
app.use(express.static("public"));


// Server Listinging Port
app.listen(PORT, () => {
  console.log(`Server is listining on port : ${PORT}`);
});
