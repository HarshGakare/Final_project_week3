import Product from "../model/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const {shopID, name, Price, category, des } = req.body;
    const imageurl = req.file.path.replace(/\\/g, "/"); 

    const NewProduct = new Product({
      shopID,
      name,
      Price,
      category,
      image: imageurl,
      des,
    });

    await NewProduct.save();

    res.status(200).json({
      message: "Product added successfully",
      product: {
       shopID: NewProduct.shopID,
        name: NewProduct.name,
        Price: NewProduct.Price,
        category: NewProduct.category,
        image: NewProduct.image,
        des: NewProduct.des,
      },
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Failed to add product", error });
  }
};

// Controller function to get all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "Products fetched successfully", products });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

export const getadminProduct = async (req , res) =>{
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json({ products });
} catch (error) {
    console.log("Error fetching products: ", error);
    res.status(500).json({ message: "Error fetching products" });
}
}
 
export const removeProduct = async (req,res) => {
  try{
    const { id } = req.body;

    if(!id) {
      return res.status(400).json({message : "Product ID is required"});
    }
    const deletedProduct = await Product.findByIdAndDelete(id);

    if(!deletedProduct) {
      return res.status(404).json({message: "Product not found"});
    }

    res.status(200).json({
          message: "Product removed successfully",
          product: deletedProduct,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({message: "Faild to remove product", error});
  }
}
