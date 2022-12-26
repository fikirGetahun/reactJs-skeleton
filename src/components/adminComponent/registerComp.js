import React, { useState } from "react";
import TextFieldComp from "../helpComponents/textField";
import Auth from "../../service/apiHandler/auth";
import { TextField } from "@mui/joy";

const Register = ()=>{
    var server = new Auth()
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    const[status, setStatus]=useState('')
  

    const submitHandler = async()=>{
//    alert('in')
        var body = {
            name: name,
            email: email,
            password: password,
        }
        var x;
   server.registerAuth(body) 
        .then((res)=>{
            if(res == 'OK'){
                setStatus('Registerd Successfully')
            }else{
                setStatus(res)
            }

        })
    }




    return(
        <div>
            <h2 className="d-flex justify-content-center">Akko Coffee Menu</h2>
            <h4 className="d-flex justify-content-center" >Register</h4>

            {/* <TextFieldComp label="Name" onChange={formHandler} dbName="name" type="text"/>
             <TextFieldComp label="Email" onChange={formHandler} dbName="email" type="text"/>
            <TextFieldComp label="Password" onChange={formHandler} dbName="password" type="password" /> */}
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Name</label>
            <TextField className="" type="text"    id="standard-basic" placeholder="Full name"   onChange={(e)=>setName(e.target.value)}  name="name" />
            <label></label>
        </div>
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Email</label>
            <TextField className="" type="text"    id="standard-basic" placeholder="Email"   onChange={(e)=>setEmail(e.target.value)} name="name" />
            <label></label>
        </div>
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Password</label>
            <TextField className="" type="password"    id="standard-basic" placeholder="Password"    onChange={(e)=>setPassword(e.target.value)} name="name" />
            <label></label>
        </div>

        

            <button onClick={submitHandler} className="btn btn-warning">Register</button><br></br>
            <label className="text text-danger">{status}</label>

        </div>
    )
}

export default Register;