import React from "react";
import DragDropFile from "../helpComponents/photoUpload";
import TextFieldComp from "../helpComponents/textField";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";



 const AddFood=()=>{


    //input form handler
//
const [catName, setCatName] = useState();
const [catOrder, setCatOrder] = useState();
const [catPhoto, setCatPhoto] = useState();

const FormHandler=(value, dbName)=>{ // value and dbName are passed from the chiled to parent throgh props
    if(dbName == "foodName"){
        setCatName(value)
    }
    if(dbName == "foodOrder"){
        setCatOrder(value)
    }
    if(dbName == "foodImage"){
        setCatPhoto(value)
    }
    if(dbName == "foodCat"){
        setCatPhoto(value)
    }
}

 var listz = ["test", "test2", "test3"]

//
//input form handler
        return(
            <div>
                <div className="vstack gap-1">
                    
                    <hr/>
                    <div className="row d-flex justify-content-center">
                    <h3>Add Food In Category</h3>
                        <div className="col-6">
                            <TextFieldComp label="Food Category" onChange={FormHandler}  type="text" placeholder="Type here..." dbName="foodName"      />

                            <TextFieldComp label="Order Of Appearance" onChange={FormHandler} type="number" placeholder="Type here..."  dbName="foodOrder" />
                            
                            <SelectFieldComp label="Select Category" onChange={FormHandler} selectItems={listz}  dbName="foodCat" />

                           <DragDropFile onChange={()=>FormHandler}  dbName="foodImage" />
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default AddFood;