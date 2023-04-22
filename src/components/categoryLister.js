import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';
 import '../css/allCss.css';
import GetHandler from "../service/apiHandler/getHandler.js";
import { Link, useNavigate } from "react-router-dom";
 
const CategoryLister = ()=>{
    


    const [categoryData, setCatagoryData] = useState([]);
    const [ isLoadidng, setIsLoading] = useState(true)
    
var cat = new GetHandler();
const what = async ()=>{
    var test  
    await  cat.getCategory()
      .then((res)=>{
        //   test.push(res.data)
        if(res.status == 200){
            test = res.data
            setCatagoryData(test)
            setIsLoading(false)
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
    <div className="d-flex justify-content-center">
      <div className="category11" >
          <div className="" >
                    {/* {console.log(categoryData)} */}
        { 

!isLoadidng ? 
    categoryData.map(data=>{
        // alert(data.catagoryName)
        return(
          <Link to={"/product/"+data._id} className="" style={{textDecoration:'none'}} >
              <div className="d-flex justify-content-center category" key={data.id} style={{ backgroundImage:  `url('${data.image}')`}} >
            <div className="bgCat container   d-flex align-items-center justify-content-center">
            <span   className= "categoryText   " style={{opacity:'revert'}}  >{data.name}</span>

            </div>
        </div>
          </Link>
        )
    }) :

    // <img    className="m-0 p-1  " src={require('../file/img/loading.gif')}  />

    <div>
      <div className="category skeletonAnimation" ></div>
      <div className="category skeletonAnimation" ></div>
      <div className="category skeletonAnimation" ></div>
      <div className="category skeletonAnimation" ></div>
      <div className="category skeletonAnimation" ></div>
      <div className="category skeletonAnimation" ></div>

    </div>

}
          </div>
      </div>
      

    </div>
)

}

export default CategoryLister;
