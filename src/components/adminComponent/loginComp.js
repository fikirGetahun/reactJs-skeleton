import React from "react";
import Auth from "../../service/apiHandler/auth";
import { useState } from "react";


const LoginComp = () =>{

  
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const loginHandler = (e)=>{
    e.preventdefault();
  var auth = new Auth()
  var body = {
    email: userName,
    password: password
  }
  auth.LoginAuth(body).then(res=>{
    if(res.data){
      alert('successfull!!')
    }else{
      alert('it dont work')
    }
  })

}
    return(
        <div>
                        <h3>Login to <strong>Colorlib</strong></h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form action="#" onSubmit={(e)=>loginHandler(e)} method="post">
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

              <input type="submit"  onClick={()=>loginHandler} value="Log In" className="btn btn-block btn-primary"/>
             </form>
        </div>
    )
}

export default LoginComp