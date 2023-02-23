import express from "express";
import {getCareerss,  
    getCareers,
    deleteCareers,
   insertCareerss,
   updateCareers
    } from '../controllers/career.js'

const router = express.Router();

router.get("/:id", getCareers);
router.post("/", insertCareerss);
router.delete("/:id",deleteCareers);
router.get("/", getCareerss);
router.put("/:id", updateCareers);

export default router;