import React, { useEffect } from "react";
import DragDropFile from "../helpComponents/photoUpload";
import { useState } from "react";
import SelectFieldComp from "../helpComponents/selectField";
import { TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import PutHandler from "../../service/apiHandler/putHandler";

 const OrderManage=()=>{


 useEffect(()=>{
    getCategoryOrder()
  },[])

 

 

const [items, setItems] = useState([])


const getCategoryOrder = async()=>{
    let data = new GetHandler()
    let x =data.getCategoryInOrder().then(res=>{
        if(res.statusText == 'OK'){
            setItems(res.data)
        }else{
            alert('db connect error')
        }
    })
}


const orderUpdater = async (body, id)=>{
    let data = new PutHandler()
    await data.updateCategoryOrder(body,id).then(res=>{
        if(res.statusText == 'OK'){
        //    alert('ok') 
        }else{
            alert('db error')
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
        // current order updater
        orderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)

        // prev order updater
        orderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
       
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
        // current order updater
        orderUpdater(toBeUpdatedCurrent, toBeEditedCurrent._id)

        // prev order updater
        orderUpdater(toBeUpdatedPrev, toBeEditedPrev._id)
        // console.log('prev ', pOrder)
}


 

// useEffect(()=>{
   
//     orderDisplay()
//     // alert('changed')
//  },[items])   

const itemsDisplay = ()=>{
    return(            <div>
        <h2>Category Order Manager</h2>
        <div className=" d-flex justify-content-center align-itmes-center">
        <div className="card " style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
             {
items.map((cat, i)=>{
                
return(
<div className="row">
    <li className="list-group-item col">{cat.name} </li>    {cat.order}<div className="col" >

        {/* // to hide the up arrow if at begginng  */}
        {
            i != 0 ?  <span className="btn btn-warning" onClick={()=>upMoveHandler(i,cat._id)} >^</span> : <div></div>
        }
        {
            // this means the last row. length of array and i are equal
            items.length != (i+1) ? <span className="btn btn-warning" onClick={()=>downMoveHandler(i,cat._id)}>v    </span> : <div></div>
        }
         </div>
</div>
)

})                    }
          
          
        </ul>
        </div>
        </div>
    </div>)
}

        return(
            itemsDisplay()
        )
 }

 export default OrderManage;