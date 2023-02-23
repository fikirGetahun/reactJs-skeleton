import React, { useEffect, useState } from "react";
import akkoFood from '../file/img/akko.food.PNG';
import GetHandler from "../service/apiHandler/getHandler";
import { Link } from "react-router-dom";

import  "../css/allCss.css";
import { useNavigate, useParams } from "react-router-dom";

 const FoodLister = ( props ) =>{
    const {catId} = useParams()
    const {search} = useParams()
    let navigate =   useNavigate()

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
            spanId.innerHTML="Less"
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

    const productSearch = async (s)=>{
        const datax = new GetHandler()
        var test
      await  datax.getSearchResult(s).then((res)=>{
   
        if(res.status == 200){
                test = res.data
                console.log('search........'+test)
                if(test.length > 0){
                    setProducts(test)
                }else{
                    navigate("/nodata")
                }
                
                
            }else{
                alert(res)
            }
        })
    }
 

    const productGetter = async ()=>{
        const datax = new GetHandler()
        var test
      await  datax.getProductOnCategory(catId).then((res)=>{
   
       if(res.status == 200){
                test = res.data
                if(test.length > 0){
                    setProducts(test)
                }else{
                    navigate("/nodata")
                }
                
                
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
        ratingGetter()
    }, [products])

    const priceGetter = async (foodId)=>{
        let x;
        const datax = new GetHandler()
       await datax.getProductPrice(foodId).then((res)=>{
            if(res.status == 200){
                x= res.data
              
                return x;
            }else{
                alert(res)
            }
        })
        return x;
    }

    // on first load if there is no search pram it loads food list besd on category
    // if there is serach pram, it loads serach result
    useEffect(()=>{
        
        if(search != null){
            productSearch( search)
         }else{
            productGetter()
         }
      
        // let x = priceGetter("63ae8a0163731ed525b5a81b")
        // console.log(x)
    },[ ])

    // if the search pram is changed meaning if new search data is entered, it loads the new serach result
    useEffect(()=>{
        if(search != null){
            productSearch( search)
         }
     },[ search])


    const modalImage = (id,image)=>{
        var modal = document.getElementById("myModal"+id);

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg",id);
var modalImg = document.getElementById("img01",id);
var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

 
    modal.style.display = "block";
    modalImg.src = image
    captionText.innerHTML = this.alt;
  

    }

    const modalImageClose = (id)=>{
       
        var modal = document.getElementById("myModal"+id);
        // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close" )[0];
// When the user clicks on <span> (x), close the modal
 
    modal.style.display = "none" 

    // alert('in')
    }

    let i = 0;
    const [rating, setRating]=useState([])
    const [from, setFrom]=useState([])
    let t = []
    const ratingGetter = async (foodId)=>{
        const data = new GetHandler()
        let result;
        products.forEach(async (food)=>{
            await data.getRatingAvg(food._id).then(res=>{
                if(res.status == 200){
                    // result = res.data 
             
                    setRating(old=>[...old,res.data.avg])
                    setFrom(old=>[...old,res.data.outOf])
                    // console.log(res.data)
                }else{
                    console.log('no food rating error occured')
                }
            })
        })

        // return result
    }


    const returner = (i)=>{
        let f = rating[i]  
         
        // alert(f)
        return f.avg
    }

    return( 
        <div className="d-flex justify-content-center">
            <div  className="category2  " >
                 {
                    
                    products.map ( (data, i)=>{
                    
                    
                       return (
                        
                        <div className="vstack" >
                            
                             {/* <div className="foodImage"   style={{backgroundImage:  `url('${data.image}')`}}> </div> */}
                             <img id={"myImg"+i} className="foodImage" onClick={()=>modalImage(i,data.image)}  src={data.image} alt="Snow"   />
                             {/* <div id={"myImg"+i} onClick={()=>modalImage(i,data.image)} className="foodImage"   alt="Snow" style={{backgroundImage:  `url('${data.image}')`}}></div>   */}

                        {/* this is th */}
                        <div id={"myModal"+i} class="modal">
                        <span  className="close" onClick={()=>modalImageClose(i)}>&times;</span>
                        <img class="modal-content" src={data.image} id={"img01"+i} />
                        <div id="caption"></div>
                        </div>
                        <div className="row">
                        <h3 className="foodTitle d-flex justify-content-start col align-items-center" >{data.name }</h3>
                        <div className="col ">
                            <div className="hstack  d-flex justify-content-end  " >

                            <div className="hstack  ">

                                <div className="vstack  ">
                                    <div className="hstack  d-flex justify-content-end ">
                                    <Link to={'/feedback/'+data._id} style={{textDecoration:'none'}} >
                                {/* <button className="btn btn-outline-dark p-1 m-0"></button>     */}
                                <span className="text" style={{color:'coral', fontFamily:'cursive'}} >{ Math.floor( rating[i] *100) / 100 }</span>
                                 </Link>

                                <span className="d-flex align-items-center" style={{ cursor: 'pointer', textDecoration: 'none'}} >&#9733;</span>
                                    </div>

                           
                                <span className="d-flex justify-content-end "> {from[i]}  Reviews</span>
                                
                                    {/* <div className="hstack p-0">
                                    <span id={data._id+'1'} style={{fontSize:'2vw', cursor: 'pointer', color: rating[i]   > 1||  rating[i]   == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                            <span id={data._id+'2'} style={{fontSize:'2vw', cursor: 'pointer', color: rating[i]   > 2 ||  rating[i]   == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                            <span id={data._id+'3'} style={{fontSize:'2vw', cursor: 'pointer', color: rating[i]   > 3||  rating[i]   == 3? 'yellow' : 'black'}}  >&#9733;</span>
                            <span id={data._id+'4'} style={{fontSize:'2vw', cursor: 'pointer', color: rating[i]   > 4||  rating[i]   == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                            <span  id={data._id+'5'}style={{fontSize:'2vw', cursor: 'pointer', color: rating[i]   > 5 ||  rating[i]   == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                    </div> */}
                                                                    {/* <div className=" p-0 m-0" >
                                <Link to={'/feedback/'+data._id}>
                            <span className="  " style={{color: 'coral' }}  >Rate This Food </span>
                            </Link>
                                </div> */}

                                </div>
                                </div>


                            </div>
   
                                <div >

                            </div>

                        </div>
                        </div>
                      
                        <p id={data._id} className="foodDisc m-0 p-0 " style={{  padding:0,   overflow:"hidden",
        textOverflow:"ellipsis"}}   >
                                { data.info}  
                             </p>
                             <span id={"read"+data._id} onClick={()=>readMoreHandler("read"+data._id, data._id)} className="d-flex justify-content-end cursor" style={{color:'green'}} > Read More...</span>
     
                        <div className=" " >
                            <div className="price hstack gap-3">
                                <div className="fullPrice">
                                    <h4 className="fullPriceTitle" >Full price</h4>
                                    {/* { priceGetter(data._id)} */}
                                    <h5 className="fullPriceBrr" > { x[i] ? x[i].price : null }   <span className="supperScript" >Br</span></h5>
                                 </div>      
                                {
                                    (x[1] ? x[i].halfFull : null )?
                                  
                                    (<div className="halfPrice">
                                    <h4 className="fullPriceTitle ">Half price</h4>
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
