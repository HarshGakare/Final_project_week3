import express from "express";
import { signup, login } from "../controller/user.controller.js";
import { authenticateAdmin } from "../middleware/authenticateAdmin.js";

import { signupAdmin, loginadmin , authadmin, getadmindata} from "../controller/admin.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/adminsignup", signupAdmin);
router.post("/adminlogin", loginadmin);

router.post("/auth",authenticateAdmin, authadmin)
router.get("/getadmindata/:email",  getadmindata);

export default router;