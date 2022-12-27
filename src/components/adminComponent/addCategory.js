import React from "react";
import DragDropFile from "../helpComponents/photoUpload";
import TextFieldComp from "../helpComponents/textField";
 import { useState } from "react";
import PostHandler from "../../service/apiHandler/postHandler";
import { TextField } from "@mui/joy";


 const AddCategory =()=>{


    //input form handler
//
const [catName, setCatName] = useState();
const [catOrder, setCatOrder] = useState();
const [catPhoto, setCatPhoto] = useState();

const FormHandler=(value, dbName)=>{ // value and dbName are passed from the chiled to parent throgh props
    if(dbName == "catName"){
        setCatName(value)
    }
    if(dbName == "catOrder"){
        setCatOrder(value)
    }
    if(dbName == "catImage"){
        setCatPhoto(value)
    }
}

const submitHandler = ()=>{
    const sender = new PostHandler()
    var body = {
        name:catName,
        image:'test image',
        order: 2
    }
    sender.CategoryAdder(body)
    .then(res=>{
        console.log(res)
    })
}


//
//input form handler
        return(
            <div>
                <div className="vstack gap-1">
                    
                    <hr/>
                    <div className="row d-flex justify-content-center">
                    <h3>Add Menu Category</h3>
                        <div className="col-6">
 

                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Category</label>
                            <TextField className="" type="text"    id="standard-basic" placeholder="Category"   onChange={(e)=>setCatName(e.target.value)} name="catName" />
                            <label></label>
                        </div>

                       

                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Category</label>
                            <TextField className="" type="text"    id="standard-basic" placeholder="Order of the Display"   onChange={(e)=>setCatOrder(e.target.value)} name="catOrder" />
                            <label></label>
                        </div>
                            
                           <DragDropFile onChange={()=>FormHandler}  dbName="catImage" />
                           <button onClick={submitHandler} className="btn btn-warning">Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default AddCategory;