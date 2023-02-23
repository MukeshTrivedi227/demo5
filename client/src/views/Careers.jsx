import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export default function Careers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [education, setEducation] = useState('');
  const [resume, setResume] = useState('');
  const [status, setStatus] = useState('');
  const [job_status, setJob_status] = useState();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  
  const validate = () => {
  
    const errors = {};
    if (!name) {
      errors.name = "Please Enter Name";
    }
    if (!email) {
      errors.email = "Please Enter Email";
    }
    if (!contact) {
      errors.contact = "Please Select Contact Number";
    }
    if (!education) {
      errors.education = "Please Enter your Education";
    }
    if (!resume) {
      errors.resume = "Please Select your Resume";
    }
    if (!status) {
      errors.status = "Please Select your Status";
    }
    if (!job_status) {
      errors.job_status = "Please Select your Job Status";
    }
    return errors;
  };
  
  const upload = async () => {
    try {
      const fromData = new FormData();
      fromData.append("file",resume);
      const res = await axios.post("/upload",fromData);
      //return res.data;
      alert(res.data)
       insertData(res.data)
    } catch (err)
    {
      console.log(err);
    }
  };
  const insertData=async(resume)=>{
    try {
      upload();
        const res = await axios.post("/career", {
          name, 
          email,
          contact,
          education,
          resume,
          status,
          job_status
        });
        //   alert(res.data)
        // navigate("/DisplayCareers")
      } catch (err) {
        alert(err);
      }
  }
  

  const submitHandle = async (e) => {
    e.preventDefault();

    setFormErrors(validate())
    
      if(name !="" && email !="" && contact !="" && education !="" && resume !="" && status !="" && job_status !="" )
      {
        // try {
        //   const res = await axios.post("/career", {
        //     name, 
        //     email,
        //     contact,
        //     education,
        //     resume,
        //     status,
        //     job_status
        //   });
        //     alert(res.data)
        //   navigate("/DisplayCareers")
        // } catch (err) {
        //   alert(err);
        // }
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
              <h5 className='card-title'>Add career</h5>
              <form className='row g-3'>
                <div className='col-12 row'>
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      First Name:
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder="Enter Frist Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p style={{ color: "red" }}>{formErrors.name}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputEmail4' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      Contact:
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='contact'
                      placeholder="Enter Contact Number"
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <p style={{ color: "red" }}>{formErrors.contact}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      Education
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='education'
                      placeholder="Enter Education"
                      onChange={(e) => setEducation(e.target.value)}
                    />
                    <p style={{ color: "red" }}>{formErrors.education}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      Resume
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      id='resume'
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                    <p style={{ color: "red" }}>{formErrors.resume}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      status
                    </label>
                    <select
                      class='form-select'
                      id='example-select'
                      name='status'
                      value={status}
                      select
                      onChange={(e) => setStatus(e.target.value)}>
                      <option value={0}>Select Status</option>
                      <option value={1}>Fresher</option>
                      <option value={2}>Experience</option>
                    </select>
                    <p style={{ color: "red" }}>{formErrors.status}</p>
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      job_status
                    </label>
                    <select
                      class='form-select'
                      id='example-select1'
                      name='job_status'
                      value={job_status}
                      select
                      onChange={(e) => setJob_status(e.target.value)}>
                      <option value={0}>Select Status</option>
                      <option value={1}>Internship</option>
                      <option value={2}>job</option>
                    </select>
                    <p style={{ color: "red" }}>{formErrors.job_status}</p>
                  </div>
                  
                  <div className='text-center'>
                    <br></br>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      onClick={submitHandle}>
                      Submit
                    </button>
                    <span>
                      
                      <button
                        type='reset'
                        className='btn btn-secondary'
                        onClick={(e) => navigate("/DisplayAboutsus")}>
                        Back
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
