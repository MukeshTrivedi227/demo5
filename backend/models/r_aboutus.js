import express from "express";
import {getAboutsuss,  
    getAboutsus,
   deleteAboutsus,
   insertAboutsuss,
   updateAboutsus
    } from '../controllers/aboutus.js'

const router = express.Router();

router.get("/:id", getAboutsus);
router.post("/", insertAboutsuss);
router.delete("/:id", deleteAboutsus);
router.get("/", getAboutsuss);
router.put("/:id", updateAboutsus);

export default router;