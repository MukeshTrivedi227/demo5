import express from "express";
import {
    insertRegister
    } from '../controllers/Register.js'

const router = express.Router();

// router.get("/:id", getUserName);
router.post("/", insertRegister);


export default router;