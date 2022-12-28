import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';
 import  '../css/allCss.css';
import GetHandler from "../service/apiHandler/getHandler.js";
 
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
        if(res.statusText == 'OK'){
            test = res.data
            setCatagoryData(test)
        }else{
            alert('ERROR: 404 Page not found!')
        }
       
        
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
                    <div className="d-flex justify-content-center category" key={data.id} style={{ backgroundImage:  `url('${data.image}')`}} >
                    <span   className="categoryText" >{data.name}</span>
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