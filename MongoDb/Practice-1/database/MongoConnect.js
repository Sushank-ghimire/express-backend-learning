import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/";
const client = new MongoClient(uri);

const connectMongo = async () => {

    try {
        await client.connect();
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log("Cannot connect to the database", error);
    } finally {
        await client.close();
    }
}

export { connectMongo, client };
