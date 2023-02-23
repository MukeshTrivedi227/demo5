import { db } from "../db.js";

export const getContacts = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM contact";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getContact = (req, res) => {
    const query="select * from  contact where contact_id  =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteContact=(req,res)=>{
    const contact_id=req.params.id;  
   
    const query="DELETE FROM  contact where contact_id  = ?"
    db.query(query,[contact_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertContacts=(req,res)=>{
    const query="INSERT INTO contact (`contact_name`,`contact_image`,`contact_phone1`,`contact_phone2`,`contact_email1`,`contact_email2`,`insta_url`,`facebook_url`,`twitter_url`,`linkedin_url`,`youtube_url`,`google_url`) values(?)";
    
    const values= [
        req.body.contact_name,
        req.body.contact_image,
        req.body.contact_phone1,
        req.body.contact_phone2,
        req.body.contact_email1,
        req.body.contact_email2,
        req.body.insta_url,
        req.body.facebook_url,
        req.body.twitter_url,
        req.body.linkedin_url,
        req.body.youtube_url,
        req.body.google_url,
    ];
    console.log(query)
    console.log(values)

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateContact=(req,res)=>{
    const contact_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `contact` SET `contact_name`=?,`contact_image`=?,`contact_phone1`=?,`contact_phone2`=?,`contact_email1`=?,`contact_email2`=?,`insta_url`=?,`facebook_url`=?,`twitter_url`=?,`linkedin_url`=?,`youtube_url`=?,`google_url`=? where contact_id =?"
    const values= [     
           
        req.body.contact_name,
        req.body.contact_image,
        req.body.contact_phone1,
        req.body.contact_phone2,
        req.body.contact_email1,
        req.body.contact_email2,
        req.body.insta_url,
        req.body.facebook_url,
        req.body.twitter_url,
        req.body.linkedin_url,
        req.body.youtube_url,
        req.body.google_url,
    ];
    
    db.query(query,[...values,contact_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}