import { client } from "../database/MongoConnect.js";

const getDataProducts = async (req, res) => {
    client.connect();
    try {
        const database = client.db("ShoppingData");
        const collections = database.collection("products");

        const data = await collections.find().toArray(); // Fixed method call

        if (data.length > 0) {
            res.json(data); // Send JSON response
        } else {
            res.status(404).json({ message: "No data found" }); // Handle empty data scenario
        }
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: `Server error ${error}` }); // Handle errors
    }
}

export { getDataProducts };