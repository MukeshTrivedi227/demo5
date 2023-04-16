import express from "express";
import cors from "cors"
import multer from "multer";

import assignroutes1 from "./models/r_aboutus.js"
 import assignroutes2 from "./models/r_career.js"
 import assignroutes3 from "./models/r_service.js"
 import assignroutes4 from "./models/r_product.js"
 import assignroutes5 from "./models/r_industrie.js"
 import assignroutes6 from "./models/r_hiredeveloper.js"
 import assignroutes7 from "./models/r_protfolio.js"
 import assignroutes8 from "./models/r_contact.js"
 import assignroutes9 from "./models/r_Login.js"
 import assignroutes10 from "./models/r_admin_users.js"
 import assignroutes11 from "./models/r_register.js"
//import path from "path";

const app= express()
app.use(express.json())
app.use(cors())

app.use("/backend/aboutsus",assignroutes1)
app.use("/backend/career",assignroutes2)
app.use("/backend/service",assignroutes3)
 app.use("/backend/product",assignroutes4)
app.use("/backend/industries",assignroutes5)
app.use("/backend/hiredeveloper",assignroutes6)
app.use("/backend/protfolio",assignroutes7)
app.use ("/backend/contact",assignroutes8)
app.use("/backend/Login",assignroutes9)
app.use("/backend/admin_users",assignroutes10)
app.use("/backend/Register",assignroutes11)

app.listen(8800,()=>{
    console.log("Connected to Backend1")
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    limits: {
      fileSize: 10000000 // 1000000 Bytes = 1 MB
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/backend/upload", upload.single("file"), function (req, res) {
    const file = req.file; 
    //res.status(200).json(file.filename);    
    
    res.send(req.file.filename)
    
  }, (error, req, res, next) => {
     //res.status(400).send({ error: error.message })
     console.log(error.message)
  });