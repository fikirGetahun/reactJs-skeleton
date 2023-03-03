import React, { useEffect, useState } from "react";
import TextFieldComp from "../helpComponents/textField";
import Auth from "../../service/apiHandler/auth";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PutHandler from "../../service/apiHandler/putHandler";

const EditUser = ()=>{
    var server = new Auth()
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    const[status, setStatus]=useState('')

    const [editPassword, setEditPassword] = useState(false)
  
    const [isLoadidng, setIsLoading]=useState()

 

// const [toBeEdited, setToBeEdited] = useState('')
const [data, setData]= useState('')
const [dbRes, setDbRes]=useState()
const editData = async (toBeEdited)=>{
    let realData;
    if(toBeEdited == 'name'){
        realData =name
    }else if(toBeEdited == 'email'){
         realData =email
    }else if(toBeEdited == 'password'){
         realData =password
    }
    let body = {
        tobe : toBeEdited,
        data : realData,
        id: uid
    }
    setIsLoading(true)

     let db = new PutHandler()
    let x = await db.updateUserData(body).then(res=>{
        setIsLoading(false)

        setDbRes(res.data)
    })
}


const [uid, setUid] = useState()

const getToBeEditedUser = async ()=>{
    let data = new GetHandler()
    setIsLoading(true)

   let userEmail = window.sessionStorage.getItem('email')
    let user = await data.getOneUser(userEmail ).then(res=>{
        setIsLoading(false)

        if(res.statusText == 'OK'){
            setName(res.data.name)
            setEmail(res.data.email)
            setUid(res.data._id)
        }
    })
}

useEffect(()=>{
    getToBeEditedUser()
},[])

    return(
        <div className="container" >
            <h2 className="d-flex justify-content-center">Akko Coffee Menu</h2>
            <h4 className="d-flex justify-content-center" >EditUser</h4>
                        {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                        }

            {/* <TextFieldComp label="Name" onChange={formHandler} dbName="name" type="text"/>
             <TextFieldComp label="Email" onChange={formHandler} dbName="email" type="text"/>
            <TextFieldComp label="Password" onChange={formHandler} dbName="password" type="password" /> */}
            <div className="row  d-flex justify-content-center ">
                <div className="col-6">
                <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Name</label>
            <TextField className="" type="text" onChange={(e)=>setName(e.target.value)}    placeholder="Full name"    name="name"  value={name} />
            <label></label> 
            <span onClick={()=>editData('name')} className="btn btn-warning">Edit Name</span>
        </div>
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Email</label>
            <TextField className="" type="text" value={email}    id="standard-basic" placeholder="Email"   onChange={(e)=>setEmail(e.target.value)} name="name" />
            <label></label>
            <span onClick={()=>editData('email')} className="btn btn-warning">Edit Email</span>

        </div>

        <button  className="btn btn-primary d-flex justify-content-start m-3" onClick={()=>setEditPassword(!editPassword)} >Edit Password</button>

        {
            editPassword ? 
            (
                <div className="textField p-2">
                <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Password</label>
                <TextField className="" type="password" required   id="standard-basic" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)} name="name" />
                <label></label>
                <button onClick={()=>editData('password')} className="btn btn-warning">Edit Password</button><br></br>

            </div>
            ) :
            (
                <div></div>
            )
        }

        

            <label className="text text-success ">{dbRes}</label>
                </div>
            </div>

        </div>
    )
}

export default EditUser;