import { db } from "../db.js";

export const getAboutsuss = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM aboutsus";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getAboutsus = (req, res) => {
    const query="select * from aboutsus where about_id =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteAboutsus=(req,res)=>{
    const about_id =req.params.id;  
   
    const query="DELETE FROM aboutsus where about_id = ?"
    db.query(query,[about_id ],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertAboutsuss=(req,res)=>{
    const query="INSERT INTO aboutsus(`about_image`,`description`,`enter_date`) values(?)";
    
    const values= [
        req.body.about_image,
        req.body.description,
        Date.now()
    ];
console.log(Date(Date.now()))
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateAboutsus=(req,res)=>{
    const about_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `aboutsus` SET `about_image`=?,`description`=? where about_id =?"
    const values= [        
        req.body.about_image,
        req.body.description
    ];
    
    db.query(query,[...values,about_id ],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}