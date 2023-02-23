import { db } from "../db.js";

export const getHiredevelopers = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM hire_developer";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getHiredeveloper = (req, res) => {
    const query="SELECT * FROM `hire_developer` WHERE hiredeve_id=?"
 
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteHiredeveloper=(req,res)=>{
    const hiredeve_id=req.params.id;  
   
    const query="DELETE FROM  hire_developer where hiredeve_id  = ?"
    db.query(query,[hiredeve_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertHiredeveloper=(req,res)=>{
    const query="INSERT INTO  hire_developer(`hiredeve_name`,`hiredeve_image`,`hiredeve_description`,`status`) values(?)";
    
    const values= [
        req.body.hiredeve_name,
        req.body.hiredeve_image,
        req.body.hiredeve_description,
        req.body.status
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateHiredeveloper=(req,res)=>{
    const hiredeve_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `hire_developer` SET `hiredeve_name`=?,`hiredeve_image`=?,`hiredeve_description`=?,`status`=? where hiredeve_id  =?"
    const values= [     
           
        req.body.hiredeve_name,
        req.body.hiredeve_image,
        req.body.hiredeve_description,
        req.body.status
    ];
    
    db.query(query,[...values,hiredeve_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}