import { Router } from "express";
import { getDataProducts } from "../controllers/GetProducts.js";
import { addDataProducts } from "../controllers/InsertDataProducts.js";
import { deleteProduct } from "../controllers/DeleteProduct.js";

const route = Router();
route .get("/data", getDataProducts)
      .post("/add", addDataProducts)
      .post("/delete", deleteProduct);

export default route;