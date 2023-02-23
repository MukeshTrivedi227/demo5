import express from "express";
import {deleteService,getService,getServices,insertServices,updateService
    } from '../controllers/service.js'

const router = express.Router();

router.get("/:id", getService);
router.post("/", insertServices);
router.delete("/:id", deleteService);
router.get("/", getServices);
router.put("/:id", updateService);

export default router;