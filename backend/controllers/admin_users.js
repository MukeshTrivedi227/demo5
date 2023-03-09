import { db } from "../db.js";


export const getUserName = (req, res) => {
    const query="SELECT name FROM `admin_users` WHERE admin_id=?"
     
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

