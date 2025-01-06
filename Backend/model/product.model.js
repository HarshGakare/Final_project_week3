import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    shopID:{
        type: Number,
        required: true,
    },
    name:  {
        type: String,
        required: true,
    },
    Price:  {
        type: String,
        required: true,
    },
    category:  {
        type: String,
        required: true,
    },
    image:  {
        type: String,
       
    },
    des:  {
        type: String,
        required: true,
    },
})

const Product = mongoose.model("Product", productSchema);

export default Product;

