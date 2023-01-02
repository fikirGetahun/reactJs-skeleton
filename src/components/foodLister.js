import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';
import GetHandler from "../service/apiHandler/getHandler";

import  "../css/allCss.css";
import { useParams } from "react-router-dom";
 const FoodLister = () =>{

    const {catId} = useParams()

    const bgCsss ={
        backgroundImage:  `url('${akkoFood}')`
    }

    const [readActivity, setReadActivity] = useState("foodDisc")
    const [readMore, setReadMore] = useState('Read More..')
    const [products, setProducts] = useState([])

    var show =  "foodDisc"

    const readMoreHandler = (id, pid)=>{
        let spanId = document.getElementById(id)
        let className = spanId.innerText
        if(className == "Read More..."){
            spanId.innerHTML="Close"
        }else{
            spanId.innerHTML="Read More..."
        }


          
        if(readActivity == "foodDisc"){
            setReadActivity( "foodDiscRead" ) 
            setReadMore('Close')
           let x = document.getElementById(pid)
           x.classList.add("foodDiscRead")
           x.classList.remove("foodDisc")
           
        }else{
            setReadActivity("foodDisc")
            setReadMore('Read More..')
            let x = document.getElementById(pid)
            x.classList.remove("foodDiscRead")
            x.classList.add("foodDisc")
        }
    }

    
 

    const productGetter = async ()=>{
        const datax = new GetHandler()
        var test
      await  datax.getProductOnCategory(catId).then((res)=>{
   
        if(res.statusText == 'OK'){
                test = res.data
                setProducts(test)
                
            }else{
                alert(res)
            }
        })
    }
    const [x, setx] = useState([])
    // const [i,setI] = useState(0)
    // let ff = []
    const test = async  ()=>{
        
          products.forEach(async pro=>{
            // console.log("pro",pro)

          let zz= await priceGetter(pro._id) 
            // ff.push(v)
            // console.log("d",ff)
            setx(c=>[...c,zz])
            
        })
    }

    useEffect(()=>{
        test()
    }, [products])

    const priceGetter = async (foodId)=>{
        let x;
        const datax = new GetHandler()
       await datax.getProductPrice(foodId).then((res)=>{
            if(res.statusText == 'OK'){
                x= res.data
              
                return x;
            }else{
                alert(res)
            }
        })
        return x;
    }

    useEffect(()=>{
        productGetter()
        // let x = priceGetter("63ae8a0163731ed525b5a81b")
        // console.log(x)
    },[])

    let i = 0;
    return( 
        <div>
            <div  className="category" >
                {/* <div className="foodImage"   style={bgCsss}>
                
                </div> */}
                {/* <div className="vstack">
                    <h3 className="foodTitle d-flex justify-content-start" >Title</h3>
                    <p className={readActivity+" m-0 p-0 "} style={{  padding:0,   overflow:"hidden",
    textOverflow:"ellipsis"}} onClick={readDisplay} >
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con          
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con       
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con       
                    imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con            
                  
                         </p>
                         <span onClick={readDisplay} className="d-flex justify-content-end" >{readMore}</span>
 
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
                </div> */}

              {/* {console.log("th",x)} */}
              
                {
                    
                    products.map ((data, i)=>{
                    
                    
                       return (
                        
                        <div className="vstack" >
                            
                             <div className="foodImage"   style={{backgroundImage:  `url('${data.image}')`}}> </div>
                        <h3 className="foodTitle d-flex justify-content-start" >{data.name }</h3>
                        <p id={data._id} className="foodDisc m-0 p-0 " style={{  padding:0,   overflow:"hidden",
        textOverflow:"ellipsis"}}   >
                                { data.info}  
                             </p>
                             <span id={"read"+data._id} onClick={()=>readMoreHandler("read"+data._id, data._id)} className="d-flex justify-content-end" > Read More...</span>
     
                        <div className="row" >
                            <div className="price hstack gap-3">
                                <div className="fullPrice">
                                    <h4 className="fullPriceTitle" >Full price</h4>
                                    {/* { priceGetter(data._id)} */}
                                    <h5 className="fullPriceBrr" > { x[i] ? x[i].price : null }   <span className="supperScript" >Br</span></h5>
                                 </div>      
                                {
                                    (x[1] ? x[i].halfFull : null )?
                                  
                                    (<div className="halfPrice">
                                    <h4 className="fullPriceTitle">Half price</h4>
                                    <h5 className="fullPriceBrr">{x[1] ? x[i].halfPrice : null } <span className="supperScript" >Br</span></h5>
                                </div>) :
                                    (<div></div>)
                                }
                       
                            </div>
                            {/* <div className="order">
    
                            </div> */}
                        </div>
                    </div>
                    
                       )
                  
                    }
           
                    )
                }

            </div>
       
        </div>
    )

}

export default FoodLister;