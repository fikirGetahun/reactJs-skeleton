import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import { isEmpty } from "lodash";

 const AddFood=()=>{


    //input form handler
//
const [foodName, setFoodName] = useState('');
const [foodOrder, setFoodOrder] = useState();
const [foodPhoto, setFoodPhoto] = useState();
const [foodCategory, setFoodCategory] = useState('');
const [foodFullPrice, setFoodFullPrice] = useState();
const [foodHalfPrice, setFoodHalfPrice] = useState('');
const [foodInfo, setFoodInfo] = useState('');
const [categoryList, setCategoryList] = useState([])

const [halfFull, setHalfFull] = useState(false);
const [resResult, setResResult] = useState()
const [response, setResponse] = useState({class: 'text', resp: ' '})

const FormHandler= async (value, dbName, buffer)=>{ // value and dbName are passed from the chiled to parent throgh props
       
 
        setFoodPhoto(buffer)
    
    
}


const categoryGetter = async ()=>{
    let catGetter = new GetHandler()
    let cat = catGetter.getCategory()
        .then(res=>{
            if(res.status == 200){
                setCategoryList(res.data)
            }else{
                alert('db not connected')
            }
        })
}

const [isLoadidng, setIsLoading]=useState()

const addFood = async () =>{
    let body = {
        food:{
            name: foodName,
            categoryId:foodCategory,
            info: foodInfo,
            order: foodOrder,
            image:foodPhoto
        },
        price:{
            price:foodFullPrice,
            halfPrice:foodHalfPrice,
            halfFull: halfFull,
            oldPrice:foodOrder,
         }
    }
    setIsLoading(true)
    let product = new PostHandler()
    console.log(body)
    if(!isEmpty(foodPhoto)){
        product.FoodAdder(body)
        .then(res=>{
            if(res.status == 200){
                setIsLoading(false)
                setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-success',
                        resp: 'Product Added Successfully!'
                    }
                ))
            }else{
                setIsLoading(false)
                // alert(res)
                setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-danger',
                        resp: res
                    }
                ))
            }
        })
    }
   

    
 
}

useEffect(()=>{
    categoryGetter()
},[])

 var listz = ["test", "test2", "test3"]

//
//input form handler
        return(
            <div>
                <div className="vstack gap">
                    
                    <hr/>
                    <div className="row d-flex justify-content-center">
                    <h3>Add Food In Category</h3>
                        <div className="col-6">
 
                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Name</label>
                            <input className="form-control" type="text"    id="standard-basic" placeholder="Food Name"   onChange={(e)=>setFoodName(e.target.value)} name="catName" />
                            <label></label>
                        </div>

                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Description</label>
                     
                            <textarea className="form-control" placeholder="Food Description" onChange={(e)=>setFoodInfo(e.target.value)}>

                            </textarea>
                            <label></label>
                        </div>


                    


                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Select Category</label>
                         <select  className="form-control"  onChange={(e)=>setFoodCategory(e.target.value)} >
                            <option >category</option>
                            {
                                categoryList.map(sel=>{
                                   return ( <option value={sel._id} >{sel.name} </option>)
                                })
                            }
                         </select>
                        </div>

                        <div className="d-flex justify-content-start vstack">
                            
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Type of price</label>
                           {/* <div className="d-flex justify-content-start m-2">
                           <span>Full price: </span> &nbsp; <input  type="checkbox" name="fullPrice" />  
                           </div> */}
                          <div className="d-flex justify-content-start m-2">
                          <span>Half price: </span> &nbsp;    <input  onChange={()=>setHalfFull(!halfFull)} type="checkbox" name="halfPrice" />
                          </div> 

                        </div>

                        <div className="row">
                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Full Price</label>
                            <input className="form-control" type="text"    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodFullPrice(e.target.value)} name="catName" />
                            <label></label>
                        </div>
                           {
                            halfFull ? 
                            
                                <div className="textField p-2">
                                <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Half Price</label>
                                    <input className="form-control" type="text"    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodHalfPrice(e.target.value)} name="catName" />
                                    <label></label>
                                </div>
                             :
                            
                                <span>No half price</span>
                            

                           }

                        </div>



                            
 
                           <DragDropFile onChange={FormHandler}  dbName="foodImage" />

                           <div>
                            <button onClick={addFood} className="btn btn-warning">Add Product</button>
                           </div>
                           {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                           }
                           <label className={response.class}>{  response.resp} </label>
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default AddFood;