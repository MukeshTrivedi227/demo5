import React,{useState,useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet
} from "react-router-dom";

import Header from './views/Header.jsx';
import Sidebar from './views/Sidebar.jsx';
import Footer  from './views/Footer.jsx';
import Login from './views/Login.jsx';
import Aboutus from './views/Aboutus.jsx';
import Careers from './views/Careers.jsx';
import Webdevelopment from './views/Webdevlopment.jsx';
import Appdevelopment from "./views/Appdevelopment.jsx";
import Digitalmarketing from "./views/Digitalmarketing.jsx";
import Digitalpostdesign from './views/Digitalpostdesign.jsx';
import Graphics from './views/Graphics.jsx';
import Logodesign from './views/Logodesign.jsx';
import Videoediting from './views/Videoediting.jsx';
import Ecommerceappwebsite from "./views/Ecommerceappwebsite.jsx";
import Elearningappwebsite from './views/Elearningappwebsite.jsx';
import Elogbookappwebsite from './views/Elogbookappwebsite.jsx';
import Cabservices from './views/Cabservices.jsx';
import Business from './views/Business.jsx';
import Retail from './views/Retail.jsx';
import Education from './views/Education.jsx';
import Manufacturing from './views/Manufacturing.jsx';
import Healthcare from './views/Healthcare.jsx';
import Automotive from './views/Automotive.jsx';
import Realestate from './views/Realestate.jsx';
import Newsmagazine from './views/Newsmagazine.jsx';
import Protfolio from './views/Protfolio.jsx';
import Hiredeveloper from "./views/Hiredeveloper.jsx";
import Contact from "./views/Contact.jsx";
import DisplayAboutsus from "./views/DisplayAboutsus.jsx";
import DisplayCareers from "./views/DisplayCareers.jsx";
import Service from "./views/Service.jsx";
import DisplayService from "./views/DisplayService.jsx";
import Products from "./views/Products.jsx";
import DisplayProduct from "./views/DisplayProduct.jsx";
import Industries from "./views/Industries.jsx";
import DisplayIndustries from "./views/DisplayIndustries.jsx";
import DisplayHiredevelopers from "./views/DisplayHiredevelopers.jsx";
import DisplayProtfolio from "./views/DisplayProtfolio.jsx";
import DisplayContact from "./views/DisplayContact.jsx";
// import AddStudents from './views/AddStudents.jsx';
// import DisplayStudents from './views/DisplayStudents.jsx';
// import UpdateStudents from './views/UpdateStudents.jsx';
// import AddTeachers from './views/AddTeachers.jsx';
// import DisplayTeachers from "./views/DisplayTeachers.jsx";
// import UpdateTeachers from "./views/UpdateTeachers.jsx";
// import AddProducts from './views/AddProducts.jsx';
// import DisplayProducts  from "./views/DisplayProducts.jsx";
// import UpdateProducts from "./views/UpdateProducts.jsx";
// import AddBabynames from './views/AddBabynames.jsx';
// import DisplayBabynames  from "./views/DisplayBabynames.jsx";
// import UpdateBabynames from "./views/UpdateBabynames.jsx";
// import AddPlayers from "./views/AddPlayers.jsx";
// import DisplayPlayers from "./views/DisplayPlayers.jsx";
// import UpdatePlayers from "./views/UpdatePlayers.jsx";


// import Dashboard from './Views/Dashboard';
// import Test1 from './Views/Test1';
// import AddTeacher from './Views/AddTeacher.jsx';
// import UpdateTeacher from './Views/UpdateTeacher.jsx';
// import DisplayTeachers from './Views/DisplayTeachers.jsx';
// import TeacherDocuments from './Views/TeacherDocuments';
// import UserContext from './Views/UserContext.js'
// import Test2 from "./Views/Test2.jsx";
// import AddForm from "./Views/AddForm.jsx";
const Layout = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet/>
      
    </>
  );
};


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       // {
//       //   path: "/",
//       //   element: <Dashboard/>,
//       // },
//       // {
//       //   path: "/Test1",
//       //   element: <Test1/>,
//       // },
//       {
//         path: "/Aboutus",
//         element: <Aboutus/>,
//       },
//       {
//         path: "/DisplayAboutsus",
//         element: <DisplayAboutsus/>,
//       },
//       // {
//       //   path: "/UpdateStudents/:id",
//       //   element: <UpdateStudents/>,
//       // },
//       {
//         path: "/Careers",
//         element: <Careers/>,
//       },
//       {
//         path: "/DisplayCareers",
//         element: <DisplayCareers/>,
//       },





//       // {
//       //   path: "/UpdateTeacher/:id",
//       //   element: <UpdateTeachers/>,
//       // },
//       {
//         path: "/Service",
//         element: <Service/>,
//       },
//       {
//         path: "/Service/:id",
//         element: <Service/>,
//       },
//       {
//         path: "/DisplayService",
//         element: <DisplayService/>,
//       },
//       {
//         path: "/Products",
//         element: <Products/>,

