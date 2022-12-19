import React from "react";
import DragDropFile from "../helpComponents/photoUpload";
import TextFieldComp from "../helpComponents/textField";
import { useState } from "react";



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

//
//input form handler
        return(
            <div>
                <div className="vstack gap-1">
                    
                    <hr/>
                    <div className="row d-flex justify-content-center">
                    <h3>Add Menu Category</h3>
                        <div className="col-6">
                            <TextFieldComp label="Food Category" onChange={FormHandler}  type="text" placeholder="Type here..." dbName="catName"      />

                            <TextFieldComp label="Order Of Appearance" onChange={FormHandler} type="number" placeholder="Type here..."  dbName="catOrder" />
                            
                           <DragDropFile onChange={()=>FormHandler}  dbName="catImage" />
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default AddCategory;