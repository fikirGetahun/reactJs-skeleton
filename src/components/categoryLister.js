import React from "react";
import akkoFood from '../file/img/akko.food.PNG';
 import  '../css/allCss.css';
const CategoryLister = ()=>{
    const bgCss ={
        backgroundImage:  `url('${akkoFood}')`
    }
 
return(
    <div>
        <div className="d-flex justify-content-center category" style={bgCss} >
            <span   className="categoryText" >Text</span>
        </div>
        <div className="d-flex justify-content-center category" style={bgCss}
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
        </div>
    </div>
)

}

export default CategoryLister;