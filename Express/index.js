import express from "express";
import fs from "node:fs";
import authMiddleware from "./middlewares/AuthMiddleware.js";

const app = express();

// Using Custom Own Middlewares in Server
app.use((req, res, next) => {
  console.log(req.hostname, req.ip, req.url, req.method);
  console.log(req.get("User-Agent"));
  console.log(req.get("Sec-Fetch-User"));
  console.log(req.get("Sec-Ch-Ua-Platform"));
  console.log(new Date());
  next();
});

// app.use(authMiddleware);

const PORT = process.env.PORT || 5000;

const dataFile = fs.readFileSync("data.json", "utf-8");

app.use(express.json());

// API endpoint or Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route to provide data
app.get("/getdata", authMiddleware, (req, res) => {
  // res.sendFile("./index.html");
  res.send(dataFile);
});

// Route to take user data
app.post("/register", (req, res) => {
  res.send({ type: "POST" });
});

// Put Request
app.put("/put", authMiddleware, (req, res) => {
  res.send({ type: "PUT" });
});

// Patch Request
app.patch("/patch", (req, res) => {
  res.send({ type: "PATCH" });
});

// Users Route Getting Id
app.get("/users/:id", (req, res) => {
  res.send(`User Id : ${req.params.id}`);
});

// Delete Request
app.delete("/delete", (req, res) => {
  res.send({ type: "DELETE" });
});

// App Listining Port data
app.listen(PORT, () => {
  console.log(`Server Listining at port : ${PORT}`);
});
