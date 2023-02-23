import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function Products() {
    const [product_name,setProduct_name]=useState('');
    const [product_image,setProduct_image]=useState('');
    const [product_image2,setProduct_image2]=useState('');
    const [product_description,setProduct_description]=useState('');
    const [status,setStatus]=useState('');
    const navigate=useNavigate();  
    const location = useLocation();
    const product_id = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    const [formErrors, setFormErrors] = useState({});
    useEffect(()=>{  
      if(product_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        try{        
            const res = await axios.get(`/product/`+product_id);
            setProduct_name(res.data.product_name);
            setProduct_image2(res.data.product_image);
            setProduct_description(res.data.product_description);
            setStatus(res.data.status);
            }catch(err){
            console.log(err)
        }            
      }


    const validate = () => {
    
      const errors = {};
      if (!product_name) {
        errors.product_name = "Please Enter Name";
      }
      if(!product_image2){
      if (!product_image) {
        errors.product_image = "Please Enter Email";
      }
      }
      if (!product_description) {
        errors.product_description = "Please Enter Description";
      }
      if (!status) {
        errors.status = "Please Enter your status";
      }
      
      return errors;
    };
    const upload = async () => {
      try {
        let res=" "
        if(product_image)
        {
        const fromData = new FormData();
        fromData.append("file",product_image);
        const res = await axios.post("/upload",fromData);
        //return res.data;
        // alert(res.data)
        }
         insertData(res.data)
      } catch (err)
      {
        console.log(err);
      }
    };
    const insertData=async(product_image)=>{
      let res="";
      try {
        // upload();
        if(product_id){
          res = await axios.put("/product/"+product_id,{
          product_name,
          product_image,
          product_description,
          status
        });
      //  alert(res.data)
       
      }
      else{
        const res = await axios.post("/product/",{
          product_name,
          product_image,
          product_description,
          status
        });
      //  alert(res.data)
      }
        // navigate("/DisplayProduct")
    }
    catch(err)
      {
          alert(err)
      } 
      alert(res.data)
      navigate("/DisplayProduct")
  }
    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(product_name !="" && product_image !="" && product_description !="" && status !="" && product_id==0)
        {
          upload();
        // try
        // {
        //   const res = await axios.post("/product/",{
        //     product_name,
        //     product_image,
        //     product_description,
        //     status
        //   });
        //  alert(res.data)
        //   navigate("/DisplayProduct")
        // }
        // catch(err)
        // {
        //     alert(err)
        // }
    }
    if(product_name !="" && product_image !="" && product_description !="" && status !="" && product_id!=0)
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
              <h5 className="card-title">Add Products</h5>                
                  <form className="row g-3">
                  <div className="col-12 row">
                      <div className="col-6">
                        <label for="inputNanme4" className="form-label">Product Name:</label>
                        <input type="text" className="form-control" defaultValue={product_name} id="product_name" placeholder='Enter Product Name' onChange={(e)=>setProduct_name(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.product_name}</p>
                      </div>
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label">Product Image</label>
                        <input type="file" className="form-control" id="product_image" defaultValue={product_image} onChange={(e)=>setProduct_image(e.target.files[0])}/>
                        <p style={{ color: "red" }}>{formErrors.product_image}</p>
                      </div>                      
                      <div className="col-6">
                        <label for="inputNanme4" className="form-label">Product Description:</label>
                        {/* <input type="text" className="form-control" id="product_description" onChange={(e)=>setProduct_description(e.target.value)} /> */}
                        <ReactQuill
                        className="editor" theme="snow" value={product_description} defaultValue={product_description} onChange={setProduct_description}/>
                        <p style={{ color: "red" }}>{formErrors.product_description}</p>
                      </div>                      
                      
                      <div className="col-6">
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
                        
                        <img src={"/upload/"+product_image2}  width="100" height="100"></img>
                        
                      </div> 
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        &nbsp; &nbsp;
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayProduct")}>Back</button>
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
