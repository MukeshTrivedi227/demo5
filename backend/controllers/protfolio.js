import { db } from "../db.js";

export const getProtfolios = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM protfolio";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getProtfolio = (req, res) => {
    const query="select * from  protfolio where protfolio_id  =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteProtfolio=(req,res)=>{
    const protfolio_id=req.params.id;  
   
    const query="DELETE FROM  protfolio where protfolio_id  = ?"
    db.query(query,[protfolio_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertProtfolio=(req,res)=>{
    const query="INSERT INTO  protfolio(`protfolio_name`,`protfolio_web_url`,`protfolio_app_url`,`status`) values(?)";
    
    const values= [
        req.body.protfolio_name,
        req.body.protfolio_web_url,
        req.body.protfolio_app_url,
        req.body.status
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateProtfolio=(req,res)=>{
    const protfolio_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `protfolio` SET `protfolio_name`=?,`protfolio_web_url`=?,`protfolio_app_url`=?,`status`=? where protfolio_id =?"
    const values= [     
           
        req.body.protfolio_name,
        req.body.protfolio_web_url,
        req.body.protfolio_app_url,
        req.body.status
    ];
    
    db.query(query,[...values,protfolio_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}