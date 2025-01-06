import express from "express";
import { addProduct, getProduct, removeProduct } from "../controller/product.controller.js";
import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
const router = express.Router();


router.post("/addproduct", upload.single("image"), addProduct);

router.get("/products", getProduct);

router.get("/getadminProduct", getProduct);
router.post("/removeproduct", removeProduct);

export default router;
