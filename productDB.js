require("dotenv").config();
const connectdb = require("./db/connect");
const product = require("../models/product");
const ProductJson = require("./products.json");
const start = async () =>{
    try{
     await connectdb(process.env.MONGODB_URL);
     await product.create(ProductJson);
     console.log("json");

    }catch(error){
        console.log(error);
    }
 };
  start();