import express from "express";
import {getHiredevelopers,  
    getHiredeveloper,
    deleteHiredeveloper,
    insertHiredeveloper,
    updateHiredeveloper
    } from '../controllers/hiredeveloper.js'

const router = express.Router();

router.get("/:id", getHiredeveloper);
router.post("/", insertHiredeveloper);
router.delete("/:id", deleteHiredeveloper);
router.get("/", getHiredevelopers);
router.put("/:id", updateHiredeveloper);

export default router;