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

export default function DisplayIndustries() {
    const [industries,setIndustries]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/industries");
          setIndustries(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/industries/"+e);
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
    
    <main id="main" class="main">
    <div class='row'>
  <div class='col-lg-12'>
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>Display Industries</h5>
       
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
                    industrie_name
                    </a>
                  </th>
                  {/* <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                    industrie_image
                    </a>
                  </th>
                  <th scope='col' data-sortable='' style={{width: "9.27292%;"}}>
                    <a href='#' class='dataTable-sorter'>
                    industrie_Description
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
              {industries.map((industrie)=>
                       <tr>
                      
                        <td scope="row">{i++}</td>
                         <td>{industrie.industrie_name}</td>
                         {/* <td>{industrie.industrie_image}</td>
                         <td>{industrie.industrie_description}</td> */}
                         <td>{industrie.status}</td>
                         <td> <img src={"/upload/"+industrie.industrie_image} alt='mukesh' width="100" height="100"></img> </td>                      
                         <td>
                             <button className="delete" onClick={()=>handleDelete(industrie.industrie_id)}>Delete</button>
                              &nbsp;&nbsp;
                              <button className="edit"><Link to={`/industries/${industrie.industrie_id}`}>Edit</Link></button>
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
