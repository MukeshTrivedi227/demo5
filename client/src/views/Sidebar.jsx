import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">
    <li class="nav-item">
        <Link class="nav-link " to="/">
          <i class="bi bi-grid"></i>
          <span>Home</span>
        </Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link " to="/Products">
          <i class="bi bi-grid"></i>
          <span>Products</span>
        </Link>
      </li>  
     <li class="nav-item">
        <Link class="nav-link " to="/DisplayProduct">
          <i class="bi bi-grid"></i>
          <span>DisplayProduct</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/Industries">
          <i class="bi bi-grid"></i>
          <span>Industries</span>
        </Link>
      </li>  
     <li class="nav-item">
        <Link class="nav-link " to="/DisplayIndustries">
          <i class="bi bi-grid"></i>
          <span>DisplayIndustries</span>
        </Link>
      </li> */}
      {/* <li class="nav-item">
        <Link class="nav-link " to="/DisplayService">
          <i class="bi bi-grid"></i>
          <span>DisplayService</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/Service">
          <i class="bi bi-grid"></i>
          <span>Service</span>
        </Link>
      </li> */}

      {/* <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li> */} 

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>About us</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            {/* <a href="components-alerts.html"> */}
            <Link class="nav-link " to="/Aboutus">
              <i class="bi bi-circle"></i><span>About us</span>
            {/* </a> */}
            </Link>
          </li>
          <li class="nav-item">
        <Link class="nav-link " to="/DisplayAboutsus">
          <i class="bi bi-grid"></i>
          <span>DisplayAboutsus</span>
        </Link>
      </li>
          <li>
            {/* <a href="components-accordion.html"> */}
            <Link class="nav-link " to="/Careers">
              <i class="bi bi-circle"></i><span>Career</span>
            {/* </a> */}
            </Link>
          </li>
          <li class="nav-item">
        <Link class="nav-link " to="/DisplayCareers">
          <i class="bi bi-grid"></i>
          <span>DisplayCareers</span>
        </Link>
      </li>
          <li>
            <a href="components-badges.html">
              <i class="bi bi-circle"></i><span>Social Activity</span>
            </a>
          </li>
          
        </ul>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/Service">
          <i class="bi bi-grid"></i>
          <span>Service</span>
        </Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link " to="/DisplayService">
          <i class="bi bi-grid"></i>
          <span>DisplayService</span>
        </Link>
      </li>
      


      {/* <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Services</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li> */}
            {/* <a href="forms-elements.html"> */}
            {/* <Link class="nav-link "to="/Webdevelopment">
             <i class="bi bi-circle"></i><span>Web Development</span>
             </Link> */}

            {/* </a> */}
          {/* </li> */}
          {/* <li>
          <Link class="nav-link "to="/Appdevelopment">
              <i class="bi bi-circle"></i><span>App Development</span>
            </Link>
                      </li>
          <li>
          <Link class="nav-link "to="/Digitalmarketing">
              <i class="bi bi-circle"></i><span>Digital Marketing</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Logodesign">
              <i class="bi bi-circle"></i><span>Logo Design</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Graphics">
              <i class="bi bi-circle"></i><span>Graphics</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Videoediting">
              <i class="bi bi-circle"></i><span>Video editing </span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Digitalpostdesign">
              <i class="bi bi-circle"></i><span>Digital post Design </span>
            </Link>
          </li> */}
        {/* </ul>
      </li> */}

      {/* <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          {/* <i class="bi bi-layout-text-window-reverse"></i> */}
          {/* <span>Products</span> */}
          {/* <i class="bi bi-chevron-down ms-auto"></i> */}
        {/* </a> */}
        {/* <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav"> */}
          {/* <li>
          <Link class="nav-link "to="/Ecommerceappwebsite">
              <i class="bi bi-circle"></i><span>E-Commerce App/Website</span>
            </Link>
          </li>  */}
          {/* <li>
          <Link class="nav-link "to="/Elearningappwebsite">
              <i class="bi bi-circle"></i><span>E-Learning App/Website</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Elogbookappwebsite">
              <i class="bi bi-circle"></i><span>E-Logbook App/Website</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Cabservices">
              <i class="bi bi-circle"></i><span>Cab Services </span>
            </Link>
          </li> */}
        
        {/* </ul>

      </li> */}

      {/* <li class="nav-item"> */}
        {/* <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#"> */}
          {/* <i class="bi bi-bar-chart"></i> */}
          {/* <span>Industries</span><i class="bi bi-chevron-down ms-auto"></i> */}
        {/* </a> */}
        {/* <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav"> */}
          {/* <li>
          <Link class="nav-link "to="/Business">
              <i class="bi bi-circle"></i><span>Business</span>
            </Link>
          </li> */}
          {/* <li>
          <Link class="nav-link "to="/Retail">
              <i class="bi bi-circle"></i><span>Retail</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Education">
              <i class="bi bi-circle"></i><span>Education & Learning</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Manufacturing">
              <i class="bi bi-circle"></i><span>Manufacturing</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Healthcare">
              <i class="bi bi-circle"></i><span>Health Care</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Automotive">
              <i class="bi bi-circle"></i><span>Automotive</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Realestate">
              <i class="bi bi-circle"></i><span>Real Estate</span>
            </Link>
          </li>
          <li>
          <Link class="nav-link "to="/Newsmagazine">
              <i class="bi bi-circle"></i><span>News & Magazine</span>
            </Link>
          </li> */}
        
        
        {/* </ul> */}
      {/* </li> */}

      {/* <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="icons-bootstrap.html">
              <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i class="bi bi-circle"></i><span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
              <i class="bi bi-circle"></i><span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li> */}

      {/* <li class="nav-heading">Pages</li> */}
      {/* </li> */}
      <li class="nav-item">
        <Link class="nav-link " to="/Products">
          <i class="bi bi-grid"></i>
          <span>Products</span>
        </Link>
      </li>  
     <li class="nav-item">
        <Link class="nav-link " to="/DisplayProduct">
          <i class="bi bi-grid"></i>
          <span>DisplayProduct</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/Industries">
          <i class="bi bi-grid"></i>
          <span>Industries</span>
        </Link>
      </li>  
     <li class="nav-item">
        <Link class="nav-link " to="/DisplayIndustries">
          <i class="bi bi-grid"></i>
          <span>DisplayIndustries</span>
        </Link>
      </li>

      <li class="nav-item">
      <Link class="nav-link "to="/Protfolio">
        
          {/* <i class="bi bi-person"></i> */}
          <span>Protfolio</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/DisplayProtfolio">
          <i class="bi bi-grid"></i>
          <span>DisplayProtfolio</span>
        </Link>
      </li>


      <li class="nav-item">
      <Link class="nav-link "to="/Hiredeveloper">
          {/* <i class="bi bi-question-circle"></i> */}
          <span>Hire developer</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/DisplayHiredevelopers">
          <i class="bi bi-grid"></i>
          <span>DisplayHiredevelopers</span>
        </Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link "to="/Contact">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/DisplayContact">
          <i class="bi bi-grid"></i>
          <span>DisplayContact</span>
        </Link>
      </li>

      {/* <li class="nav-item">
        <a class="nav-link collapsed" href="pages-register.html">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-login.html">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-error-404.html">
          <i class="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-blank.html">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li> */}

    </ul>

  </aside>
  )
}
