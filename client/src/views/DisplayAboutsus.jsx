import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../node_modules/datatables.net-buttons/js/dataTables.buttons.js";
import "../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../node_modules/datatables.net-buttons/js/buttons.flash.js";
import "../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../node_modules/datatables.net-buttons/js/buttons.print.js";
import $ from 'jquery';

export default function DisplayAboutsus() {
  const [aboutsus, setAboutsus] = useState([]);
  let i = 1;

  useEffect(() => {
    fatchUsers();
  }, []);

  const fatchUsers = async () => {
    try {
      const res = await axios.get("/aboutsus");
      setAboutsus(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    let text = "Are you sure?";

    if (window.confirm(text) === true) {
      try {
        const res = await axios.delete("/aboutsus/" + e);
        alert(res.data);
        window.location.reload();
      } catch (err) {
        console.log(err);
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
    // <div class='row'>
    //   <div class='col-lg-3'></div>
    //   <div class='col-lg-6'>
    //     <div class='card'>
    //       <div class='card-body'>
    //         <h1>
    //           <u>Display Users</u>
    //         </h1>

    //         <table class='table table-striped'>
    //           <thead>
    //             <tr>
    //               <th scope='col'>#</th>
    //               <th scope='col'>about_image</th>
    //               <th scope='col'>description</th>

    //               <th></th>
    //               <th></th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {aboutsus.map((aboutsus) => (
    //               <tr>
    //                 <th scope='row'>{i++}</th>
    //                 <td>{aboutsus.about_image}</td>
    //                 <td>{aboutsus.description}</td>
    //                 <td>
    //                   <button
    //                     className='delete'
    //                     onClick={() => handleDelete(aboutsus.about_id)}>
    //                     Delete
    //                   </button>
    //                 </td>
    //                 {/* <td>
    //                         <button className="edit"><Link to={`/UpdateStudents/${aboutsus.about_id}`}>Edit</Link></button>
    //                     </td> */}
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<main id="main" class="main">
    <div class='row'>
  <div class='col-lg-12'>
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>Datatables</h5>
        <div class='dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns'>
          {/* <div class='dataTable-top'> */}
            {/* <div class='dataTable-dropdown'>
              <label>
                <select class='dataTable-selector'>
                  <option value='5'>5</option>
                  <option value='10' selected=''>
                    10
                  </option>
                  <option value='15'>15</option>
                  <option value='20'>20</option>
                  <option value='25'>25</option>
                </select>
                entries per page
              </label>
            </div> */}
            {/* <div class='dataTable-search'>
              <input
                class='dataTable-input'
                placeholder='Search...'
                type='text'
              />
            </div> */}
          {/* </div> */}
          <div class='dataTable-container'>
            {/* <table class='table datatable dataTable-table'> */}
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
                    About image
                    </a>
                  </th>
                  <th
                    scope='col'
                    data-sortable=''
                    style={{width : "37.7239%;"}}
                    class='desc'>
                    <a href='#' class='dataTable-sorter'>
                    Description
                    </a>
                  </th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
              {aboutsus.map((aboutsus) => (
                  <tr>
                    <th scope='row'>{i++}</th>
                    <td>{aboutsus.about_image}</td>
                    <td>{aboutsus.description}</td>
                    <td>
                      <button
                        className='delete'
                        onClick={() => handleDelete(aboutsus.about_id)}>
                        Delete
                      </button>
                    </td>
                    </tr>
                ))}
                
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
  );
}


