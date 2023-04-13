import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteHandler from "../../service/apiHandler/deleteHandler";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
 



const AnaliticFeedBackPage = ()=>{


const [questionConstructor, setQuetionConstructor] = useState([]);
const [allQuestions, setAllQuestions] = useState([])
const [allAnsewers, setAllAnsewers] = useState([])
 

const {foodId} = useParams();
 

const getQuestionsAndChoice = async ()=>{
    const data = new GetHandler();
    await data.getQuestions().then(res=>{
        if(res.status == 200){
      
            setAllQuestions(res.data)
        }else{
            console.log('no questions')
        }
    })
}
const [u, setu]=useState([])
  
 const reloader = ()=>{
    for(let i=1;i<5;i++){
        window.location.reload(false)
    }
   
 }
//  window.location.reload(true)
useEffect(()=>{
//   cc()
// countReview()
// cons()
// reloader()
// allAnsewresGetter()
// allAnsewresGetter()
// window.location.reload(false);

 
},[u])


const [isLoadidng, setIsLoading]=useState()


const [allchoices, setAllchoices] = useState([])

const getAllchoice = async ()=>{
    const data = new GetHandler();
    setAllchoices([])
   

    allQuestions.forEach(async(q)=>{
        setIsLoading(true)
        await data.getChoosenQuestion(q._id).then(res=>{
            setIsLoading(false)
            if(res.status == 200){
                
               //  setAllAnsewers(res.data.qid)
               setAllchoices(old=>[...old,res.data])
            //    j.push(res.data)
               // console.log(res.data)
               // j = res.data
    
            }else{
                console.log('no questions')
            }
        })
    })

   
}


const ppp = async ()=>{
    const data = new GetHandler();
    setIsLoading(true)
   
        await data.getChoosen().then(res=>{
            setIsLoading(false)
            if(res.status == 200){
                
               //  setAllAnsewers(res.data.qid)
               setu(res.data)
            //    j.push(res.data)
               // console.log(res.data)
               // j = res.data
    
            }else{
                console.log('no questions')
            }
        })
    
}

 

 
useEffect(()=>{
    // answerPerChoice()
    countReview()
},[allchoices])

const [pls, setpls] = useState([])
const [test, setTest] = useState([])
const countReview = async ()=>{
    const data = new GetHandler();
    let result;

    
    // u.forEach(async (element) => {
    //     await data.getAnswers(foodId, element.question_id, element._id).then(res=>{
    //         if(res.status == 200){
    //             result = res.data.countx
    //             let f = []
    //             f = {
    //                 cid : element._id,
    //                 count : result
    //             }
    //             setpls(old=>[...old,f])
    //             // console.log(f)
    //         }else{
    //             console.log('no')
    //         }
    //     })
    //     i = i +1
    // });
    let i = 0
    // console.log(allchoices)
    
    allchoices.forEach(  (element) => {
       
        let count = 0
        element.forEach(async(nn)=>{
            setIsLoading(true)
            await data.getAnswers(foodId, nn.question_id, nn._id).then(res=>{
                setIsLoading(false)
                if(res.status == 200){
                    result = res.data.countx
                    
                    let f = {
                        cid : nn._id,
                        count : result
                    }
                  
                    count = count + result
               
                    // setTest(old=>[...old,f])
                    setpls(old=>[...old,f])
                    
                }else{
                    console.log('no')
                }
            })
        })
      
        // setpls(old=>[...old,f])
       
    });
// return result
}
const [realc, setRealc] = useState([])
const [singleAns, setSingleAns] = useState([])

const resetHandler = async ()=>{
    const del = new DeleteHandler()
    if(window.confirm("Are you sure do you want to delete all the reviewed ansewers? you will lose all the review data of this product")== true){
        await del.resetReview(foodId).then(res=>{
            if(res.status ==200){
                alert('reset successfull')
            }{
                alert('reset faild')
            }
        })
    }
    
}

const cons = ()=>{
    setQuetionConstructor([])
    setQuetionConstructor(old=>[...old,(   <h3>Customers Answerd Questions</h3>)])
    setQuetionConstructor(old=>[...old,(   <span><button onClick={resetHandler} className="btn btn-outline-danger">Reset</button> </span>)])
    setQuetionConstructor(old=>[...old,(   <span className="text text-info">Reset will delete all the reviews. to startover </span>)])
     let answer = [];
    let ff = 0
     allQuestions.forEach(r=>{
        let v = 0
        let bb = 0
        u.forEach((xx )=> {
 
 
      
     
            
         // console.log('xx')
         
     let t
     //    console.log(pls[i])
        pls.forEach(g=>{
          if(g.cid == xx._id){
             t = g.count
             
          }
        })
      
        
     
        
                 // ff.forEach(xx=>{
                     let h = [];
                     
                     let thisx = [];
             
                     if(xx.question_id == r._id   ){
 
                  
          
                      
                         // label = "";
                     let  label = (    
                         <div className="  w-100" style={{float: 'left', marginRight:'10px'}}>
                        
                        <h5 className="col" >  {    singleAns[bb] = t   } {  v= v+ t  } </h5>
                 
                         </div>
                                 )
                   
                     
                     }
                  
                 // })
                 // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
             bb = bb +1
         });
         realc[ff] = v
        //  setRealc(old=>[...old,v])
         ff = ff +1
     })
     
    
    let iq = 0
    allQuestions.forEach( (each)=>{ 
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[Review]</span>   </h3>)
 
       
       
 
         setQuetionConstructor(old=>[...old, question])
        
       let  i = 0
       
       let z 


       let t;
       u.forEach((xx )=> {

      
        pls.forEach(g=>{
            if(g.cid == xx._id){
               t = t + g.count
               
            }
          })
                    let h = [];
                    
                    let thisx = [];
            
                    if(xx.question_id == each._id   ){

                        // if( allAnsewers.find( e => xx.choice_id == !allQuestions[i]._id )   ){
                        // console.log(element.question_id)
                        let choices ;
                        let label;
                 
                        // choices = "";
         
                          choices = (  
                     
                                <div className="d-flex justify-content-start " style={{float: 'left', marginLeft:10}}>
                   
                                  </div>
        
                       )
                        // label = "";
                      label = (    
                        <div className="  w-100" style={{float: 'left', marginRight:'10px'}}>
                       
                   
                     <div className="row" >
                     <span class="form-check-label col    text text-success" for="flexRadio Default1">
                      {xx.chooseContent}    
                     </span>
                 
                     <h5 className="col" >  {   Math.floor((singleAns[i] *100 )/(realc[iq]) *100)/100     } %  </h5>
                    
                     </div>
                        </div>
                                )
                                // console.log(label)
                             
                        thisx.push(label)
                        thisx.push(choices)
                        thisx.push((<div style={{clear: 'both'}} ></div>))
                 setQuetionConstructor(old=>[...old, label])
            

                setQuetionConstructor(old=>[...old, choices])
                setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
                        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
                        // return;
                       
                    
                    }
                    if(u.length -1 == i){
                        
                      
                    }
                // })
                // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
            i = i +1
        });
        // setQuetionConstructor(old=>[...old, v])
       
       
       
       
       iq = iq +1
     
    })
    // window.location.reload(true);
    // console.log(realc)
}







 

