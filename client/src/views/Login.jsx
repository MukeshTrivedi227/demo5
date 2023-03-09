import axios from 'axios'
import React,{useState} from 'react'

export default function Login() {
    const[mobile,setMobile]=useState('')
    const[pwd,setPwd]=useState('')
    const [error,setError]=useState('')

    const submitHandle=async()=>{ 
       try {
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
       
      
       
       } catch (error) {
              
       }
    
     
    }
  

    return (
      <main id="main" class="main">
          <div class="col-12">             
                <label for="inputNanme4" class="form-label">Your Mobile</label>
                 <input type="text" class="form-control" id="inputNanme4" onChange={e=>setMobile(e.target.value)} />
          </div>
          <div class="col-12">
                    <label for="inputEmail4" class="form-label">Your Password</label>
                    <input type="email" class="form-control" id="inputEmail4" onChange={e=>setPwd(e.target.value)} />
          </div>
          <div class="col-12">
                    <button type="submit" className="btn btn-primary" onClick={submitHandle}>Login</button>                                
                    <p style={{color:'red'}}>{error}</p>
          </div>
      </main>
  )
}
