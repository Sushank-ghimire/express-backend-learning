import { client } from "../database/MongoConnect.js";

const addDataProducts = async (req, res) => {
    try {
        await client.connect();
        const database = client.db("ShoppingData");
        const collections = database.collection("products");

        let requestData = {};
        let reqData = req.body;
        if(reqData) {
            if(reqData.name.length <= 3 || !(reqData.name)) {
                res.status(400).send({message: "Product Name is Not Provided"});
            }
            else {
                requestData.name = req.body.name;
            }
            if(reqData.company.length <= 3 || !(reqData.company)) {
                res.status(400).send({message: "Company name is not provided"});
            }
            else {
                requestData.company = req.body.company;
            }

            if(!(reqData.price)) {
                res.status(400).send({message: "Product price is not Provided"});
            }
            else {
                requestData.price = req.body.price;
            }
        }
        
        if(requestData){
           await collections.insertOne({...requestData}, {unique: true});
        }
        else {
            res.json({ message : "Error occured on adding product."});
        }
    }
    catch(err) {
        res.json({ error: `Error Occured While adding new products : ${err}`})
    }
    res.status(202).json({ message: "Data Added to the Database!"});
}

export { addDataProducts };