useEffect(()=>{
    getQuestionsAndChoice()
    ppp()
    getFullRating()
},[foodId])

useEffect(()=>{
    // allAnsewresGetter()
    // reloader()
    getAllchoice()
    // countReview()
    getCount()
},[allQuestions,foodId])


const [ratings, setRatings] = useState([])
const [activeRating,setActiveRating] = useState(false)
const [count, setCount] = useState()
const [lastId, setLastId] = useState(0)


const getCount = async ()=>{
    const data = new GetHandler();
    setIsLoading(true)
    await data.getRating(foodId).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
            // setRatings(old=>[...old,res.data])
            setCount(res.data.count)
            // setRatings(res.data.count)
            // setCount(res.data.length)
            // setLastId(res.data[res.data.length-1]._id)
        }else{
            console.log('error')
        }
    })
}

const getRating = async ()=>{
    const data = new GetHandler();
    setIsLoading(true)

    await data.getRatingLimit(foodId, lastId).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
            setRatings([])
            setRatings(res.data)
            // setLastId(res.data[count-1]._id)
        }else{
            console.log('n')
        }
    })
}
useEffect(()=>{
 
    cons()
},[pls])
 const [searchModeActive, setSearchModeActive]=useState(false)
useEffect(()=>{
    if(activeRating){
        // console.log('ddpp')
        if(!searchModeActive){
            getRating()
        } 
        else{
            rangSearch()
        }

        pageNation()
      
    }
  
},[activeRating, lastId,searchModeActive])

