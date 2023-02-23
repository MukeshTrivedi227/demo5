import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'

export default function Protfolio() {
    const [protfolio_name,setProtfolio_name]=useState('');
    const [protfolio_web_url,setProtfolio_web_url]=useState('');
    const [protfolio_app_url,setProtfolio_app_url]=useState('');
    const [status,setStatus]=useState('');
    const navigate=useNavigate();  
    const [formErrors, setFormErrors] = useState({});
    const location = useLocation()
    const protfolio_id  = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    useEffect(()=>{  
      if(protfolio_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        try{        
            const res = await axios.get(`/protfolio/`+protfolio_id);
            setProtfolio_name(res.data.protfolio_name);
            setProtfolio_web_url(res.data.protfolio_web_url);
            setProtfolio_app_url(res.data.protfolio_app_url);
            setStatus(res.data.status);
            }catch(err){
            console.log(err)
        }            
      }
    const validate = () => {
    
      const errors = {};
      if (!protfolio_name) {
        errors.protfolio_name = "Please Enter Name";
      }
      if (!protfolio_web_url) {
        errors.protfolio_web_url = "Please Enter Web url";
      }
      if (!protfolio_app_url) {
        errors.protfolio_app_url = "Please Enter App url";
      }
      if (!status) {
        errors.status = "Please Enter your status";
      }
      
      return errors;
    };
    
    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(protfolio_name !="" && protfolio_web_url !="" && protfolio_app_url !="" && status !="")
        {
        try
        {
          const res = await axios.post("/protfolio/",{
            protfolio_name,
            protfolio_web_url,
            protfolio_app_url,
            status
                                
          });
         alert(res.data)
          navigate("/DisplayProtfolio")
        }
        catch(err)
        {
            alert(err)
        }
    }
  };
  return (
    <main id="main" class="main">
        <div className="row">
    <div className="col-lg-3">
    </div>
      <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Protfolio</h5>                
                  <form className="row g-3"> 
                  <div className="col-12 row">
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Protfolio Name:</label>
                        {/* <input type="text" className="form-control" defaultValue={service_name} id="service_name" onChange={(e)=>setService_name(e.target.value)} /> */}
                        <input type="text" className="form-control" id="protfolio_name" defaultValue={protfolio_name} placeholder='Enter Protfolio Name' onChange={(e)=>setProtfolio_name(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.protfolio_name}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputEmail4" className="form-label">Protfolio web url</label>
                        <input type="email" className="form-control" id="protfolio_web_url" defaultValue={protfolio_web_url} placeholder='Enter Web Url'  onChange={(e)=>setProtfolio_web_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.protfolio_web_url}</p>
                      </div>                      
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Protfolio App url:</label>
                        <input type="text" className="form-control" id="protfolio_app_url" defaultValue={protfolio_app_url} placeholder='Enter App Url' onChange={(e)=>setProtfolio_app_url(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.protfolio_app_url}</p>
                      </div>                      
                      
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Status</label>
                        <select class="form-select" id="example-select" name='status' value={status} select onChange={(e) => setStatus(e.target.value)}>
                            <option value={0}>Select Status</option>
                            <option value={1}>Active</option>
                            <option value={2}>In Active</option>
                        </select>
                        <p style={{ color: "red" }}>{formErrors.status}</p>
                      </div>
             
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        &nbsp; &nbsp;
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayProtfolio")}>Back</button>
                      </div>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
