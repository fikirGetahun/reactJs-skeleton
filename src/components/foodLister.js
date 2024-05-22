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
            setReadActivity( "foodDiscRead" ) 
            setReadMore('Close')
           let x = document.getElementById(pid)
           x.classList.add("foodDiscRead")
           x.classList.remove("foodDisc")
        }else{
            spanId.innerHTML="Read More..."
            setReadActivity("foodDisc")
            setReadMore('Read More..')
            let x = document.getElementById(pid)
            x.classList.remove("foodDiscRead")
            x.classList.add("foodDisc")
        }


          
        // if(readActivity == "foodDisc"){
        //     setReadActivity( "foodDiscRead" ) 
        //     setReadMore('Close')
        //    let x = document.getElementById(pid)
        //    x.classList.add("foodDiscRead")
        //    x.classList.remove("foodDisc")
           
        // }else{
        //     setReadActivity("foodDisc")
        //     setReadMore('Read More..')
        //     let x = document.getElementById(pid)
        //     x.classList.remove("foodDiscRead")
        //     x.classList.add("foodDisc")
        // }
    }
    const [pbycat, setPbyCat] = useState([])
    const productSearch = async (s)=>{
        const datax = new GetHandler()
        var test

        setIsLoading(true)
      await  datax.getSearchResult(s).then((res)=>{
   
        if(res.status == 200){
                test = res.data
                // console.log(test)
                if(test.length > 0){
                    setPbyCat([])
                    setPbyCat(old=>[...old,res.data])
                    setProducts(test)
                }else{
                    navigate("/nodata")
                }
                
                
            }else{
                alert(res)
                console.log(res)
            }
            setIsLoading(false)
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
                    setIsLoading(false)
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
        // test()
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
            getProductByCatt()
            console.log('i fire once');
         }
      
        // let x = priceGetter("63ae8a0163731ed525b5a81b")
        // console.log(x)
    },[])
    const [nodata, setNodata] = useState()
    const getProductByCatt = async ()=>{
        // alert('getp')
        setIsLoading(true)
        const data = new GetHandler()
        await data.getProductbyCat(catId,scrollPage).then(res=>{
            // alert(scrollPage)
            if(res.status == 200){
                if(res.data.message == 400){
                    setNodata('No more product')
                    
                }else{
                    setPbyCat(old=>[...old,res.data])
                   
                }

            }
            setIsLoading(false)
        })
    }

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
    let body = document.querySelector("body")
    body.style.height = "100%" // Make sure the height is fixed
    body.style.overflow = "hidden" // H

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
                    let g=[] 
                    g  = {
                        avg : res.data.avg,
                        outOf: res.data.outOf
                    }
             
                    // setRating(old=>[...old,g])
                    rating[food._id]=g
                    setFrom(old=>[...old,res.data.outOf])
                     
                }else{
                    console.log('no food rating error occured')
                }
            })
        })

        // return result
    }

 

 

    const [ isLoadidng, setIsLoading] = useState()






    const [scrollPage, setScrollPage]=useState(0)

 
