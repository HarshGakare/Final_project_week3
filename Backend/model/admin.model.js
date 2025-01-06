import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    shopID: {
        type: Number,
        required: true,
    },
    shopName: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
