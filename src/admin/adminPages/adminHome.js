import { Box } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useParams, useNavigate} from "react-router-dom";
import GetHandler from "../../service/apiHandler/getHandler";


 
// import '../css/bootstrap.min2.css';
import '../css/adminHome.css';
 

const AdminHome = ()=> {

//  style css functions 
//
//
const [mobileToggler, setMobileToggler] = useState({sideBarToggler: "sidebar", rightPanel: "rightPanel"})
 
const toggler =(id)=>{
    let selected = document.getElementById(id);
 
    selected.classList.toggle('show');
}
let navigate =   useNavigate()
const logoutHandler = ()=>{
    window.localStorage.removeItem('token')
    navigate('/login')
}

const drowdownHandler = (id)=>{
    let selected = document.getElementById(id);
    Array.from(document.querySelectorAll('.show' )).forEach(function(el) { 
       
        if(el.id != id){
            el.classList.remove('show');
        }
        
    });
  

    selected.classList.toggle('show');
    // toggler(id)
  }

    const sideBarToggler =()=>{
        // sidebarMobileToggle
        if(mobileToggler.sideBarToggler == "sidebar"){
            setMobileToggler( old =>({
             ...old, sideBarToggler:"sidebarMobileToggle sidebar", rightPanel: "rightPanelMobile"
            } ))
            // alert(mobileToggler)
            var x = document.getElementById('x');
            x.style.color = "red";
         
        }else{
            setMobileToggler( old=>({
              ...old,    sideBarToggler:"sidebar", rightPanel: "rightPanel"
            } ))
            var x = document.getElementById('x');
            x.style.color = "black";
        }
    }
//
//
//
//  style css functions 


const [logedUser, setLogedUser] = useState([])
const getLogedUser = async ()=>{
    let data = new GetHandler()
    let email = window.localStorage.getItem('email')
    let x = await data.getOneUser(email).then(res=>{
        if(res.status == 200){
            setLogedUser(res.data)
        }else{
            alert('no user name')
        }
    })
}
useEffect(()=>{
getLogedUser()
 },[])



    return(
        <html>
 
<head>
     
    <title>Akkko Coffee-Menu Dashboard</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="" name="keywords"/>
    <meta content="" name="description"/>
 
    <link href="img/favicon.ico" rel="icon"/>

 

    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"/> 
    
     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

     
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    
    <link href="css/bootstrap.min.css" rel="stylesheet"/>

 
    <link href="css/style.css" rel="stylesheet"/>
</head>

<body>
    <div  className="container-fluid bgColor position-relative d-flex p-0">
        
        {/* <div id=" " className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="  text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
        <div className="">
        <div className= {mobileToggler.sideBarToggler +"    pe-4 pb-3 "}>
        {/* <div className=  "sidebar  pe-4 pb-3 " style={mobileToggler}> */}

            <nav className="navbar   navbar-dark">
                <div className="hstack">
                <a href="index.html" className="navbar-brand mx-4 ">
                    <h3 className="text textColor"><i className="fa fa-user-edit me-2"></i>Akko Menu</h3>
                </a>
                <a href="#" onClick={sideBarToggler} className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div className="d-flex align-items-center ms-4 mb-3">
                    <div className="position-relative">
                        {/* <img className="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>

                    <div className="ms-3">
                        <h6 className="mb-0">{logedUser.name}</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
    
                    <NavLink    to="dashboard" className={({ isActive }) => (isActive ? 'active' : '')+" nav-item nav-link d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                    <i className="fa fa-tachometer-alt me-2"></i>Dashboard
                    </NavLink>
                
                    <NavLink    to="addCategory" className={({ isActive }) => (isActive ? 'active' : '')+" nav-item nav-link d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                    <i className="fa fa-tachometer-alt me-2"></i>Add Category
                    </NavLink>
                    <NavLink    to="addFood" className={({ isActive }) => (isActive ? 'active' : '')+" nav-item nav-link d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                    <i className="fa fa-tachometer-alt me-2"></i>Add Food
                    </NavLink>

                    <NavLink    to="listCategory" className={({ isActive }) => (isActive ? 'active' : '')+" nav-item nav-link d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                    <i className="fa fa-tachometer-alt me-2"></i>List Category
                    </NavLink>

                    <NavLink    to="listProducts" className={({ isActive }) => (isActive ? 'active' : '')+" nav-item nav-link d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                    <i className="fa fa-tachometer-alt me-2"></i>List Products
                    </NavLink>
                    {
                        window.localStorage.getItem('isAdmin')  ? (
                            <div  onClick={()=>drowdownHandler("test2")} className="nav-item   ">
                            <a href="#" className="nav-link d-flex justify-content-start align-items-center dropdown dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>User Managment</a>
                            <div id="test2"  className="dropdown-menu  bg-transparent border-0">
                            <NavLink    to="/login/reg" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                                <a  className="dropdown-item">Add User</a>
                                </NavLink>
                                <NavLink    to="listUsers" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                                <a   className="dropdown-item">List User</a>
                                </NavLink>
                                <NavLink    to="editUser" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                                <a href="typography.html" className="dropdown-item">Edit Profile</a>
                                </NavLink>
                                {/* <a href="element.html" className="dropdown-item">Other Elements</a> */}
                            </div>
                        </div>
                        ):
                        <div></div>
                    }
                    <div  onClick={()=>drowdownHandler("test3")} className="nav-item   ">
                        <a href="#" className="nav-link d-flex justify-content-start align-items-center dropdown dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Order Managment</a>
                        <div id="test3"  className="dropdown-menu  bg-transparent border-0">
                        <NavLink    to="order/category" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                            <a   className="dropdown-item">Category Order Modifay</a>
                            </NavLink>
                            <NavLink    to="order/product" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                            <a   className="dropdown-item">Product Order Modify</a>
                            </NavLink>
                
                            {/* <a href="element.html" className="dropdown-item">Other Elements</a> */}
                        </div>
                    </div>
                    <div  onClick={()=>drowdownHandler("test3q")} className="nav-item   ">
                        <a href="#" className="nav-link d-flex justify-content-start align-items-center dropdown dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>FeedBack & Review </a>
                        <div id="test3q"  className="dropdown-menu  bg-transparent border-0">
                        <NavLink    to="addFeedbackQuestion" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                            <a   className="dropdown-item">Add Feedback Questions</a>
                            </NavLink>
                            <NavLink    to="listFeedBackQuestion" className={({ isActive }) => (isActive ? 'active' : '')+" dropdown-item d-flex justify-content-start align-items-center "} style={{ textDecoration: "none" }} >
                            <a   className="dropdown-item">List Feedback Questions</a>
                            </NavLink>
                
                            {/* <a href="element.html" className="dropdown-item">Other Elements</a> */}
                        </div>
                    </div>
                    
            
                    {/* <a href="table.html" className="nav-item nav-link d-flex justify-content-start align-items-center"><i className="fa fa-table me-2"></i>Edit Food</a>
                    <a href="index.html" className="nav-item nav-link  d-flex justify-content-start align-items-center dropdown  " data-bs-toggle="dropdown"><i className="fa fa-tachometer-alt me-2"></i>Edit Category</a>
                    <div  onClick={()=>drowdownHandler("test")} className="nav-item   ">
                        <a href="#" className="nav-link d-flex justify-content-start align-items-center dropdown dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Edit Category</a>
                        <div id="test"  className="dropdown-menu  bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <div  onClick={()=>drowdownHandler("test2")} className="nav-item   ">
                        <a href="#" className="nav-link d-flex justify-content-start align-items-center dropdown dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Edit Category2</a>
                        <div id="test2"  className="dropdown-menu  bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div> */}
                    
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" className="dropdown-item">Sign In</a>
                            <a href="signup.html" className="dropdown-item">Sign Up</a>
                            <a href="404.html" className="dropdown-item">404 Error</a>
                            <a href="blank.html" className="dropdown-item">Blank Page</a>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
       


        
        <div className="content ">
          <div className={mobileToggler.rightPanel}>
          {/* <h2 id="x" >TEST</h2> */}

            <nav className="navbar navbar-expand  navbar-dark sticky-top  px-4 py-0" style={{borderRadius:20, backgroundColor: "white"}} >
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" onClick={sideBarToggler} className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control bgColor border-0" type="search" placeholder="Search"/>
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </a>
                 
                    </div> */}
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
 
                    </div> */}
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link  hstack gap-2 " data-bs-toggle="dropdown">
                            {/* <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                          <span>Loged User :</span>  <span className="d-none d-lg-inline-flex">{logedUser.name}</span>
                          <button onClick={()=>logoutHandler()} className="btn btn-warning">Log Out</button>

                        </a>
                        {/* <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Log Out</a>
                        </div> */}
                    </div>
                </div>
            </nav>
           
            <div style={{height:"85vh", overflow:"scroll", overflowX:"hidden" }} >
                    <Outlet />
            {/* <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                         
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                             Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
       

            </div>
        </div>
        


    
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    </div>
 

    
    <script src="js/main.js"></script>
</body>

 

        </html>
        
    )
}

export default AdminHome;