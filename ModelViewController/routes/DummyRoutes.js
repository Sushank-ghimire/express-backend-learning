import { Router } from "express";

const dummyRoutes = Router();

const dummyFunction = (req, res) => {
    res.send("Hello Dummy Router");
}

dummyRoutes
    .get("/", dummyFunction)

export default dummyRoutes;