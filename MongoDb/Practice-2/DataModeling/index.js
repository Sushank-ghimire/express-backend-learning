import express from "express";
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
})

app.listen(PORT, () => {
    console.log(`Server Listining at port : ${PORT}`);
    
})