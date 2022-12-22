import React, { useState } from "react";
import '../css/styleLogin.css';
import akkoPhoto from '../../file/img/akko.food.PNG'




const LoginPage = () =>{
  const bgCss ={
    backgroundImage:  `url('${akkoPhoto}')`
  }
  
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  
  const loginHandler = ()=>{
  
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
            <h3>Login to <strong>Colorlib</strong></h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form action="#" onSubmit={loginHandler} method="post">
              <div className="form-group first">
                <label  >Username</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="your-email@gmail.com" id="username"/>
              </div>
              <div className="form-group last mb-3">
                <label  >Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Your Password" id="password"/>
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox"  />
                  <div className="control__indicator"></div>
                </label>
                <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" className="btn btn-block btn-primary"/>

            </form>
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