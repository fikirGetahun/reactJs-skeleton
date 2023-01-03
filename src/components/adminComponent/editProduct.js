import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import { useParams } from "react-router-dom";

 const EditProduct=()=>{
    const {id} = useParams()

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

const FormHandler=(value, dbName, buffer)=>{ // value and dbName are passed from the chiled to parent throgh props
 
 
        setFoodPhoto(buffer)
    
    
}


const categoryGetter = async ()=>{
    let catGetter = new GetHandler()
    let cat = catGetter.getCategory()
        .then(res=>{
            if(res.statusText == 'OK'){
                setCategoryList(res.data)
            }else{
                alert('db not connected')
            }
        })
}

const submitHandler = async () =>{
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

    let product = new PostHandler()
    console.log(body)
    product.FoodAdder(body)
        .then(res=>{
            if(res.statusText == 'OK'){
                setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-success',
                        resp: 'Product Added Successfully!'
                    }
                ))
            }else{
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

const oldDataGetter = async (id)=>{
    let data = new GetHandler()
    let test;
    let res = await data.getOneProduct(id)
    .then(res=>{
        if(res.statusText == 'OK'){
            test =res.data
            setFoodName(res.data.name)
            setFoodOrder(res.data.order)
            setFoodPhoto(res.data.image)
            setFoodInfo(res.data.info)
            
        }else{
            alert('product is unkown')
        }
    })
    await getCategoryName(test.categoryId)

}

const [categoryName, setCategoryNme] = useState([])
const getCategoryName = async (id)=>{
    let data = new GetHandler()
    let catName = await data.getOneCategory(id).then(res=>{
        if(res.statusText == 'OK'){
            setCategoryNme(res.data.name)
        }else{
            alert('no category')
        }
    })
}

useEffect(()=>{
      oldDataGetter(id)
    categoryGetter()
  
},[])

 
//
//input form handler
        return(
            <div>
                <div className="vstack gap">
                    
                    <hr/>
                    <div className="row d-flex justify-content-center">
                    <h3>Add Food In Category</h3>
                        <div className="col-6">
                        {console.log(foodName)}
                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Name</label>
                            <input className="form-control" type="text" value={foodName}   id="standard-basic" placeholder="Food Name"   onChange={(e)=>setFoodName(e.target.value)} name="catName" />
                            <label></label>
                        </div>

                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Food Description</label>
                     
                            <textarea className="form-control" value={foodInfo} placeholder="Food Description" onChange={(e)=>setFoodInfo(e.target.value)}>

                            </textarea>
                            <label></label>
                        </div>


                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Order Of Appearance</label>
                            <input className="form-control" type="text" value={foodOrder}   id="standard-basic" placeholder="Order of List"   onChange={(e)=>setFoodOrder(e.target.value)} name="catName" />
                            <label></label>
                        </div>


                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Select Category</label>
                         <select  className="form-control"  onChange={(e)=>setFoodCategory(e.target.value)} >
                            <option >{categoryName}</option>
                            {
                                categoryList.map(sel=>{
                                   return ( <option value={sel._id} >{sel.name} </option>)
                                })
                            }
                         </select>
                        </div>

       

                        <div className="row">
                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Full Price</label>
                            <input className="form-control" type="text"    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodFullPrice(e.target.value)} name="catName" />
                            <label></label>
                        </div>
                         
                            
                                <div className="textField p-2">
                                <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Half Price</label>
                                    <input className="form-control" type="text"    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodHalfPrice(e.target.value)} name="catName" />
                                    <label></label>
                                </div>
                             
                         
                            

                          

                        </div>



                            
 
                           <DragDropFile onChange={FormHandler}  dbName="foodImage" />

                           <div>
                            <button onClick={submitHandler} className="btn btn-warning">Add Product</button>
                           </div>
                           <label className={response.class}>{  response.resp} </label>
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default EditProduct;