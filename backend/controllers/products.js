import { db } from "../db.js";

export const getProducts = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM product";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getProduct = (req, res) => {
    const query="select * from  product where product_id  =?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteProduct=(req,res)=>{
    const product_id=req.params.id;  
   
    const query="DELETE FROM  product where product_id  = ?"
    db.query(query,[product_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been deleted")
    })
}

export const insertProducts=(req,res)=>{
    const query="INSERT INTO  product(`product_name`,`product_image`,`product_description`,`status`) values(?)";
    
    const values= [
        req.body.product_name,
        req.body.product_image,
        req.body.product_description,
        req.body.status
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Data has been added")
    })
}
export const updateProduct=(req,res)=>{
    const product_id =req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `product` SET `product_name`=?,`product_image`=?,`product_description`=?,`status`=? where product_id  =?"
    const values= [        
        req.body.product_name,
        req.body.product_image,
        req.body.product_description,
        req.body.status
    ];
    
    db.query(query,[...values,product_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" Data has been updated")
    })
}