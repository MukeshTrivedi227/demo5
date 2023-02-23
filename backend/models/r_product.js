import express from "express";
import {getProducts,  
    getProduct,
    deleteProduct,
    insertProducts,
   updateProduct
    } from '../controllers/products.js'

const router = express.Router();

router.get("/:id", getProduct);
router.post("/", insertProducts);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;