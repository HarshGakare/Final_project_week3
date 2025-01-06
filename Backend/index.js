import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url"; 
import path from "path"; 

import productRoute from "./route/product.route.js";
import userRoute from "./route/user.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  

const app = express();
app.use(cors());
app.use(express.json());


app.use('/public', express.static(path.join(__dirname, 'public')));


dotenv.config();

const PORT = process.env.PORT || 4008;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


app.use("/admin", productRoute); 
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
