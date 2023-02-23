import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function Industries() {
    const [industrie_name,setIndustrie_name]=useState('');
    const [industrie_image,setIndustrie_image]=useState('');
    const [industrie_image2,setIndustrie_image2]=useState('');
    const [industrie_description,setIndustrie_description]=useState('');
    const [status,setStatus]=useState('');
    const navigate=useNavigate();  
    const location = useLocation()
    const industrie_id = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    const [formErrors, setFormErrors] = useState({});
    useEffect(()=>{  
      if(industrie_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        try{        
            const res = await axios.get(`/industries/`+industrie_id);
            setIndustrie_name(res.data.industrie_name);
            setIndustrie_image2(res.data.industrie_image);
            setIndustrie_description(res.data.industrie_description);
            setStatus(res.data.status);
            }catch(err){
            console.log(err)
        }            
      }

    const validate = () => {
    
      const errors = {};
      if (!industrie_name) {
        errors.industrie_name = "Please Enter Name";
      }
      if(!industrie_image2){
      if (!industrie_image) {
        errors.industrie_image = "Please Enter Email";
      }
      }
      if (!industrie_description) {
        errors.industrie_description = "Please Enter Description";
      }
      if (!status) {
        errors.status = "Please Enter your status";
      }
      
      return errors;
    };
    const upload = async () => {
      let res=" ";
      try {
        
        if(industrie_image)
        {
          alert(industrie_image)
        const fromData = new FormData();
        fromData.append("file",industrie_image);
        const res = await axios.post("/upload",fromData);
        //return res.data;
        // alert(res.data)
         insertData(res.data)
      } 
      else
      {
        insertData(industrie_image2)
      }
    } catch (err)
      {
        console.log(err);
      }
    };
    const insertData=async(industrie_image)=>{
     let res="";
      try {
        if(industrie_id){
        res = await axios.put("/industries/"+industrie_id,{
          industrie_name,
          industrie_image,
          industrie_description,
          status
         });
       alert(res.data)
      }
      else{
        const res = await axios.post("/industries/",{
          industrie_name,
          industrie_image,
          industrie_description,
          status
         });
        
      }
            
    }
      catch(err)
      {
          alert(err)
      }
      navigate("/DisplayIndustries")
    } 
    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(industrie_name !="" && industrie_image !="" && industrie_description !="" && status !="" && industrie_id!=0)
        {
          upload();
        // try
        // {
        //   const res = await axios.post("/industries/",{
        //     industrie_name,
        //     industrie_image,
        //     industrie_description,
        //     status
                                
        //   });
        //  alert(res.data)
        //   navigate("/DisplayIndustries")
        // }
        // catch(err)
        // {
        //     alert(err)
        // }
    }
    if(industrie_name !="" && industrie_description !="" && status !="" && industrie_id!=0 )
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
              <h5 className="card-title">Add Business</h5>                
                  <form className="row g-3">
                  <div className="col-12 row">
                      <div className="col-6">
                        <label for="inputNanme4" className="form-label">Industrie Name:</label>
                        <input type="text" className="form-control" defaultValue={industrie_name} id="industrie_name" placeholder='Enter Industrie Name' onChange={(e)=>setIndustrie_name(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.industrie_name}</p>
                      </div>
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label">Industrie Image</label>
                        <input type="file" className="form-control" defaultValue={industrie_image} id="industrie_image"  onChange={(e)=>setIndustrie_image(e.target.files[0])}/>
                        <p style={{ color: "red" }}>{formErrors.industrie_image}</p>
                      </div>                      
                      <div className="col-6">
                        <label for="inputNanme4" className="form-label">Industrie Description:</label>
                        {/* <input type="text" className="form-control" id="industrie_description" onChange={(e)=>setIndustrie_description(e.target.value)} /> */}
                        <ReactQuill className="editor" theme="snow" defaultValue={industrie_description} value={industrie_description} onChange={setIndustrie_description}/>
                        <p style={{ color: "red" }}>{formErrors.industrie_description}</p>
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
                        <img src={"/upload/"+industrie_image2}  width="100" height="100"></img>
                        
                      </div>
             
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        &nbsp; &nbsp;
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayIndustries")}>Back</button>
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
