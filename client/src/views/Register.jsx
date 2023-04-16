import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const[mobile,setMobile]=useState('')
    const[pwd,setPwd]=useState('')
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate();
    const validate = () => {
        const errors = {};
         if (!name) {
           errors.name = "Please Enter Name";
         }
         if (!email) {
            errors.email = "Please Enter Email";
           }
         if (!mobile) {
           errors.mobile = "Please Enter mobile";
         }
         if (!pwd) {
           errors.pwd = "Please Enter your pwd";
         }
         
         return errors;
       };

    const submitHandle=async(e)=>{
        e.preventDefault()
        setError(validate()) 
        if(mobile!="" && pwd!="" && name!="" && email!="") 
    // try
         
        {
          const res = await axios.post("/register/",{
            mobile,
            pwd,
            name,
            email
                                
          });
         alert(res.data)
            navigate("/")
        }
        // catch(err)
        // {
        //     alert(err)
        // }

     //    try {
    //     const res= await axios.post("/Register", {
    //       params: {
    //         mobile: mobile,
    //         pwd: pwd,
    //         name:name,
    //         email:email
    //       }
    //     })  
    //  //   setUser1(res.data)        
                     
    //     if(res.data>0)
    //     {          
    //       setError("")
    //       sessionStorage.setItem("user",res.data)       
          
    //       window.location.reload()
    //     }
    //     else
    //     {
    //       setError("Invalid UserId/Password")
    //     }
       
      
       
    //    } catch (error) {
              
    //    }
    
     
    }

  return (
    <main>
    <div class="container">


      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span class="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Your Name</label>
                      <input type="text" name="name" class="form-control" id="yourName" onChange={e=>setName(e.target.value)} required/>
                      <p style={{ color: "red" }}>{error.name}</p>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Your Email</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" onChange={e=>setEmail(e.target.value)} required/>
                      <p style={{ color: "red" }}>{error.email}</p>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Your Mobile</label>
                      <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                        {/* <input type="text" name="username" class="form-control" id="yourUsername" required/> */}
                        <input type="text"  class="form-control" id="inputNanme4" onChange={e=>setMobile(e.target.value)}/> 
                        <p style={{ color: "red" }}>{error.mobile}</p>
                        {/* <div class="invalid-feedback">Please choose a username.</div> */}
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      {/* <input type="password" name="password" class="form-control" id="yourPassword" required/> */}
                      <input type="password" class="form-control" id="inputEmail4" onChange={e=>setPwd(e.target.value)} />
                      <p style={{ color: "red" }}>{error.pwd}</p>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div class="col-12">
                      {/* <button class="btn btn-primary w-100" type="submit">Create Account</button> */}
                      <button class="btn btn-primary w-100" type="submit" onClick={submitHandle}>Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account?  
                      <Link to="/"> Log in </Link>
                      {/* <a href='Login'>Login</a> */}
                      {/* <a href="pages-login.html">Log in</a> */}
                      </p>
                    </div>
                  </form>

                </div>
              </div>

              

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
  )
}
