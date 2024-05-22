import React from "react";
import Auth from "../../service/apiHandler/auth";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";


const LoginComp = () =>{
  const [isLoadidng, setIsLoading]=useState()

  const navigate = useNavigate();
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [response, setResponse] = useState('');

  const loginHandler = ()=>{
   var auth = new Auth()
  var body = {
    email: userName,
    password: password
  }
  setIsLoading(true)

  auth.Login(body).then(res=>{
    setIsLoading(false)

    setResponse(res)
    if(res === true){
      // alert(window.sessionStorage.getItem('isAdmin'))
      navigate('/admin')
    
    }
  })

}
    return(
        <div>
                        <h3>Login to <strong>Colorlib</strong></h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
           
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

              <input    onClick={loginHandler} value="Log In" className="btn btn-block btn-primary"/>
              {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                        }
              <label className="text text-danger">{response}</label>
        </div>
    )
}

export default LoginComp