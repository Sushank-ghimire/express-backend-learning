import { client } from "../database/MongoConnect.js"

const deleteProduct = async (req, res) => {
    client.connect();
    try {
        const db = client.db("ShoppingData");
        const collections = db.collection("products");
    } catch (error) {
        res.json({ message: `Error occured : ${error}`})
    }
}

export { deleteProduct };