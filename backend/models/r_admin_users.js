import express from "express";
import {
    getUserName
    } from '../controllers/admin_users.js'

const router = express.Router();

router.get("/:id", getUserName);


export default router;