const lastIdManage = (page)=>{
    setLastId(10*page)
}
 
const [pageNationLink, setPagenation] = useState([])
const pageNation = ()=>{
    let pages = Math.round(count/20)
    setPagenation([])
    for(let i = 1; i <= pages; i++){
        let links = (
            <li class="page-item"><a class="page-link" onClick={()=>lastIdManage(i)} href="#">{i}</a></li>
        )

        setPagenation(old=>[...old,links])
    }
}
 
const [fullRating, setFullRating] = useState()
const getFullRating = async ()=>{
    const data = new GetHandler()
    setIsLoading(true)
    await data.getRatingAvg(foodId).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
            setFullRating(res.data.avg)
        }else{
            console.log('no rating')
        }
    })
}
 
const [startDate, setStartDate]=useState()
const [finalDate, setFinalDate] = useState()

const startDateSetter = (val)=>{
        if(val > finalDate){
            alert('Starting Date Must be less than Final Date!')
        }else{
            setStartDate(val)
        }
   
 
}

const finalDateSetter = (val)=>{
    if(val < startDate){
        alert('Final Date must be grater than Starting Date!')
    }else{
        setFinalDate(val)
    }
  
}


const rangSearch = async ()=>{
    setSearchModeActive(true)
    const data = new GetHandler()
    setIsLoading(true)
    await data.getRatingLimitDay(foodId,lastId, startDate, finalDate).then(res=>{
        setIsLoading(false)
        if(res.status != 200){
            alert('error on rang search')
        }else{

            setRatings([])
            setRatings(res.data)
        }
    })
}

const [foodData, setFoodData] = useState()
const getFoodData = async ()=>{
    const data = new GetHandler()
    setIsLoading(true)
    await data.getOneProduct(foodId).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
            setFoodData(res.data)
        }else{
            alert('no food is found')
        }
    })
}
useEffect(()=>{
    getFoodData()
},[])

