import express from "express";
import { stockIn, stockOut, stockReport } from "../controllers/stockController.js";

const router = express.Router();

router.post("/stock-in", stockIn);
router.post("/stock-out", stockOut);
router.get("/stock-report", stockReport);

export default router;
