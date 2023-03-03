import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import { useParams } from "react-router-dom";
import PutHandler from "../../service/apiHandler/putHandler";

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
const [foodId, setFoodId] = useState()
const [priceId, setPriceId] = useState()


const [photoEdited, setPhotoEdited] = useState(false)

const [halfFull, setHalfFull] = useState(false);
const [resResult, setResResult] = useState()
const [response, setResponse] = useState({class: 'text', resp: ' '})

const FormHandler=(value, dbName, buffer)=>{ // value and dbName are passed from the chiled to parent throgh props
 
 
        setFoodPhoto(buffer)
    
    
}

const [isLoadidng, setIsLoading]=useState()

const categoryGetter = async ()=>{
    let catGetter = new GetHandler()
    setIsLoading(true)

    let cat = catGetter.getCategory()
        .then(res=>{
            setIsLoading(false)

            if(res.status == 200){
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
            image:foodPhoto,
         },
        price:{
            price:foodFullPrice,
            halfPrice:foodHalfPrice,
            halfFull: halfFull,
            oldPrice:foodOrder,
          }
    }
    setIsLoading(true)

    let product = new PutHandler()
    console.log(body)
   await product.updateProduct(body, foodId, priceId)
        .then(res=>{
            setIsLoading(false)

            if(res.status == 200){
                setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-success',
                        resp: 'Product Updated Successfully!'
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
    setIsLoading(true)

    let res = await data.getOneProduct(id)
    .then(res=>{
        setIsLoading(false)

        if(res.status == 200){
            test =res.data
            setFoodName(res.data.name)
            setFoodOrder(res.data.order)
            setFoodPhoto(res.data.image)
            setFoodInfo(res.data.info)
            setFoodId(res.data._id)
        }else{
            alert('product is unkown')
        }
    })
    await getCategoryName(test.categoryId)
    await getPrice(test._id)

}

const [categoryName, setCategoryNme] = useState([])
const getCategoryName = async (id)=>{
    let data = new GetHandler()
    setIsLoading(true)

    let catName = await data.getOneCategory(id).then(res=>{
        setIsLoading(false)

        if(res.status == 200){
            setCategoryNme(res.data)
            setFoodCategory(res.data._id)
           
        }else{
            alert('no category')
        }
    })
}

const getPrice = async (foodId)=>{
    let data = new GetHandler()
    let catName = await data.getProductPrice(foodId) .then(res=>{
        if(res.status == 200){
            setFoodFullPrice(res.data.price)
            setFoodHalfPrice(res.data.halfPrice)
            setPriceId(res.data._id)
            setHalfFull(res.data.halfFull)
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
                    <h3>Edit Product</h3>
                        <div className="col-6">
                        {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                           }
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


                        {/* <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Order Of Appearance</label>
                            <input className="form-control" type="text" value={foodOrder}   id="standard-basic" placeholder="Order of List"   onChange={(e)=>setFoodOrder(e.target.value)} name="catName" />
                            <label></label>
                        </div> */}


                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Select Category</label>
                         <select  className="form-control"  onChange={(e)=>setFoodCategory(e.target.value)} >
                            <option value={categoryName._id} >{categoryName.name}</option>
                            {
                                categoryList.map(sel=>{
                                   return ( <option value={sel._id} >{sel.name} </option>)
                                })
                            }
                         </select>
                        </div>

                        <div className="d-flex justify-content-start m-2">
                          <span>Half price: </span> &nbsp;  
                          {
                            halfFull ?   <input checked    onChange={()=>setHalfFull(!halfFull)} type="checkbox" name="halfPrice" />
                            : 
                            <input     onChange={()=>setHalfFull(!halfFull)} type="checkbox" name="halfPrice" />
                          }
                           </div> 

                        <div className="row">
                        <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Full Price</label>
                            <input className="form-control" type="text" value={foodFullPrice}   id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodFullPrice(e.target.value)} name="catName" />
                            <label></label>
                        </div>
                         

                         {
                            halfFull ? (
                                <div className="textField p-2">
                                <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Half Price</label>
                                    <input className="form-control" type="text" value={foodHalfPrice}    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodHalfPrice(e.target.value)} name="catName" />
                                    <label></label>
                                </div>
                            ) : (
                                // <div className="textField p-2">
                                // <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Half Price</label>
                                //     <input className="form-control" type="text" value={false}    id="standard-basic" placeholder="00.00 Br"   onChange={(e)=>setFoodHalfPrice(e.target.value)} name="catName" />
                                //     <label></label>
                                // </div>
                                <div></div>
                                 
                            )
                         }
                            

                             
                         
                            

                          

                        </div>



                            
 
                           {/* <DragDropFile onChange={FormHandler}  dbName="foodImage" /> */}
                           {
                            photoEdited ? 
                                  <DragDropFile onChange={FormHandler}  dbName="foodImage" />  
                           :  
                       
                            <div className="vstack gap-2">
                               <div>
                                   <button onClick={()=>setPhotoEdited(true)} className="btn btn-outline-danger">X</button>
                               </div>
                               <div className="d-flex justify-content-center category" style={{backgroundImage: `url('${foodPhoto}')`}} >

                               </div>
                           </div>
                            
                                 
                            }
                            

                           <div>
                            <button onClick={submitHandler} className="btn btn-warning">Edit Product</button>
                           </div>
                           <label className={response.class}>{  response.resp} </label>
                        </div>
                    </div>
                </div>
            </div>
        )
 }

 export default EditProduct;