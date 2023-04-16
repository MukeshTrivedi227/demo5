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

export default function DisplayHiredevelopers() {
    const [hiredevelopers,setHiredevelopers]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/hiredeveloper");
          setHiredevelopers(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/hiredeveloper/"+e);
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
    //             <h1><u>Display Hiredeve</u></h1>      
                        
    //               <table class="table table-striped">
    //                 <thead>
    //                   <tr>
    //                     <th scope="col">#</th>
    //                     <th scope="col">hiredeve_name</th>
    //                     <th scope="col">hiredeve_image</th>
    //                     <th scope="col">hiredeve_Description</th>
    //                     <th scope="col">Status</th>
                                               
    //                     <th></th>
    //                     <th></th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                 {hiredevelopers.map((hiredeve)=>
    //                   <tr>
                      
    //                     <th scope="row">{i++}</th>
    //                     <td>{hiredeve.hiredeve_name}</td>
    //                     <td>{hiredeve.hiredeve_image}</td>
    //                     <td>{hiredeve.hiredeve_description}</td>
    //                     <td>{hiredeve.status}</td>
                                               
    //                     <td>
    //                         <button className="delete" onClick={()=>handleDelete(hiredeve.hiredeve_id)}>Delete</button>
    //                     </td>
    //                     {/* <td>
    //                         <button className="edit"><Link to={`/updateProduct/${product.hiredeve_id}`}>Edit</Link></button>
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
//         <h5 class='card-title'>Display Hiredeve</h5>
       
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
//                     Hiredeve Name
//                     </a>
//                   </th>
//                   <th
//                     scope='col'
//                     data-sortable=''
//                     style={{width : "37.7239%;"}}
//                     class='desc'>
//                     <a href='#' class='dataTable-sorter'>
//                     Hiredeve Image
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Description
//                     </a>
//                   </th>
//                   <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
//                     <a href='#' class='dataTable-sorter'>
//                     Status 
//                     </a>
//                   </th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//               {hiredevelopers.map((hiredeve)=>
//                        <tr>
                      
//                          <th scope="row">{i++}</th>
//                          <td>{hiredeve.hiredeve_name}</td>
//                          <td>{hiredeve.hiredeve_image}</td>
//                          <td>{hiredeve.hiredeve_description}</td>
//                          <td>{hiredeve.status}</td>
                                               
//                          <td>
//                              <button className="delete" onClick={()=>handleDelete(hiredeve.hiredeve_id)}>Delete</button>
//                          </td>
//                          {/* <td>
//     //                         <button className="edit"><Link to={`/updateProduct/${product.hiredeve_id}`}>Edit</Link></button>
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
        <h5 class='card-title'>Display Hiredeve</h5>
       
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
                    Hiredeve Name
                    </a>
                  </th>
                  {/* <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                    Hiredeve Image
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Hiredeve Description
                    </a>
                  </th> */}
                  <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Status 
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "19.2835%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    Image
                    </a>
                  </th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
              {hiredevelopers.map((hiredeve)=>
                       <tr>
                      
                        <td scope="row">{i++}</td>
                         <td>{hiredeve.hiredeve_name}</td>
                         {/* <td>{hiredeve.hiredeve_image}</td>
                         <td>{hiredeve.hiredeve_description}</td> */}
                         <td>{hiredeve.status}</td>
                         <td> <img src={"/upload/"+hiredeve.hiredeve_image} alt='mukesh' width="100" height="100"></img> </td>                      
                         <td>
                             <button className="delete" onClick={()=>handleDelete(hiredeve.hiredeve_id)}>Delete</button>
                         &nbsp; &nbsp;
                             <button className="edit"><Link to={`/hiredeveloper/${hiredeve.hiredeve_id}`}>Edit</Link></button>
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
