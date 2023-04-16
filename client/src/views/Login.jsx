import axios from 'axios'
import React,{useState} from 'react'
import {Link} from "react-router-dom";

export default function Login() {
    const[mobile,setMobile]=useState('')
    const[pwd,setPwd]=useState('')
    const [error,setError]=useState('')
    const validate = () => {
      const errors = {};
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
      if (mobile!=" " && pwd!="") 
      //  try
        {
        const res= await axios.get("/login", {
          params: {
            mobile: mobile,
            pwd: pwd
          }
        })  
     //   setUser1(res.data)        
                     
        if(res.data>0)
        {          
          setError("")
          sessionStorage.setItem("user",res.data)       
          
          window.location.reload()
        }
        else
        {
          setError("Invalid UserId/Password")
        }
       
      
       
       } 
      //  catch (error) {
              
      //  }
    
     
    }
  

    return (
      // <main id="main" class="main">
      //     <div class="col-12">             
      //           <label for="inputNanme4" class="form-label">Your Mobile</label>
      //            <input type="text" class="form-control" id="inputNanme4" onChange={e=>setMobile(e.target.value)} />
      //     </div>
      //     <div class="col-12">
      //               <label for="inputEmail4" class="form-label">Your Password</label>
      //               <input type="email" class="form-control" id="inputEmail4" onChange={e=>setPwd(e.target.value)} />
      //     </div>
      //     <div class="col-12">
      //               <button type="submit" className="btn btn-primary" onClick={submitHandle}>Login</button>                                
      //               <p style={{color:'red'}}>{error}</p>
      //     </div>
      // </main>
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
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Your Mobile</label>
                      <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                        {/* <input type="text" name="username" class="form-control" id="yourUsername" onChange={e=>setMobile(e.target.value)}/>  */}
                        <input type="text"  class="form-control" id="inputNanme4" onChange={e=>setMobile(e.target.value)} /> 
                        <p style={{ color: "red" }}>{error.mobile}</p>

                         {/* <input type="text" class="form-control" id="inputNanme4" onChange={e=>setMobile(e.target.value)} /> */}
                        <div class="invalid-feedback">Please enter your  Mobile.</div>
                      {/* <input type="email" class="form-control" id="inputEmail4" onChange={e=>setPwd(e.target.value)} /> */}
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      {/* <input type="password" name="password" class="form-control" id="yourPassword" required/> */}
                      <input type="password" class="form-control" id="inputEmail4" onChange={e=>setPwd(e.target.value)} required  />
                      <p style={{ color: "red" }}>{error.pwd}</p>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit" onClick={submitHandle}>Login</button>
                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandle}>Login</button> */}
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? 
                      <Link to="/Register"> Create an account </Link>
                      {/* <a href="Register">Create an account</a> */}
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


{/* <main>
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
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required/>
                        <div class="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

              

            </div>
          </div>
        </div>

      </section>

    </div>
  </main> */}