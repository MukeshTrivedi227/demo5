import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Aboutus() {
  const [about_image, setAbout_image] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate('');
  const [formErrors, setFormErrors] = useState({});
  const validate = () => {
    const errors = {};
    if (!about_image) {
        errors.about_image = "Please Select Aboutus Image";
    }
    if (!description) {
        errors.description = "About Description is Required";
    }
    return errors;
  };
  const upload = async () => {
    try {
      const fromData = new FormData();
      fromData.append("file",about_image);
      const res = await axios.post("/upload",fromData);
      //return res.data;
      alert(res.data)
       insertData(res.data)
    } catch (err)
    {
      console.log(err);
    }
  };
  const insertData=async(about_image)=>{
    try {
          upload();
            const res = await axios.post("/aboutsus/", {
          // about_image,
          about_image,
          description,
          });
          alert(res.data)
        navigate("/DisplayAboutsus")
       } catch (err) {
        alert(err);
      }
  }
  const submitHandle = async (e) => {
    e.preventDefault();

    setFormErrors(validate());
    if(about_image !="" && description !="")
    {
      upload();
    }
   
  };
 
  return (
    <main id='main' class='main'>
      <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Add Aboutus</h5>
              <form className='row g-3'>
                <div className='col-12 row'>
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      About image:
                    </label>
                    <input type='file' className='form-control' id='about_image' onChange={(e) => about_image(e.target.files[0])}/>
                    <p style={{color: "red"}}>{formErrors.about_image}</p>
                  </div>
                  
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      Description:
                    </label>
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                    />
                    <p style={{color: "red"}}>{formErrors.description}</p>
                  </div>

                  <div className='text-center'>
                    <br></br>
                    <button type='submit' className='btn btn-primary' onClick={submitHandle}>
                      Submit
                    </button>
                    <span>
                     <button type='reset' className='btn btn-secondary' onClick={(e) => navigate("/DisplayAboutsus")}>
                        Back
                      </button>
                    </span>
                  </div>
                  {/* <div class="row mb-3">
                  <label for="inputNumber" class="col-sm-2 col-form-label">File Upload</label>
                  <div class="col-sm-10">
                    <input class="form-control" type="file" id="formFile"/>
                  </div>
    </div>

                  <label for="inputPassword" class="col-sm-2 col-form-label">Textarea</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" style="height: 100px"></textarea>
                  </div>
               </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
