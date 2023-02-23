import { db } from "../db.js";

export const getCareerss = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM careers";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getCareers = (req, res) => {
    const query="select * from careers where career_id =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteCareers=(req,res)=>{
    const career_id =req.params.id;  
   
    const query="DELETE FROM careers where career_id = ?"
    db.query(query,[career_id ],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertCareerss=(req,res)=>{
    const query="INSERT INTO careers(`name`,`email`,`contact`,`education`,`resume`,`status`,`job_status`) values(?)";
       const values= [
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.education,
        req.body.resume,
        req.body.status,
        req.body.job_status
    ];
//console.log(query)
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateCareers=(req,res)=>{
    const career_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `careers` SET `name`=?,`email`=?,`contact`=?,`education`=?,`resume`=?,`status`=?,`job_status`=? where career_id =?"
    const values= [        
        req.body.name,
        req.body.email,
        req.body.contact,
        req.body.education,
        req.body.resume,
        req.body.status,
        req.body.job_status
    ];
    
    db.query(query,[...values,career_id ],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}