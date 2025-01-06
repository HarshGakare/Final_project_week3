import Admin from "../model/admin.model.js";
import bcrypt from "bcryptjs";


export const signupAdmin = async (req, res) => {
  try {
    const { adminname, email, password, shopID, shopName, contact, category, address } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      adminname,
      email,
      password: hashedPassword,
      shopID,
      shopName,
      contact,
      category,
      address,
    });

    await newAdmin.save();

    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        id: newAdmin._id,
        adminname: newAdmin.adminname,
        email: newAdmin.email,
        shopID: newAdmin.shopID,
        shopName: newAdmin.shopName,
        contact: newAdmin.contact,
        category: newAdmin.category,
        address: newAdmin.address,
      },

      
    });
  //   const token = jwt.sign({ id: newUser._id, shopId }, 'your_jwt_secret', { expiresIn: '1h' });
  // res.json({ token });
      
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const loginadmin = async (req, res) => {
  try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });

      if (!admin) {
          return res.status(400).json({ message: "Admin not found" });
      }

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
          return res.status(400).json({ message: "Invalid password" });
      }

      res.status(200).json({
          message: "Admin Login Successfully",
          admin: {
              _id: admin._id,
              adminname: admin.adminname,
              email: admin.email,
              shopID: admin.shopID,
              shopName: admin.shopName,
              contact: admin.contact,
              category: admin.category,
              address: admin.address,
          }
      });
      
  } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
  }
};

export const authadmin = async (req, res) =>{
  res.send("it.'s work")
}

export const getadmindata = async(req,res) => {
  try {
    const email = req.params.email; 
    const admin = await Admin.find({ email: email });
  
    if (admin.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }
  
    res.status(200).json({ message: "Admin data fetched successfully", admin });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Failed to fetch admin data" });
  }
  
}