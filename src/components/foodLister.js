import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';

import  "../css/allCss.css";
 const FoodLister = () =>{

    const bgCsss ={
        backgroundImage:  `url('${akkoFood}')`
    }

    const [readActivity, setReadActivity] = useState("foodDisc")
    var show =  "foodDisc"
    const readDisplay=()=>{
        //alert('test')
        
        if(readActivity == "foodDisc"){
            setReadActivity( "foodDiscRead" ) 
        }else{
            setReadActivity("foodDisc")
        }
      //  alert(show)
    }
 
    return( 
        <div>
            <div  className="category" >
                <div className="foodImage"   style={bgCsss}>

                </div>
                <div className="vstack">
                    <h3 className="foodTitle d-flex justify-content-start" >Title</h3>
                    <p className={readActivity} onClick={readDisplay} >
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con          
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con       
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con       
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con                 </p>
 
                    <div className="row" >
                        <div className="price hstack gap-3">
                            <div className="fullPrice">
                                <h4 className="fullPriceTitle" >Full price</h4>
                                
                                <h5 className="fullPriceBrr" >100 <span className="supperScript" >Br</span></h5>
                            </div>
                            <div className="halfPrice">
                                <h4 className="fullPriceTitle">Half price</h4>
                                <h5 className="fullPriceBrr">50 <span className="supperScript" >Br</span></h5>
                            </div>
                        </div>
                        <div className="order">

                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )

}

export default FoodLister;