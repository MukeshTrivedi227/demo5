import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import "../../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../node_modules/datatables.net-buttons/js/dataTables.buttons.js";
import "../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../node_modules/datatables.net-buttons/js/buttons.flash.js";
import "../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../node_modules/datatables.net-buttons/js/buttons.print.js";
import $ from 'jquery'; 


export default function DisplayContact() {
    const [contacts,setContacts]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/contact");
          setContacts(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/contact/"+e);
            alert(res.data)
            window.location.reload()     
        }catch(err){
            console.log(err)
        } 
       }
     }
     $(document).ready(function () {
      setTimeout(function(){
      $('#example').DataTable(
          {
              "bDestroy": true,
              pagingType: 'full_numbers',
              pageLength: 10,
              processing: true,
              dom: 'Bfrtip',
                  buttons: ['copy', 'csv', 'print'
                  ]
          }
      );
      } ,
      1000
      );
  });
 
 return (
    // <div class="row">
    //     <div class="col-lg-3">
    //     </div>
    //     <div class="col-lg-6">
    //           <div class="card">
    //             <div class="card-body">
    //             <h1><u>Display Industries</u></h1>      
                        
    //               <table class="table table-striped">
    //                 <thead>
    //                   <tr>
    //                     <th scope="col">#</th>
    //                     <th scope="col">contact_name</th>
    //                     <th scope="col">contact_image</th>
    //                     <th scope="col">contact_phone1</th>
    //                     <th scope="col">contact_phone2</th>
    //                     <th scope="col">contact_email1</th>
    //                     <th scope="col">contact_email2</th>
    //                     <th scope="col">insta_url</th>
    //                     <th scope="col">facebook_url</th>
    //                     <th scope="col">twitter_url</th>
    //                     <th scope="col">linkedin_url</th>
    //                     <th scope="col">youtube_url</th>
    //                     <th scope="col">google_url</th>
                                               
    //                     <th></th>
    //                     <th></th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                 {contacts.map((contact)=>
    //                   <tr>
                      
    //                     <th scope="row">{i++}</th>
    //                     <td>{contact.contact_name}</td>
    //                     <td>{contact.contact_image}</td>
    //                     <td>{contact.contact_phone1}</td>
    //                     <td>{contact.contact_phone2}</td>
                        
    //                     <td>{contact.contact_email1}</td>
    //                     <td>{contact.contact_email2}</td>
    //                     <td>{contact.insta_url}</td>
    //                     <td>{contact.facebook_url}</td>
                        
    //                     <td>{contact.twitter_url}</td>
    //                     <td>{contact.linkedin_url}</td>
    //                     <td>{contact.youtube_url}</td>
    //                     <td>{contact.google_url}</td>


                                               
    //                     <td>
    //                         <button className="delete" onClick={()=>handleDelete(contacts.contact_id )}>Delete</button>
    //                     </td>
    //                     {/* <td>
    //                         <button className="edit"><Link to={`/updateProduct/${product.product_id}`}>Edit</Link></button>
    //                     </td> */}
              
    //                   </tr>
    //                 )}
    //                 </tbody>
    //               </table>        
    //             </div>
    //           </div>
    //     </div>
    // </div>
//     <main id="main" class="main">
//     <div class='row'>
//   <div class='col-lg-12'>
//     <div class='card'>
//       <div class='card-body'>
//         <h5 class='card-title'>Display Services</h5>
       
//         <div class='dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns'>
//           <div class='dataTable-top'>
//             <div class='dataTable-dropdown'>
//               <label>
//                 <select class='dataTable-selector'>
//                   <option value='5'>5</option>
//                   <option value='10' selected=''>
//                     10
//                   </option>
//                   <option value='15'>15</option>
//                   <option value='20'>20</option>
//                   <option value='25'>25</option>
//                 </select>
//                 entries per page
//               </label>
//             </div>
//             <div class='dataTable-search'>
//               <input
//                 class='dataTable-input'
//                 placeholder='Search...'
//                 type='text'
//               />
//             </div>
//           </div>
//           <div class='dataTable-container'>
//             <table class='table datatable dataTable-table'>
//               <thead>
//                 <tr>
//                   <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
                  
//                     <a href='#' class='dataTable-sorter'>
//                       #
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Name
//                     </a>
//                   </th>
//                   <th
//                     scope='col'
//                     data-sortable=''
//                     style={{width : "37.7239%;"}}
//                     class='desc'>
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Image
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Phone1
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Phone2 
//                     </a>
//                   </th>
                  
//                   <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
                  
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Email1
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Contact Email2
//                     </a>
//                   </th>
//                   <th
//                     scope='col'
//                     data-sortable=''
//                     style={{width : "37.7239%;"}}
//                     class='desc'>
//                     <a href='#' class='dataTable-sorter'>
//                   Iinsta Url
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Facebook Url
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Twitter Url 
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
                  
//                     <a href='#' class='dataTable-sorter'>
//                     Linkedin Url
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Youtube Url
//                     </a>
//                   </th>
//                   <th
//                     scope='col'
//                     data-sortable=''
//                     style={{width : "37.7239%;"}}
//                     class='desc'>
//                     <a href='#' class='dataTable-sorter'>
//                     Google Url
//                     </a>
//                   </th>
                  
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//               {contacts.map((contact)=>
//                        <tr>
                      
//                          <th scope="row">{i++}</th>
//                          <td>{contact.contact_name}</td>
//                          <td>{contact.contact_image}</td>
//                          <td>{contact.contact_phone1}</td>
//                          <td>{contact.contact_phone2}</td>
                        
//                          <td>{contact.contact_email1}</td>
//                          <td>{contact.contact_email2}</td>
//                          <td>{contact.insta_url}</td>
//                          <td>{contact.facebook_url}</td>
                        
//                          <td>{contact.twitter_url}</td>
//                          <td>{contact.linkedin_url}</td>
//                          <td>{contact.youtube_url}</td>
//                          <td>{contact.google_url}</td>


                                               
//                          <td>
//                              <button className="delete" onClick={()=>handleDelete(contacts.contact_id )}>Delete</button>
//                          </td>
//                          {/* <td>
//     //                         <button className="edit"><Link to={`/updateProduct/${product.product_id}`}>Edit</Link></button>
//     //                     </td> */}
              
//                        </tr>
//                      )}                
//               </tbody>
//             </table>
//           </div>
//           <div class='dataTable-bottom'>
//             <div class='dataTable-info'>Showing 1 to 5 of 5 entries</div>
//             <nav class='dataTable-pagination'>
//               <ul class='dataTable-pagination-list'></ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </main>
<main id="main" class="main">
<div class='row'>
<div class='col-lg-12'>
<div class='card'>
  <div class='card-body'>
    <h5 class='card-title'>Display Contact</h5>
   
    <div class='dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns'>
       <div class='dataTable-container'>
        <table id="example" class="table table-striped dt-responsive nowrap w-100">
          <thead>
            <tr>
              <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
              
                <a href='#' class='dataTable-sorter'>
                  #
                </a>
              </th>
              <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
                     <a href='#' class='dataTable-sorter'>
                     Contact Name
                     </a>
                   </th>
                   <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                    Contact Image
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Contact Phone1
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Contact Phone2 
                    </a>
                  </th>
                  
                  <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
                  
                    <a href='#' class='dataTable-sorter'>
                    Contact Email1
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Contact Email2
                    </a>
                  </th>
                  <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                  Iinsta Url
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Facebook Url
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Twitter Url 
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width:"5.6902%;"}} >
                  
                    <a href='#' class='dataTable-sorter'>
                    Linkedin Url
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width:"28.0295%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Youtube Url
                    </a>
                  </th>
                  <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                    Google Url
                    </a>
                  </th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact)=>
                   <tr>
                  
                    <td scope="row">{i++}</td>
                            <td>{contact.contact_name}</td>
                          <td>{contact.contact_image}</td>
                          <td>{contact.contact_phone1}</td>
                          <td>{contact.contact_phone2}</td>
                          <td>{contact.contact_email1}</td>
                          <td>{contact.contact_email2}</td>
                          <td>{contact.insta_url}</td>
                          <td>{contact.facebook_url}</td>
                        
                          <td>{contact.twitter_url}</td>
                          <td>{contact.linkedin_url}</td>
                          <td>{contact.youtube_url}</td>
                          <td>{contact.google_url}</td>
                                           
                     <td>
                         <button className="delete" onClick={()=>handleDelete(contact.contact_id)}>Delete</button>
                     </td>
                     <td>
                         <button className="edit"><Link to={`/Contact/${contact.contact_id}`}>Edit</Link></button>
                     </td>
          
                 </tr>
                )}
            
          </tbody>
        </table>
      </div>
      <div class='dataTable-bottom'>
        {/* <div class='dataTable-info'>Showing 1 to 5 of 5 entries</div> */}
        <nav class='dataTable-pagination'>
          <ul class='dataTable-pagination-list'></ul>
        </nav>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</main>  

)

}
