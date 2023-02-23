import express from "express";
import {getIndustriess,  
    getIndustries,
    deleteIndustries,
    insertIndustries,
    updateIndustries
    } from '../controllers/industries.js'

const router = express.Router();

router.get("/:id", getIndustries);
router.post("/", insertIndustries);
router.delete("/:id", deleteIndustries);
router.get("/", getIndustriess);
router.put("/:id", updateIndustries);

export default router;