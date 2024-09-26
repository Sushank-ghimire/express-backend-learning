import express, { json } from "express";
import { config as configDotenv } from "dotenv";
import { connectMongo } from "./database/MongoConnect.js";
import route from "./routes/routes.js";

configDotenv();
const app = express();

app.use(json());

const PORT = process.env.PORT || 4000;

app.use("/api", route);

// Connect to MongoDB once when the server starts
const startServer = async () => {
    try {
        await connectMongo();
        app.listen(PORT, () => {
            console.log(`Server Listening on Port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
};

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

startServer();
