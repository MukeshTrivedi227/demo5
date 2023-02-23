import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Ecommerceappwebsite() {
    const [product_name,setProduct_name]=useState();
    const [product_image,setProduct_image]=useState();
    const [product_description,setProduct_description]=useState();
    const [status,setStatus]=useState();
    const navigate=useNavigate();  
    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/product/",{
            product_name,
            product_image,
            product_description,
            status
                                
          });
         alert(res.data)
          navigate("/DisplayProduct")
        }
        catch(err)
        {
            alert(err)
        }
    }
  return (
    <main id="main" class="main">
        <div className="row">
    <div className="col-lg-3">
    </div>
      <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add E-Commerce App/Website</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">product_name:</label>
                        <input type="text" className="form-control" id="product_name" onChange={(e)=>setProduct_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">Product_image</label>
                        <input type="email" className="form-control" id="product_image"  onChange={(e)=>setProduct_image(e.target.value)}/>
                      </div>                      
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Product_Description:</label>
                        <input type="text" className="form-control" id="product_description" onChange={(e)=>setProduct_description(e.target.value)} />
                      </div>                      
                      
                      <div className="col-12">
                        <label for="inputPassword4" className="form-label">status</label>
                        <input type="text" className="form-control" id="status" onChange={(e)=>setStatus(e.target.value)}/>
                      </div>
             
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayProduct")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
