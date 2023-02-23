import express from "express";
import {getContacts,  
    getContact,
    deleteContact,
   insertContacts,
   updateContact
    } from '../controllers/contact.js'

const router = express.Router();

router.get("/:id", getContact);
router.post("/", insertContacts);
router.delete("/:id", deleteContact); 
router.get("/", getContacts);
router.put("/:id", updateContact);

export default router;