const restRating = async ()=>{
    const del = new DeleteHandler()
    if(window.confirm("Are you sure do you want to delete all the rating of this product? you will lose all the review data of this product")== true){
        await del.resetRating(foodId).then(res=>{
            if(res.status == 200){
                alert("rating reseted")
            }else{
                alert('error reseting rating')
            }
        })
    }

}
 
    return (
        <div>
            {/* {  console.log(foodData) } */}
            {/* {           console.log(lastId)} */}
        <div  className="category" >
            <div>
                <h5>Product : {foodData ? foodData.name : ''}</h5>
                <div className="hstack" >
                    <span>Discription: <span className="text text-info">{foodData ? foodData.info : ''}</span></span>
                </div>
                <div className="d-flex justify-content-center category" style={{backgroundImage: `url('${foodData? foodData.image :''}')`}} > </div>
            </div>

         
            <button className="btn btn-outline-info" onClick={()=>setActiveRating(!activeRating)} >{activeRating ? (<span className="text text-danger">View Question Review</span>) : (<span className="text text-danger" >View Rattings </span>)} </button>
            <br></br>
            <br></br>
            <br></br>
           <div className="d-flex justify-content-center vstack gap 1" >
           {
                             isLoadidng ?  
                             <div>
                                  <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />
                             </div>

                            : <div></div>
                           }
           {
            !activeRating ? 
             questionConstructor

            // cc() ? <div></div> : <div></div>

             :
                (<div>
                    {
                        <div>
                            <div>
                            <span><button onClick={()=>restRating()}  className="btn btn-outline-danger">Reset</button> </span><br></br>
                            <span className="text text-info">Reset will delete all the reviews. to startover </span>
                            </div>
                          <div className="row">
                          <div className="hstack col  d-flex justify-content-start">
                           <h4 className="m-2" >Rating :  </h4>
                            <span id={'1'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 1|| fullRating == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                            <span id={'2'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 2 || fullRating == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                            <span id={'3'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 3|| fullRating == 3? 'yellow' : 'black'}}  >&#9733;</span>
                            <span id={'4'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 4|| fullRating == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                            <span  id={'5'}style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 5 || fullRating == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                <button className="btn btn-outline-dark">{Math.floor(fullRating*100)/100}</button>
                            </div>


                            <div className="col">
                            <h5>Range Of Date</h5>
                            <div className="row">
                          
                            <input className="form-control col" onChange={(e)=>startDateSetter(e.target.value)} type='date' />
                            <input className="form-control col" onChange={(e)=>finalDateSetter(e.target.value)} type='date' />
                           <div className="col">
                           <button className="btn btn-outline-info " onClick={()=>rangSearch()} ><span className="text text-dark" >Search By Range</span></button>
                           </div>
                            </div>
                        </div>
                          </div>

                            <br></br>
 
                            <br></br>

<table class="table table-info ">
  <thead>
    <tr>
    
      <th scope="col">Row 1</th>
      <th scope="col">Row 2</th>
       
    </tr>
  </thead>
  <tbody> 
 
    <tr>
      {/* <th scope="row">{i+1}</th> */}
      
      <td>
      {
                                    ratings.map((each, i)=>{
                                        if(i%2 != 0 ){
                                            return(
                                                <div className="border p-1">
                                                   
                                                    <div className="row   d-flex justify-content-start ">
                                                     
                                                    <span className="col-1" id={each._id+'1'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 1|| each.rating == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                                                    <span className="col-1" id={each._id+'2'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 2 || each.rating == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                                                    <span className="col-1" id={each._id+'3'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 3|| each.rating == 3? 'yellow' : 'black'}}  >&#9733;</span>
                                                    <span className="col-1"id={each._id+'4'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 4|| each.rating == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                    <span className="col-1" id={each._id+'5'}style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 5 || each.rating == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                        <button className="btn btn-outline-dark col-1">{each.rating}</button>
                                                    <div className="col">
                                                    <span className="d-flex justify-content-center" >{each.time.split('T')[0]}</span>
                                                    </div>
                                                    </div>
                                                     
                                                    <p className="d-flex justify-content-start border p-3 text " style={{color: 'black'}} >{each.feedBack} </p>
    
                            
                                                </div>
                                            )
                                        }

                                      })
                            }                                   

      </td>
      <td>
      {
                                    ratings.map((each, i)=>{
                                        if(i%2 == 0 ){
                                            return(
                                                <div className="border p-1">
                                                   
                                                    <div className="row   d-flex justify-content-start ">
                                                     
                                                    <span className="col-1" id={each._id+'1'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 1|| each.rating == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                                                    <span className="col-1" id={each._id+'2'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 2 || each.rating == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                                                    <span className="col-1" id={each._id+'3'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 3|| each.rating == 3? 'yellow' : 'black'}}  >&#9733;</span>
                                                    <span className="col-1"id={each._id+'4'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 4|| each.rating == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                    <span className="col-1" id={each._id+'5'}style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 5 || each.rating == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                        <button className="btn btn-outline-dark col-1">{each.rating}</button>
                                                    <div className="col">
                                                    <span className="d-flex justify-content-center" >{each.time.split('T')[0]}</span>
                                                    </div>
                                                    </div>
                                                     
                                                    <p className="d-flex justify-content-start border p-3 text " style={{color: 'black'}} >{each.feedBack} </p>
    
                            
                                                </div>
                                            )
                                        }

                                      })
                            }      
      </td>
     
    </tr>
    
  </tbody>
</table>

                        </div>
          
                    }

              <nav className="d-flex justify-content-center" style={{overflow:'scroll', overflowY:'hidden'}} >
              <ul class="pagination">
                  <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <nav className="hstack" style={{overflow:'scroll', overflowY:'hidden'}}>
                    {
                    pageNationLink
                    }
                  </nav>

                  <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                  </li>
              </ul>
              </nav>
                </div>)

            }

           </div>
 
 <br></br>
          
        
        </div>
   
    </div>
    )
}

export default AnaliticFeedBackPage;