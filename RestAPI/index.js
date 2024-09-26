import express, { json } from "express";
import fs from "node:fs"

const app = express();

app.use(json());

app.use(express.static("public"));

let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Rest API");
})

// To get fake products data route (/products)
app.get("/products", (req, res) => {
    res.json(data.products);
})

// To filter the specific items data 
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const reqProduct = data.products.find((pro) => pro.id === productId);
    // console.log(productId);
    if(reqProduct) {
        let productPage = fs.readFileSync("index.html", "utf-8");
        // Perform all replacements on productPage
        productPage = productPage.replace("**name**", reqProduct.title);
        productPage = productPage.replace("**Price**", reqProduct.price);
        productPage = productPage.replace("**rating**", reqProduct.rating);
        productPage = productPage.replace("**Description**", reqProduct.description);
        productPage = productPage.replace("**src**", reqProduct.images[0])
        if(reqProduct.discount) 
            productPage = productPage.replace("**discount**", reqProduct.discount);
        productPage = productPage.replace("**stock**", reqProduct.stock);

        // res.json(reqProduct);
        res.send(productPage);
    }
    else {
        res.send("Product Cannot Found");
    }
})

// To add some Products
app.put("/addProducts", (req, res) =>{
    const productToAdd = {
      id: data.products.length+1,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.category,
      rating: req.body.category,
      stock: req.body.stock
    };

    if(productToAdd && productToAdd.description!== "" && productToAdd.category !== "" && productToAdd.price !== "" && productToAdd.stock !== "" && productToAdd.title !== "" && productToAdd.rating !== "") {
        data.products.push(productToAdd);
        res.send("Product Added to the database.");
    }
    else {
        res.sendStatus(201).json();
    }
})

// To Update Products
app.post("/updateProducts", (req, res) => {
    const productToUpdate = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.category,
        rating: req.body.category,
        stock: req.body.stock
      };
      if(productToUpdate && productToUpdate.description!== "" && productToUpdate.category !== "" && productToUpdate.price !== "" && productToUpdate.stock !== "" && productToUpdate.title !== "" && productToUpdate.rating !== "") {
          data.products[productToUpdate.id-1] = productToUpdate;
          res.send("Product Updated Successfully!");
      }
      else {
          res.send("Product Updated Successfully");
      }
})

app.listen(PORT, () => {
    console.log(`Server listning at port ${PORT}.`)
})