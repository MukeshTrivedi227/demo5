import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Service() {
    const [service_name,setService_name]=useState('');
    const [service_image,setService_image]=useState('');
    const [service_image2,setService_image2]=useState('');
    const [description,setDescription]=useState('');
    const [status,setStatus]=useState('');
    const navigate=useNavigate();  
    const location = useLocation()
    const service_id = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    const [formErrors, setFormErrors] = useState({});
    useEffect(()=>{  
      if(service_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        try{        
            const res = await axios.get(`/service/`+service_id);
            setService_name(res.data.service_name);
            setService_image2(res.data.service_image);
            setDescription(res.data.description);
            setStatus(res.data.status);
            }catch(err){
            console.log(err)
        }            
      }
    const validate = () => {
    
      const errors = {};
      if (!service_name) {
        errors.service_name = "Please Enter Name";
      }
      if(!service_image2){
      if (!service_image) {
        errors.service_image = "Please Enter Email";
      }
    }
      if (!description) {
        errors.description = "Please Enter Description";
      }
      if (!status) {
        errors.status = "Please Enter your status";
      }
      
      return errors;
    };
    const upload = async () => {
      let res="";
      try {
        if(service_image)
        {
        const fromData = new FormData();
        fromData.append("file",service_image);
        const res = await axios.post("/upload",fromData);
        //return res.data;
        // alert(res.data)
         insertData(res.data)
      } 
      else
      {
        insertData(service_image2)
      }
    } catch (err)
      {
        console.log(err);
      }
    };
    const insertData=async(service_image)=>{
      let res="";
      try {
        if(service_id){
        res = await axios.put("/service/"+service_id,{
          service_name,
          service_image,
          description,
          status
         });
       alert(res.data)
      }
      else{
        const res = await axios.post("/service/",{
          service_name,
          service_image,
          description,
          status
         });
       
      }
     }
      catch(err)
      {
          alert(err)
      }
      
      navigate("/DisplayService")
    }


    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(service_name !="" && service_image !="" && description !="" && status !=""&& service_id==0)
        {
          upload();
        // try
        // {
        //   const res = await axios.post("/service/",{
        //     service_name,
        //     service_image,
        //     description,
        //     status
                                
        //   });
        //  alert(res.data)
        //   navigate("/DisplayService")
        // }
        // catch(err)
        // {
        //     alert(err)
        // }
      }
      if (service_name !="" && description!="" && status !="" && service_id!=0)
    {
      upload();
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
              <h5 className="card-title">Add App Development</h5>                
                  <form className="row g-3">
                  <div className='col-12 row'>
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Service Name:</label>
                        <input type="text" className="form-control" defaultValue={service_name} id="service_name" onChange={(e)=>setService_name(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.service_name}</p>
                      </div>
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label">Service Image</label>
                        <input type="file" className="form-control" id="service_image" defaultValue={service_image}  onChange={(e)=>setService_image(e.target.files[0])}/>
                        <p style={{ color: "red" }}>{formErrors.service_image}</p>
                      </div>                      
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Description:</label>
                        {/* <input type="text" className="form-control" id="description" onChange={(e)=>setDescription(e.target.value)} /> */}
                        <ReactQuill
                        className="editor"
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        defaultValue={description}
                    />
                        <p style={{ color: "red" }}>{formErrors.description}</p>
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
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label"> Display Image</label>
                        {/* <input type="file" className="form-control" id="service_image"  onChange={(e)=>setService_image(e.target.files[0])}
                        /> */}
                        <img src={"/upload/"+service_image2}  width="100" height="100"></img>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        &nbsp; &nbsp; 
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayService")}>Back</button>
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
