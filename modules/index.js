import express from "express";
import http from "node:http"
import fs from "node:fs"

// creating express server
// const app = express();

const data = {
    name: "User Name",
    age: 18,
    work: "Student"
};

const indexPage = fs.readFileSync("index.html", "utf-8");
const dataFile = fs.readFileSync("data.json", "utf-8");

const product = JSON.parse(dataFile).products[0];

const app = http.createServer((req, res) => {
    console.log("Server Started");
    res.setHeader("Name", "UserName");
    
    switch(req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html");
            const modifiedText = indexPage.replace("**name**", product.title);
            const priceModify = modifiedText.replace("**price**", product.price);
            // res.end(indexPage);
            res.end(priceModify);
            break;
        case "/products":
            res.setHeader("Content-Type", "application/json");
            res.end(dataFile);
            break;
        default:
            res.writeHead(404, "Not Found")
            res.end("Page Not found.");
            break;
    }
    // res.end(JSON.stringify(data));
});

const PORT = 5000;

// Low performance in this way 
const fileTxt = fs.readFileSync("readfile.txt", "utf-8", (err, text) => {
    console.log(text);
    return text;
});

// Best for the performance
// const file = fs.readFile("readfile.txt", "utf-8");
// console.log(file)

// Express route
// app.get("/", (req, res) => {
//     res.send("Hello world");
// })


// Express Route
// app.get("/file", (req, res) => {
//     res.send("file");
// })

// app.listen(PORT, () => {
//     console.log("Server is running on port", PORT);
// });

app.listen(PORT);