import express from "express";
import {getProtfolios,  
    getProtfolio,
    deleteProtfolio,
   insertProtfolio,
   updateProtfolio
    } from '../controllers/protfolio.js'

const router = express.Router();

router.get("/:id", getProtfolio);
router.post("/", insertProtfolio);
router.delete("/:id", deleteProtfolio);
router.get("/", getProtfolios);
router.put("/:id", updateProtfolio);

export default router;