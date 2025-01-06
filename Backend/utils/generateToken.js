import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        { email: admin.email, id: admin._id },
        process.env.JWT_KEY
    );
};

export default generateToken;
