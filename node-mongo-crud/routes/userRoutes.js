import express from "express";
import { registerUser, loginUser,getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/user" ,getAllUsers);

export default router;
