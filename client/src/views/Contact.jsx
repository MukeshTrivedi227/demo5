import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'


export default function Contact() {
    const [contact_name,setContact_name]=useState('');
    const [contact_image,setContact_image]=useState('');
    const [contact_image2,setContact_image2]=useState('');
    const [contact_phone1,setContact_phone1]=useState('');
    const [contact_phone2,setContact_phone2]=useState('');
    const [contact_email1,setContact_email1]=useState('');
    const [contact_email2,setContact_email2]=useState('');
    const [insta_url,setInsta_url]=useState('');
    const [facebook_url,setFacebook_url]=useState('');
    const [twitter_url,setTwitter_url]=useState('');
    const [linkedin_url,setLinkedin_url]=useState('');
    const [youtube_url,setYoutube_url]=useState('');
    const [google_url,setGoogle_url]=useState('');
    const navigate=useNavigate();  
    const location = useLocation()
    const contact_id = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : 0;
    const [formErrors, setFormErrors] = useState({});
    useEffect(()=>{  
      if(contact_id)
      {
      fatchUsers();
      }
      
      },[])
      
      const fatchUsers= async()=>{
        try{        
            const res = await axios.get(`/contact/`+contact_id);
            setContact_name(res.data.contact_name);
            setContact_image2(res.data.contact_image);
            setContact_phone1(res.data.contact_phone1);
            setContact_phone2(res.data.contact_phone2);

            setContact_email1(res.data.contact_email1);
            setContact_email2(res.data.contact_email2);
            setInsta_url(res.data.insta_url);
            setFacebook_url(res.data.facebook_url);

            setTwitter_url(res.data.twitter_url);
            setLinkedin_url(res.data.linkedin_url);
            setYoutube_url(res.data.youtube_url);
            setGoogle_url(res.data.google_url);

            }catch(err){
            console.log(err)
        }            
      }

    const validate = () => {
    
      const errors = {};
      if (!contact_name) {
        errors.contact_name = "Please Enter Name";
      }
      if(!contact_image2){
      if (!contact_image) {
        errors.contact_image = "Please Enter Image";
      }
      }
      if (!contact_phone1) {
        errors.contact_phone1 = "Please Enter Contact Number1";
      }
      if (!contact_phone2) {
        errors.contact_phone2 = "Please Enter Contact Number2";
      }
      if (!contact_email1) {
        errors.contact_email1 = "Please Enter Email id 1";
      }
      if (!contact_email2) {
        errors.contact_email2 = "Please Enter Email id 2";
      }
      if (!insta_url) {
        errors.insta_url = "Please Enter Insta url";
      }
      if (!facebook_url) {
        errors.facebook_url = "Please Enter Facebook url";
      }
      if (!twitter_url) {
        errors.twitter_url = "Please Enter twitter url";
      }
      if (!linkedin_url) {
        errors.linkedin_url = "Please Enter Linkedin url";
      }
      if (!youtube_url) {
        errors.youtube_url = "Please Enter Youtubr url";
      }
      if (!google_url) {
        errors.google_url = "Please Enter goole url";
      }
            
      return errors;
    };
    const upload = async () => {
      let res="";
      try {
        
        if(contact_image)
        {
        const fromData = new FormData();
        fromData.append("file",contact_image);
        const res = await axios.post("/upload",fromData);
        //return res.data;
        // alert(res.data)
         insertData(res.data)
      } 
      else
      {
        insertData(contact_image2)
      }
    } catch (err)
      {
        console.log(err);
      }
    };
    const insertData=async(contact_image)=>{
      let res="";
      try {
        if(contact_id){
         res = await axios.put("/contact/"+contact_id,{
          contact_name,
          contact_image,
          contact_phone1,
          contact_phone2,
          contact_email1,
          contact_email2,
          insta_url,
          facebook_url,
          twitter_url,
          linkedin_url,
          youtube_url,
          google_url

         });
       
      }
      else{
        const res = await axios.post("/contact/",{
          contact_name,
            contact_image,
            contact_phone1,
            contact_phone2,
            contact_email1,
            contact_email2,
            insta_url,
            facebook_url,
            twitter_url,
            linkedin_url,
            youtube_url,
            google_url

         });
      }
         
    }
      catch(err)
      {
          alert(err)
      }
      alert(res.data)
      navigate("/DisplayContacts")
    }


    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate())
        if(contact_name !="" && contact_image !="" && contact_phone1 != ""
        && contact_phone2 != "" && contact_email1 != "" && contact_email2 != ""
        && insta_url != "" && facebook_url != "" && twitter_url != ""&& linkedin_url != ""
        && youtube_url != "" && google_url != "" )
       {
        upload();
       
      
    //     try
    //     {
    //       const res = await axios.post("/contact/",{
    //         contact_name,
    //         contact_image,
    //         contact_phone1,
    //         contact_phone2,
    //         contact_email1,
    //         contact_email2,
    //         insta_url,
    //         facebook_url,
    //         twitter_url,
    //         linkedin_url,
    //         youtube_url,
    //         google_url

    //       });
    //      alert(res.data)
    //       navigate("/DisplayContact")
    //     }
    //     catch(err)
    //     {
    //         alert(err)
    //     }
    // }
      }
      if(contact_name !="" && contact_phone1 != ""
        && contact_phone2 != "" && contact_email1 != "" && contact_email2 != ""
        && insta_url != "" && facebook_url != "" && twitter_url != ""&& linkedin_url != ""
        && youtube_url != "" && google_url != "" )
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
              <h5 className="card-title">Contact</h5>                
                  <form className="row g-3">
                  <div className='col-12 row'>
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Contact Name:</label>
                        <input type="text" className="form-control" id="contact_name" defaultValue={contact_name} onChange={(e)=>setContact_name(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.contact_name}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputEmail4" className="form-label">Contact Image</label>
                        <input type="file" className="form-control" id="contact_image" defaultValue={contact_image} onChange={(e)=>setContact_image(e.target.files[0])}/>
                        <p style={{ color: "red" }}>{formErrors.contact_image}</p>
                      </div>                      
                      <div className="col-4">
                        <label for="inputNanme4" className="form-label">Contact Phone1:</label>
                        <input type="text" className="form-control" id="contact_phone1" defaultValue={contact_phone1} onChange={(e)=>setContact_phone1(e.target.value)} />
                        <p style={{ color: "red" }}>{formErrors.contact_phone1}</p>
                      </div>                      
                      
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Contact Phone2</label>
                        <input type="text" className="form-control" id="contact_phone2" defaultValue={contact_phone2} onChange={(e)=>setContact_phone2(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.contact_phone2}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Contact Email1</label>
                        <input type="text" className="form-control" id="contact_email1" defaultValue={contact_email1} onChange={(e)=>setContact_email1(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.contact_email1}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Contact Email2</label>
                        <input type="text" className="form-control" id="contact_email2" defaultValue={contact_email2} onChange={(e)=>setContact_email2(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.contact_email2}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Insta Url</label>
                        <input type="text" className="form-control" id="insta_url" defaultValue={insta_url} onChange={(e)=>setInsta_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.insta_url}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">	Facebook Url</label>
                        <input type="text" className="form-control" id="facebook_url" defaultValue={facebook_url} onChange={(e)=>setFacebook_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.facebook_url}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Twitter Url</label>
                        <input type="text" className="form-control" id="twitter_url" defaultValue={twitter_url} onChange={(e)=>setTwitter_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.twitter_url}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">	Linkedin Url</label>
                        <input type="text" className="form-control" id="linkedin_url" defaultValue={linkedin_url} onChange={(e)=>setLinkedin_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.linkedin_url}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Youtube Url</label>
                        <input type="text" className="form-control" id="youtube_url" defaultValue={youtube_url} onChange={(e)=>setYoutube_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.youtube_url}</p>
                      </div>
                      <div className="col-4">
                        <label for="inputPassword4" className="form-label">Google Url</label>
                        <input type="text" className="form-control" id="google_url" defaultValue={google_url} onChange={(e)=>setGoogle_url(e.target.value)}/>
                        <p style={{ color: "red" }}>{formErrors.google_url}</p>
                      </div>
                      <div className="col-6">
                        <label for="inputEmail4" className="form-label"> Display Image</label>
                        {/* <input type="file" className="form-control" id="service_image"  onChange={(e)=>setService_image(e.target.files[0])}
                        /> */}
                        <img src={"/upload/"+contact_image2}  width="100" height="100"></img>
                        
                      </div>

                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        &nbsp; &nbsp;
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayContact")}>Back</button>
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
