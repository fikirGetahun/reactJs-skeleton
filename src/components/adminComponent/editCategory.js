import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import  '../../css/allCss.css';
 import { useState } from "react";
import PostHandler from "../../service/apiHandler/postHandler";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import { useParams } from "react-router-dom";
import PutHandler from "../../service/apiHandler/putHandler";
import { isEmpty } from "lodash";


 const EditCategory =()=>{

     const {id} = useParams()

     const [catName, setCatName] = useState();
     const [catOrder, setCatOrder] = useState();
     const [catPhoto, setCatPhoto] = useState();

const getDataToEdit = async () =>{
    setIsLoading(true)
    let data = new GetHandler()
    let response =await data.getOneCategory(id)
    .then(res=>{
        if(res.status == 200){
            setCatName(res.data.data[0].name)
            setCatOrder(res.data.data[0].order)
            setCatPhoto(res.data.data[0].image)
            setIsLoading(false)
        }else{
            setIsLoading(false)
            alert('not found err:404')
        }
    })
}


    //input form handler
//

 
const [response, setResponse] = useState({class: 'text', resp: ' '})

const [photoEdited, setPhotoEdited] = useState(false)

const FormHandler =  (value, dbName, buffer )=>{ // value and dbName are passed from the chiled to parent throgh props
    if(dbName == "catName"){
        setCatName(value)
    }
    if(dbName == "catOrder"){
        setCatOrder(value)
    }
    if(dbName == "catImage"){
        // alert('inin image')
        //  setIsLoading(true)
        setIsLoading(true)
        try{

           if(buffer == 'no'){
           
            // alert('nottt wait')
           }else{
            // alert('yess')
            setCatPhoto(buffer)
            setIsLoading(false)
           }
                // setCatPhoto(buffer)
                // setIsLoading(false)
             
             
             
        }catch{
            alert('not setting')
        }
      
        // if(buffer == catPhoto){
        //     setIsLoading(false)
        // }else{
        //     setIsLoading(true)
        //     setCatPhoto(buffer)
        //     setIsLoading(false)

        // }
        

    }
}

useEffect(()=>{


},[catPhoto])
const [isLoadidng, setIsLoading]=useState()
const submitHandler = async()=>{
    const sender = new PutHandler()
    // var x = new Buffer.from(catPhoto, 'base64')
    
    var body = {
        name:catName,
        image:catPhoto,
        order: catOrder,
    }
    setIsLoading(true)
    if(catPhoto != null){
        await sender.updateCategory(body, id)
        .then(resx=>{
            
            if(resx.status == 200){
                setIsLoading(false)
                 setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-success',
                        resp: 'Edited Successfully!'
                    }
                ))
            }else{
                setIsLoading(false)
                setResponse(old=>(
                    {
                        ...old,
                        class: 'text text-danger',
                        resp: resx.message
                    }
                ))
            }
          
        })
    }
 else{
    setIsLoading(false)
    setResponse(old=>(
       {
           ...old,
           class: 'text text-success',
           resp: 'Photo is empty!'
       }
   ))  
 }
     
}
useEffect(()=>{
    getDataToEdit()
},[])

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
                            <TextField className="" type="text" value={catName}   id="standard-basic" placeholder="Category"   onChange={(e)=>setCatName(e.target.value)} name="catName" />
                            <label>  </label>
                        </div>

                       

                        {/* <div className="textField p-2">
                        <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Category Order</label> 
                            <TextField className="" type="text" value={catOrder}   id="standard-basic" placeholder="Order of the Display"   onChange={(e)=>setCatOrder(e.target.value)} name="catOrder" />
                            <label></label>
                        </div> */}
                            {/* <div className="vstack gap-2">
                                <div>
                                    <button className="btn btn-outline-danger">X</button>
                                </div>
                                <div className="d-flex justify-content-center category">

                                </div>
                            </div> */}
                            

                            {
                            photoEdited ? 
                                  <DragDropFile onChange={FormHandler}  dbName="catImage" />  
                           :  
                       
                            <div className="vstack gap-2">
                               <div>
                                   <button onClick={()=>setPhotoEdited(true)} className="btn btn-outline-danger">X</button>
                               </div>
                               <div className="d-flex justify-content-center category" style={{backgroundImage: `url('${catPhoto}')`}} >

                               </div>
                           </div>
                            
                                 
                            }
                            
                        
                           <button onClick={submitHandler} className="btn btn-warning">Edit Category</button>
                           <br></br>
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

 export default EditCategory;