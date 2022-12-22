import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';
 import  '../css/allCss.css';
import GetHandler from "../service/apiHandler/getHandler.ts";
 
const CategoryLister = ()=>{
    const bgCss ={
        backgroundImage:  `url('${akkoFood}')`
    }


    const [categoryData, setCatagoryData] = useState([]);

    
var cat = new GetHandler();
const what = async ()=>{
    var test  
    await  cat.getCategory()
      .then((res)=>{
        //   test.push(res.data)
        test = res.data
        //   alert(res)
        setCatagoryData(test)
       
      }) 
      // alert(categoryData)
   }
useEffect( ()=>{
  what()

 
},[])

 


return(
    <div>

        { 
        //   console.log(categoryData)  
            categoryData.map(data=>{
                // alert(data.catagoryName)
                return(
                    <div className="d-flex justify-content-center category" key={data.id} style={bgCss} >
                    <span   className="categoryText" >{data.catagoryName}</span>
                </div>
                )
            })
        }
      

        {/* <div className="d-flex justify-content-center category" style={bgCss}
        >
            <span   >Text</span>
        </div>
        <div className="d-flex justify-content-center category" style={bgCss}
        >
            <span   >Text</span>
        </div>
        <div className="d-flex justify-content-center category" style={bgCss}
        >
            <span   >Text</span>
        </div> */}
    </div>
)

}

export default CategoryLister;