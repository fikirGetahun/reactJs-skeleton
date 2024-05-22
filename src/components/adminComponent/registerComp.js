import React, { useState } from "react";
 import Auth from "../../service/apiHandler/auth";
import { TextField } from "@mui/joy";

const Register = ()=>{
    var server = new Auth()
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    const[status, setStatus]=useState('')
    const[isAdmin, setIsAdmin]=useState(true)
    const [isLoadidng, setIsLoading]=useState()

    const submitHandler = async()=>{
//    alert('in')
        var body = {
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
        }
        var x;
        setIsLoading(true)

   server.registerAuth(body) 
        .then((res)=>{
            setIsLoading(false)

            if(res == 200){
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
            <TextField  type="text"    id="standard-basic" placeholder="Full name"   onChange={(e)=>setName(e.target.value)}  name="name" />
            <label></label>
        </div>
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Email</label>
            <TextField  type="text"    id="standard-basic" placeholder="Email"   onChange={(e)=>setEmail(e.target.value)} name="name" />
            <label></label>
        </div>
        
            <div className="form-control">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Select Roll</label>
            <select  className="form-control border p-1 border-dark"    onChange={(e)=>setIsAdmin(e.target.value)}   >
            <option value={true} >Is Admin</option>
            <option value={false} > Is Editor</option>
            </select>
            </div>
       
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Password</label>
            <TextField  type="password"    id="standard-basic" placeholder="Password"    onChange={(e)=>setPassword(e.target.value)} name="name" />
            <label></label>
        </div>

        

            <button onClick={submitHandler} className="btn btn-warning">Register</button><br></br>
            {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                        }
            <label className="text text-danger">{status}</label>

        </div>
    )
}

export default Register;