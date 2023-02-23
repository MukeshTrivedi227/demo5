import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Hiredeveloper() {
    const [hiredeve_name,setHiredeve_name]=useState('');
    const [hiredeve_image,setHiredeve_image]=useState('');
    const [hiredeve_image2,setHiredeve_image2]=useState('');
    const [hiredeve_description,setHiredeve_description]=useState('');
    const [status,setStatus]=useState('');
    const navigate=useNavigate();
    const location = useLocation();
    // const hiredeve_id = location.pathname.split.apply("/")[2] ;
    const hiredeve_id = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    const [formErrors, setFormErrors] = useState({});
    useEffect(()=>{  
      
      if(hiredeve_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        
        try{        
            const res = await axios.get(`/hiredeveloper/`+hiredeve_id);
            console.log(res.data)
            setHiredeve_name(res.data.hiredeve_name);
            setHiredeve_image2(res.data.hiredeve_image);
            setHiredeve_description(res.data.hiredeve_description);
            setStatus(res.data.status);
            }catch(err){
            console.log(err)
        }            
      }
   const validate = () => {
     const errors = {};
      if (!hiredeve_name) {
        errors.hiredeve_name = "Please Enter Name";
      }
      if (!hiredeve_image2) {
        if(!hiredeve_image){
        errors.hiredeve_image = "Please Enter Image";
           }
      }
      if (!hiredeve_description) {
        errors.hiredeve_description = "Please Enter Description";
      }
      if (!status) {
        errors.status = "Please Enter your status";
      }
      
      return errors;
    };
    const upload = async () => {
      let res="";
      try {
        if(hiredeve_image)
        {
        const fromData = new FormData();
        fromData.append("file",hiredeve_image);
        res = await axios.post("/upload",fromData);
        //return res.data;
        // alert(res.data)
         insertData(res.data)
      } 
      else
      {
        insertData(hiredeve_image2)
      }
    } catch (err)
      {
        console.log(err);
      }
    };
    const insertData=async(hiredeve_image)=>{
     let res="";
      try {

        if(hiredeve_id){
          res = await axios.put("/hiredeveloper/"+hiredeve_id,{
            hiredeve_name,
            hiredeve_image,
            hiredeve_description,
            status
          });
        }
        else{
        const res = await axios.post("/hiredeveloper/",{
          hiredeve_name,
          hiredeve_image,
          hiredeve_description,
          status
                              
        });
      }
       
      }
      catch(err)
      {
          alert(err)
      }
      alert(res.data)
        navigate("/DisplayHiredevelopers")
    } 


    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(hiredeve_name != "" && hiredeve_image !="" && hiredeve_description !="" && status != "" && hiredeve_id==0)
        {
          upload();
        // try
        // {
        //   const res = await axios.post("/hiredeveloper/",{
        //     hiredeve_name,
        //     hiredeve_image,
        //     hiredeve_description,
        //     status
                                
        //   });
        //  alert(res.data)
        //   navigate("/DisplayHiredevelopers")
        // }
        // catch(err)
        // {
        //     alert(err)
        // }
    }
    if (hiredeve_name !="" && hiredeve_description!="" && status !="" && hiredeve_id !=0)
    {
      upload();
    }
  };
  return (
    <main id="main" class="main">
        <div className="row">
    
      <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hire Developer</h5>                
                  <form className="row g-3">
                      <div class="col-12 row">
                          <div className="col-6">
                            <label for="inputNanme4" className="form-label">Developer Name:</label>
                            <input type="text" className="form-control" id="hiredeve_name" defaultValue={hiredeve_name} placeholder='Enter Developer Name' onChange={(e)=>setHiredeve_name(e.target.value)} />
                            <p style={{ color: "red" }}>{formErrors.hiredeve_name}</p>
                          </div>
                          <div className="col-6">
                            <label for="inputEmail4" className="form-label">Developer Image</label>
                            <input type="file" className="form-control" id="hiredeve_image" defaultValue={hiredeve_image} placeholder='Select Developer Image'  onChange={(e)=>setHiredeve_image(e.target.files[0])}/>
                            <p style={{ color: "red" }}>{formErrors.hiredeve_image}</p>                          
                          </div>                      
                          <div className="col-6">
                            <label for="inputNanme4" className="form-label">Description:</label>
                            <input type="text" className="form-control" id="hiredeve_description" onChange={(e)=>setHiredeve_description(e.target.value)} defaultValue={hiredeve_description}/>
                            {/* <ReactQuill className="editor" theme="snow" onChange={(e)=> setHiredeve_description(e.target.value)} defaultValue={hiredeve_description}/> */}
                            <p style={{ color: "red" }}>{formErrors.hiredeve_description}</p>
                          </div>                      
                       
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">status</label>
                        <select class="form-select" id="example-select" name='status' value={status} select onChange={(e) => setStatus(e.target.value)}>
                            <option value={0}>Select Status</option>
                            <option value={1}>Active</option>
                            <option value={2}>In Active</option>
                        </select>
                        <p style={{ color: "red" }}>{formErrors.status}</p>
                      </div>
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label"> Display Image</label>
                        <img src={"/upload/"+hiredeve_image2}  width="100" height="100"></img>
                        
                      </div>
                      
                      <div className="text-center">
                       <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                       &nbsp; &nbsp; 
                       <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayHiredevelopers")}>Back</button> 
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
