import express, { json } from "express";
import morgan from "morgan"

const app = express();

// Using Logger Morgan in default values
app.use(morgan("default"));

// Custom middleware for the homepage
const authMiddleware = (req, res, next) => {
    if(req.body) {
        const details = {
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        console.log(details);

        const email = details.email.trim().split("");
        if(!(email.includes("@")  || email.length < 6)) {
            res.send("Write the correct Email of User");
        }
        else if(!(email.includes("."))) {
            res.send("Write the correct Email of User");
        }
        next();
    }
    else {
        res.sendStatus(401);
    }
}

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static("public"));

// Custom Middleware for the homepage
const login = (req, res, next) => {
    if(req.query.passkey === "hello") {
        next();
    }
    else {
        res.sendStatus(401);
    }
}

// API endpoint or Route
// app.get("/", login, (req, res) => {
//     res.send("Home Page For Register");
// })

app.post("/register", authMiddleware, (req, res) => {
    res.send("Hello from");
})

// App Listining Port data
app.listen(PORT, () => {
    console.log(`Server Listining at port : ${PORT}`);
})