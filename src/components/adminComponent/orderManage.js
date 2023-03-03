import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import PutHandler from "../../service/apiHandler/putHandler";
import { useParams } from "react-router-dom";

 const OrderManage=()=>{
 const {type} = useParams()

 useEffect(()=>{
    if(type == 'category'){
        getCategoryOrder()
    }else if (type == 'product'){
        categoryGetter ()
    }
   
  },[])

  useEffect(()=>{
    // categoryGetter()
    // if(type == )
    if(type == 'category'){
        setItems([])
        getCategoryOrder()
    }else if (type == 'product'){
        setItems([])
        categoryGetter ()
    }
  },[type])
  const [isLoadidng, setIsLoading]=useState()

 const [catList, setCategoryList] = useState([])
 const [selectedCat, setSelectedCat] = useState('')

useEffect(()=>{
    if(selectedCat != ''){
        getProductOrder(selectedCat)
    }
     
},[selectedCat])

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

 
 
// all to be fetched data
const [items, setItems] = useState([])

// category order data featcher
const getCategoryOrder = async()=>{
    let data = new GetHandler()
    setIsLoading(true)

    let x =data.getCategoryInOrder().then(res=>{
        setIsLoading(false)

        if(res.status == 200){
            setItems(res.data)
        }else{
            alert('db connect error2')
        }
    })
}



// category order updater
const categoryOrderUpdater = async (body, id)=>{
    let data = new PutHandler()
    setIsLoading(true)

    await data.updateCategoryOrder(body,id).then(res=>{
        setIsLoading(false)

        if(res.status == 200){
        //    alert('ok') 
        }else{
            alert('db error')
        }
    })
}

// PRODUCT UPDATER
const productOrderUpdater = async (body, id)=>{
    let data = new PutHandler()
    setIsLoading(true)

    await data.updateProductOrder(body,id).then(res=>{
        setIsLoading(false)

        if(res.status == 200){
        //    alert('ok') 
        }else{
            alert('db error')
        }
    })
}



// product data fetcher 
const getProductOrder = async(cid)=>{
    let data = new GetHandler()
    setIsLoading(true)

    let x =data.getProductOnCategory(cid).then(res=>{
        setIsLoading(false)

        if(res.status == 200){
            setItems(res.data)
        }else{
            alert('db connect error')
        }
    })
}

const upMoveHandler = (i, objId)=>{
    //swap the previous with the current
    let prev = items[i-1]

    let old = [...items]
        // const toBeEditedCurrent = old.findIndex(x=> x[i])
        // const toBeEditedPrev = old.findIndex(x=>x[i-1])
        let toBeEditedCurrent = old.find(obj => obj._id === objId)
        let toBeEditedPrev = old.find(obj => obj._id === prev._id)
        console.log(toBeEditedCurrent)
 
        let pName = toBeEditedPrev.name
        let cName = toBeEditedCurrent.name

        let pOrder = toBeEditedPrev.order
        let cOrder = toBeEditedCurrent.order

        let cId = toBeEditedCurrent._id
        let pId = toBeEditedPrev._id

        toBeEditedCurrent.name = pName
        toBeEditedCurrent.order = cOrder
       
        toBeEditedPrev.name = cName
        toBeEditedPrev.order = pOrder

        toBeEditedCurrent._id = pId
        toBeEditedPrev._id = cId
        
       
        //db change updater
        let toBeUpdatedCurrent = {
            order:  cOrder
        }
        let toBeUpdatedPrev = {
            order: pOrder
        }
        setItems(old)
        if(type =='category'){
        // current order updater
        categoryOrderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)

        // prev order updater
        categoryOrderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
        }else if(type == 'product'){
                    // current order updater
        productOrderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)

        // prev order updater
        productOrderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
        }

       
}



