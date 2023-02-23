import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Business() {
    const [industrie_name,setIndustrie_name]=useState();
    const [industrie_image,setIndustrie_image]=useState();
    const [industrie_description,setIndustrie_description]=useState();
    const [status,setStatus]=useState();
    const navigate=useNavigate();  
    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/industries/",{
            industrie_name,
            industrie_image,
            industrie_description,
            status
                                
          });
         alert(res.data)
          navigate("/DisplayIndustries")
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
              <h5 className="card-title">Add Business</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Industrie_name:</label>
                        <input type="text" className="form-control" id="industrie_name" onChange={(e)=>setIndustrie_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">Industrie_image</label>
                        <input type="email" className="form-control" id="industrie_image"  onChange={(e)=>setIndustrie_image(e.target.value)}/>
                      </div>                      
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Industrie_Description:</label>
                        <input type="text" className="form-control" id="industrie_description" onChange={(e)=>setIndustrie_description(e.target.value)} />
                      </div>                      
                      
                      <div className="col-12">
                        <label for="inputPassword4" className="form-label">status</label>
                        <input type="text" className="form-control" id="status" onChange={(e)=>setStatus(e.target.value)}/>
                      </div>
             
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayIndustries")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
  
}