//       },
//       {
//         path: "/Product/:id",
//         element: <Products/>,
//       },
//       {
//         path: "/DisplayProduct",
//         element: <DisplayProduct/>,
//       },
//       {
//         path: "/Industries",
//         element: <Industries/>,
//       },
//       {
//         path: "/Industries/:id",
//         element: <Industries/>,
//       },
//       {
//         path: "/DisplayIndustries",
//         element: <DisplayIndustries/>,
//       },
//       {
//         path: "/Webdevelopment",
//         element: <Webdevelopment/>,
//       },
//       {
//         path: "/Appdevelopment",
//         element: <Appdevelopment/>,
//       },
//       {
//         path: "/Logodesign",
//         element: <Logodesign/>,
//       },
//       {
//         path: "/Graphics",
//         element: <Graphics/>,
//       },
//       {
//         path: "/Videoediting",
//         element: <Videoediting/>,
//       },
//       {
//         path: "/Digitalpostdesign",
//         element: <Digitalpostdesign/>,
//       },
//       {
//         path: "/Digitalmarketing",
//         element: <Digitalmarketing/>,
//       },
//       {
//         path: "/Ecommerceappwebsite",
//         element: <Ecommerceappwebsite/>,
//       },
//       {
//         path: "/Elearningappwebsite",
//         element: <Elearningappwebsite/>,
//       },
//       {
//         path: "/Elogbookappwebsite",
//         element: <Elogbookappwebsite/>,
//       },
//       {
//         path: "/Cabservices",
//         element: <Cabservices/>,
//       },
//       {
//         path: "/Business",
//         element: <Business/>,
//       },
//       {
//         path: "/Retail",
//         element: <Retail/>,
//       },
//       {
//         path: "/Education",
//         element: <Education/>,
//       },
//       {
//         path: "/Manufacturing",
//         element: <Manufacturing/>,
//       },
//       {
//         path: "/Healthcare",
//         element: <Healthcare/>,
//       },
//       {
//         path: "/Automotive",
//         element: <Automotive/>,
//       },
//       {
//         path: "/Realestate",
//         element: <Realestate/>,
//       },
//       {
//         path: "/Newsmagazine",
//         element: <Newsmagazine/>,
//       },
//       {
//         path: "/Protfolio",
//         element: <Protfolio/>,
//       },
//       {
//         path: "/Protfolio/:id",
//         element: <Protfolio/>,
//       },
//       {
//         path: "/DisplayProtfolio",
//         element: <DisplayProtfolio/>,
//       },

      
//       {
//         path: "/Hiredeveloper",
//         element: <Hiredeveloper/>,
//       },
//       {
//         path: "/Hiredeveloper/:id",
//         element: <Hiredeveloper/>,
//       },
//       {
//         path: "/DisplayHiredevelopers",
//         element: <DisplayHiredevelopers/>,
//       },


//       {
//         path: "/Contact",
//         element: <Contact/>,
//       },
//       {
//         path: "/Contact/:id",
//         element: <Contact/>,
//       },
//       {
//         path: "/DisplayContact",
//         element: <DisplayContact/>,
//       },
//       // {
//       //   path: "/DisplayProducts",
//       //   element: <DisplayProducts/>,
//       // },
//       // {
//       //   path: "/UpdateProducts/:id",
//       //   element: <UpdateProducts/>,
//       // },
//       // {
//       //   path: "/AddBabyname",
//       //   element: <AddBabynames/>,
//       // },
//       // {
//       //   path: "/DisplayBabynames",
//       //   element: <DisplayBabynames/>,
//       // },
//       // {
//       //   path: "/UpdateBabynames/:id",
//       //   element: <UpdateBabynames/>,
//       // },
//       // {
//       //   path: "/Addplayer",
//       //   element: <AddPlayers/>,
//       // },
//       // {
//       //   path: "/DisplayPlayers",
//       //   element: <DisplayPlayers/>,
//       // },
//       // {
//       //   path: "/UpdatePlayers/:id",
//       //   element: <UpdatePlayers/>,
//       // },






//       // {
//       //   path: "/TeacherDocuments/:id",
//       //   element: <TeacherDocuments/>,
//       // },
//       // {
//       //   path: "/Test2",
//       //   element: <Test2/>,
//       // },
//       // {
//       //   path: "/AddForm",
//       //   element: <AddForm/>,
//       // },
//     ]
//   }
// ]);

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  // useEffect(()=>{
  //   setAuth(sessionStorage.getItem("user"))
  // },[auth])
  return (
    <>
     <BrowserRouter>
        {auth ? (
            <>
            <Layout/>
                  <Routes>
                
                    <Route path='/' element={<Hiredeveloper/>} />
                    <Route path='/DisplayHiredevelopers' element={<DisplayHiredevelopers/>}/>
                    <Route path='/Service' element={<Service />} />
                    
                    {/* <Route path='/AddStudent'
                      element={
                        <ProtectedRoute auth={auth}>
                          <AddStudents />
                        </ProtectedRoute>
                      }
                    /> */}
                    
                  <Route path="/Product" exact element={<Products/>} />
                  <Route path='/Contact' element={<Contact/>} />
                  {/* <Route path='/UpdateStudents/:id' element={<UpdateStudents />} /> */}
                  
                  </Routes>
                  <Footer></Footer>
            </>
            
        ):(
            <>
            
                <Routes>
                      <Route path='/' element={<Login />}/>
                      {/* <Route path="/DisplayStudents" exact element={<DisplayStudents />} /> */}
                </Routes>
            </>)}
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}
export default App;