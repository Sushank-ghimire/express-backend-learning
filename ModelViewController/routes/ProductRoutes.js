import { Router }  from "express";
import {
    getSpecificProduct,
    deleteProducts,
    updateProducts,
    addProducts,
    getProducts,
  } from "../controller/controller.js";


const productRoutes = Router();
  

// Applying the routes
productRoutes 
    .get("/products", getProducts)
    .get("/products/:id", getSpecificProduct)
    .put("/addProducts", addProducts)
    .patch("/updateProducts", updateProducts)
    .delete("/delete/:id", deleteProducts);


// To filter the specific items data
// app.get("/products/:id", getSpecificProduct)

// To add some Products
// app.put("/addProducts", addProducts)

// To Update Products
// app.patch("/updateProducts", updateProducts)

// Delete Product
// app.delete("/delete/:id", deleteProducts)

export default productRoutes;