window.scroll = function(ev){
     
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        
    }
}
const [scrollTop, setScrollTop] = useState(0);
useEffect(() => {
    const handleScroll = (e) => {
      setScrollTop(window.scrollY);
    //   const bottom = e.target.scrollHeight - e.target.scrollTop=== e.target.clientHeight;
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          // alert('bottom')
  
          setScrollPage(scrollPage+2)
          
          
        //   getProductByCatt()
          
          // alert(scrollPage)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(()=>{
    if(scrollPage != 0 && nodata != 'No more product'){
        if(search == null){ // if search string is there, scroll must not featch new data
            getProductByCatt()
        }

    }
  },[scrollPage])

const scrollHandler = (e)=>{
    // console.log(e.currentTarget.scrollTop)
 
    

    const bottom = e.target.scrollHeight - e.target.scrollTop=== e.target.clientHeight;
    if(bottom){
        // alert('bottom')

        setScrollPage(scrollPage+2)
        // alert('dd')
        
   
        
        // alert(scrollPage)
    }
    // console.log(e.target.clientHeight)
    // console.log(bottom)    style={{height:'83vh',overflow: 'scroll', overflowX:'hidden'}}
}

    return( 
        <div id="hold" className="d-flex justify-content-center"  
       
       >
            <div  className="category2 "       >
            
               {console.log(pbycat)}
            {/* {rating['63ff549dccb6cf9732ad4650'] ?  console.log(rating['63ff549dccb6cf9732ad4650'].avg) : ''} */}
                 {
                    
                    
                    pbycat.map ( (datax, i)=>{
                        
                        return (
                            datax.map((data,ix)=>{
                                return (
                            
                                    <div className="vstack" >
                                            
                                         {/* <div className="foodImage"   style={{backgroundImage:  `url('${data.image}')`}}> </div> */}
                                         <img id={"myImg"+data._id} className="foodImage" style={{backgroundColor: "black"}} onClick={()=>modalImage(data._id,data.image)}  src={data.image} alt="Snow"   />
                                         {/* <div id={"myImg"+i} onClick={()=>modalImage(i,data.image)} className="foodImage"   alt="Snow" style={{backgroundImage:  `url('${data.image}')`}}></div>   */}
            
                                    {/* this is th */}
                                    <div id={"myModal"+data._id} class="modal justify-content-center align-items-center "  style={{overflow:"hidden"}} >
                                    <span  className="close" onClick={()=>modalImageClose(data._id)}>&times;</span>
                                    <img className= "modal-content" style={{backgroundColor: "black"}} src={data.image} id={"img01"+data._id} />
                                    <div id="caption"></div>
                                    </div>
                                    <div className="row">
                                    <h3 className="foodTitle d-flex justify-content-start col align-items-center p-3" >{data.name }</h3>
                                    <div className="col ">
                                        <div className="hstack  d-flex justify-content-end  " >
            
                                        <div className="hstack  ">  
                                        <div className="price hstack gap-3">
                                            <div className="fullPrice">
                                                {
                                                   (  data.result[0].halfFull  )?  <h4  className="fullPriceTitle">Full Price</h4> : <h4 className="fullPriceTitle">Price</h4>
                                                }
                                                {/* <h4 className="fullPriceTitle" >
                                                    {
                                                         (  data.result[0].halfFull  )?  <div>Full</div> : <div></div>
                                                    }
                                                   Price</h4> */}
                                                {/* { priceGetter(data._id)} */}
                                                <h5 className="fullPriceBrr" > { data.result[0].price }   <span className="supperScript" >Br</span></h5>
                                             </div>      
                                            {
                                                (  data.result[0].halfFull  )?
                                              
                                                (<div className="halfPrice">
                                                <h4 className="fullPriceTitle ">Half Price</h4>
                                                <h5 className="fullPriceBrr">{data.result[0].halfPrice  } <span className="supperScript" >Br</span></h5>
                                            </div>) :
                                                (<div></div>)
                                            }
                     
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

                 
                                    <div className=" hstack" >
                                    <span id={"read"+data._id} onClick={()=>readMoreHandler("read"+data._id, data._id)} className="d-flex justify-content-end cursor" style={{color:'green'}} > Read More...</span>
                                    <div className="vstack  ">
                                                <div className="hstack  d-flex justify-content-end ">
                                                <Link to={'/feedback/'+data._id} style={{textDecoration:'none'}} >
                                            {/* <button className="btn btn-outline-dark p-1 m-0"></button>     */}
                                            {/* <span className="text" style={{color:'coral', fontFamily:'cursive'}} >{ Math.floor( rating[i] *100) / 100 }</span> */}
                                    <span className="text" style={{color:'coral' , fontSize:'18px'}} >{ rating[data._id] ?  Math.floor( rating[data._id].avg *10) / 10 : '0'  }</span>
                                             </Link>
            
                                            <span className="d-flex align-items-center" style={{ cursor: 'pointer', textDecoration: 'none', fontSize:'18px'}} >&#9733;</span>
                                                </div>
            
                                       
                                            <span className="d-flex justify-content-end "> { rating[data._id] ? rating[data._id].outOf : '0'}  Reviews</span>
                                            
         
            
                                            </div>

                                        {/* <div className="order">
                
                                        </div> */}
                                         
                                         
                                    </div>
                                      
                    <br></br>

                                </div>
                                
                                   )
                            })
                        )
                    

                  
                    } 
                
           
                    )     
                }

                {
                    nodata
                }
                    {
                        isLoadidng && nodata!='No more product' ? (
                            
                            <div>
                               
                            {/* <img    className="m-0 p-1  " src={require('../file/img/loading.gif')}  /> */}
                            <div className="foodImage skeletonAnimation" ></div>
                            <div className="skeletonAnimation skeletonText justify-content-center" ></div>
                            <div className="skeletonAnimation skeletonText justify-content-center" ></div>
                            <div className="skeletonAnimation skeletonText justify-content-center" ></div>
                        </div>
                        ):
                        <div>{console.log('scroll222')}</div>
                    }
             
                

            </div>

        </div>
    )

}

export default FoodLister;
