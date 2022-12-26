import React, { useState } from "react";
import '../css/styleLogin.css';
import { Outlet } from "react-router-dom";
// import e from "express";
import akkoPhoto from '../../file/img/akko.food.PNG'



const LoginPage = () =>{

  
  const bgCss ={
    backgroundImage:  `url('${akkoPhoto}')`
  }
  

return(
  <html>
  <head>

    <title>Login #2</title>
  </head>
  <body>
  

  <div className="d-lg-flex  half">
    <div className="bg order-1 order-md-2" style={bgCss} ></div>
    <div className="contents order-2 order-md-1">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            { <Outlet/> }
          </div>
        </div>
      </div>
    </div>

    
  </div>
    
    
 
  </body>
 
  </html>
)
}

export default LoginPage;