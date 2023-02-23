import { db } from "../db.js";

export const getServices = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM service";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getService = (req, res) => {
    const query="select * from service where service_id  =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteService=(req,res)=>{
    const service_id=req.params.id;  
   
    const query="DELETE FROM service where service_id  = ?"
    db.query(query,[service_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertServices=(req,res)=>{
    
    const query="INSERT INTO service(`service_name`,`service_image`,`description`,`status`) values(?)";
    
    const values= [
        req.body.service_name,
        req.body.service_image,
        req.body.description,
        req.body.status
    ];
    console.log(query)
    console.log(values)
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateService=(req,res)=>{
    const service_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `service` SET `service_name`=?,`service_image`=?,`description`=?,`status`=? where service_id  =?"
    const values= [        
        req.body.service_name,
        req.body.service_image,
        req.body.description,
        req.body.status
    ];
    
    db.query(query,[...values,service_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}