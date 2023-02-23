import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Webdevelopment() {
    const [service_name,setService_name]=useState();
    const [about_image,setAbout_image]=useState();
    const [description,setDescription]=useState();
    const [status,setStatus]=useState();
    const navigate=useNavigate();  
    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/service/",{
            service_name,
            about_image,
            description,
            status
                                
          });
         alert(res.data)
          navigate("/DisplayService")
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
              <h5 className="card-title">Add Webdevelopment</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">service_name:</label>
                        <input type="text" className="form-control" id="service_name" onChange={(e)=>setService_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">About_image</label>
                        <input type="email" className="form-control" id="about_image"  onChange={(e)=>setAbout_image(e.target.value)}/>
                      </div>                      
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Description:</label>
                        <input type="text" className="form-control" id="description" onChange={(e)=>setDescription(e.target.value)} />
                      </div>                      
                      
                      <div className="col-12">
                        <label for="inputPassword4" className="form-label">status</label>
                        <input type="text" className="form-control" id="status" onChange={(e)=>setStatus(e.target.value)}/>
                      </div>
             
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayService")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
