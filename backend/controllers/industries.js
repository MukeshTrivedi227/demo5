import { db } from "../db.js";

export const getIndustriess = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM industries";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getIndustries = (req, res) => {
    const query="select * from  industries where industrie_id  =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteIndustries=(req,res)=>{
    const industrie_id=req.params.id;  
   
    const query="DELETE FROM  industries where industrie_id  = ?"
    db.query(query,[industrie_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertIndustries=(req,res)=>{
    const query="INSERT INTO  industries(`industrie_name`,`industrie_image`,`industrie_description`,`status`) values(?)";
    
    const values= [
        req.body.industrie_name,
        req.body.industrie_image,
        req.body.industrie_description,
        req.body.status
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateIndustries=(req,res)=>{
    const industrie_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `industries` SET `industrie_name`=?,`industrie_image`=?,`industrie_description`=?,`status`=? where industrie_id  =?"
    const values= [     
           
        req.body.industrie_name,
        req.body.industrie_image,
        req.body.industrie_description,
        req.body.status
    ];
    
    db.query(query,[...values,industrie_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}