const downMoveHandler = (i, objId)=>{
    //swap the previous with the current
    let prev = items[i+1]

    let old = [...items]
        // const toBeEditedCurrent = old.findIndex(x=> x[i])
        // const toBeEditedPrev = old.findIndex(x=>x[i-1])
       let toBeEditedCurrent = old.find(obj => obj._id === objId)
       let toBeEditedPrev = old.find(obj => obj._id === prev._id)
        // console.log(toBeEditedCurrent)
 
        let pName = toBeEditedPrev.name
        let cName = toBeEditedCurrent.name

        let pOrder = toBeEditedPrev.order
        let cOrder = toBeEditedCurrent.order

        let cId = toBeEditedCurrent._id
        let pId = toBeEditedPrev._id

        toBeEditedCurrent.name = pName
        toBeEditedCurrent.order = cOrder
       
        toBeEditedPrev.name = cName
        toBeEditedPrev.order = pOrder

        toBeEditedCurrent._id = pId
        toBeEditedPrev._id = cId
        
       
        //db change updater
        let toBeUpdatedCurrent = {
            order:  cOrder
        }
        let toBeUpdatedPrev = {
            order: pOrder
        }
        setItems(old)
        if(type =='category'){
            // current order updater
            categoryOrderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)
    
            // prev order updater
            categoryOrderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
            }else if(type == 'product'){
                        // current order updater
            productOrderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)
    
            // prev order updater
            productOrderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
            }
}


 

// useEffect(()=>{
   
//     orderDisplay()
//     // alert('changed')
//  },[items])   

const catDisplay = ()=>{
    return(            <div>
        <h2>Category Order Manager</h2>
        <h6 className="text text-warning" >Orders you modify will be automaticaly saved!</h6>
        <div className=" d-flex justify-content-center align-itmes-center  ">
        {
                             isLoadidng ?  
                            <div>                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />
                            </div>
                            : <div></div>
                        }
     
        <div className="card " style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
             {
items.map((cat, i)=>{
                
return(
<div className="row">
<li className="list-group-item col">  <div className="hstack gap-3" ><h6 className=" " >{i+1}</h6> <h5>{cat.name}</h5> </div></li>   <div className="col" >
        <div className="row">
        <div className="col-4">
        {/* // to hide the up arrow if at begginng  */}
        {
            i != 0 ?  <span className="btn btn-outline-info" onClick={()=>upMoveHandler(i,cat._id)} >^</span> : <div></div>
        }
      </div>
      <div className="col-4">
        {
            // this means the last row. length of array and i are equal
            items.length != (i+1) ? <span className="btn btn-outline-info" onClick={()=>downMoveHandler(i,cat._id)}>v    </span> : <div></div>
        }
        </div>
        </div>
         </div>
</div>
)

})                    }
          
          
        </ul>
        </div>
        </div>
    </div>)
}
const productDisplay = ()=>{
    return(            <div>
        <h2>Product Order Manager</h2>
        <h6 className="text text-warning" >Orders you modify will be automaticaly saved!</h6>
        {
                isLoadidng ?  
                <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

            : <div></div>
        }

        <div className="container d-flex justify-content-center">
        <select onChange={(e)=>setSelectedCat(e.target.value)} className="form-control">
            <option  >Select Category</option>
            {
                catList.map(sel=>{
                    return (
                        <option  value={sel._id} >{sel.name}   </option>
                    )
                })
            }
        </select>
        </div>
        <hr></hr>

        <div className=" d-flex justify-content-center align-itmes-center">
        <div className="card " style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
             {
items.map((cat, i)=>{
                
return(
<div className="row">
<li className="list-group-item col">  <div className="hstack gap-3" ><h6 className=" " >{i+1}</h6> <h5>{cat.name}</h5> </div></li>   <div className="col" >

    <div className="row">
        <div className="col-4">
        {/* // to hide the up arrow if at begginng  */}
        {
            i != 0 ?  <span className="btn btn-outline-info" onClick={()=>upMoveHandler(i,cat._id)} >^</span> : <div></div>
        }
      </div>
      <div className="col-4">
        {
            // this means the last row. length of array and i are equal
            items.length != (i+1) ? <span className="btn btn-outline-info" onClick={()=>downMoveHandler(i,cat._id)}>v    </span> : <div></div>
        }
        </div>
        </div>
         </div>
</div>
)

})                    }
          
          
        </ul>
        </div>
        </div>
    </div>)
}

if(type == 'category'){
    return(
        catDisplay()
    )
}else if ( type == 'product'){
    return(
        productDisplay()
    )
}
        
 }

 export default OrderManage;