import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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


 

const [allchoices, setAllchoices] = useState([])

const getAllchoice = async ()=>{
    const data = new GetHandler();
    setAllchoices([])
    allQuestions.forEach(async(q)=>{
        await data.getChoosenQuestion(q._id).then(res=>{
            
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
   
   
        await data.getChoosen().then(res=>{
            
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
          
            await data.getAnswers(foodId, nn.question_id, nn._id).then(res=>{
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

const cons = ()=>{
    setQuetionConstructor([])
 

     let answer = [];
     
    
     
    allQuestions.forEach( (each)=>{ 
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[Review]</span>   </h3>)
 
       
       
 
         setQuetionConstructor(old=>[...old, question])
        
       let  i = 0
       let v = 0
       let z 
       u.forEach(yy=>{
        pls.forEach(g=>{
            if(g.cid == yy._id){
               z = g.count;
               v = v + z
               console.log(v)
            }
          })
       })

       u.forEach((xx )=> {
        // console.log('xx')
    let t
    //    console.log(pls[i])
       pls.forEach(g=>{
         if(g.cid == xx._id){
            t = g.count;
            // count = count + t

            // t= (t*100)/(v)
            
         }
       })
                // ff.forEach(xx=>{
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
                   
                     <h5 className="col" >  {t} </h5>
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
                // })
                // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
            i = i +1
        });
    //   allAnsewers.forEach(xx => {
    //     // console.log('xx')
       
    //             // ff.forEach(xx=>{
    //                 let h = [];
                    
    //                 let thisx = [];
            
    //                 if(xx.qid == each._id   ){

    //                     // if( allAnsewers.find( e => xx.choice_id == !allQuestions[i]._id )   ){
    //                     // console.log(element.question_id)
    //                     let choices ;
    //                     let label;
                 
    //                     // choices = "";
         
    //                       choices = (  
                     
    //                             <div className="d-flex justify-content-start " style={{float: 'left', marginLeft:10}}>
                   
    //                               </div>
        
    //                    )
    //                     // label = "";
    //                   label = (    
    //                     <div className="  w-100" style={{float: 'left', marginRight:'10px'}}>
                       
                   
    //                  <div className="row" >
    //                  <span class="form-check-label col    text text-success" for="flexRadio Default1">
    //                   {xx.name}    
    //                  </span>
    //                  <h5 className="col" > {xx.countx}</h5>
    //                  </div>
    //                     </div>
    //                             )
    //                             // console.log(label)
                             
    //                     thisx.push(label)
    //                     thisx.push(choices)
    //                     thisx.push((<div style={{clear: 'both'}} ></div>))
    //              setQuetionConstructor(old=>[...old, label])
            

    //             setQuetionConstructor(old=>[...old, choices])
    //             setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
    //                     // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
    //                     // return;
                       
                    
    //                 }
    //             // })
    //             // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
    //         i = i +1
    //     });
        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
//  
    })
    // window.location.reload(true);
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
const [lastId, setLastId] = useState(10)


const getCount = async ()=>{
    const data = new GetHandler();
    await data.getRating(foodId).then(res=>{
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


    await data.getRatingLimit(foodId, lastId).then(res=>{
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
 
useEffect(()=>{
    if(activeRating){
        // console.log('ddpp')
        pageNation()
        getRating()
    }
  
},[activeRating, lastId])

const lastIdManage = (page)=>{
    setLastId(10*page)
}
 
const [pageNationLink, setPagenation] = useState([])
const pageNation = ()=>{
    let pages = Math.round(count/10)
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
    await data.getRatingAvg(foodId).then(res=>{
        if(res.status == 200){
            setFullRating(res.data.avg)
        }else{
            console.log('no rating')
        }
    })
}
 

 
    return (
        <div>
            {  console.log(realc) }
            {/* {           console.log(lastId)} */}
        <div  className="category" >
            <h3>All Reviews of Question</h3>
            <button className="btn btn-outline-info" onClick={()=>setActiveRating(!activeRating)} >{activeRating ? (<span>View Question Review</span>) : (<span>View Rattings </span>)} </button>
           <div className="d-flex justify-content-center vstack gap 1" >
           {
            !activeRating ? 
             questionConstructor

            // cc() ? <div></div> : <div></div>

             :
                (<div>
                    {
                        <div>
                          
                           <div className="hstack   d-flex justify-content-start">
                           <h4 className="m-2" >Rating :  </h4>
                            <span id={'1'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 1|| fullRating == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                            <span id={'2'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 2 || fullRating == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                            <span id={'3'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 3|| fullRating == 3? 'yellow' : 'black'}}  >&#9733;</span>
                            <span id={'4'} style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 4|| fullRating == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                            <span  id={'5'}style={{fontSize:'4vw', cursor: 'pointer', color:fullRating > 5 || fullRating == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                <button className="btn btn-outline-dark">{Math.floor(fullRating*100)/100}</button>
                            </div>
                            <br></br>
                            {
                                    ratings.map(each=>{
                                        return(
                                            <div>
                                               
                                                <div className="hstack   d-flex justify-content-start">
                                                <h6 className="m-2" >Rating:</h6>
                                                <span id={each._id+'1'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 1|| each.rating == 1 ? 'yellow' : 'black' }}   >&#9733;</span>
                                                <span id={each._id+'2'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 2 || each.rating == 2 ? 'yellow' : 'black'}}   >&#9733;</span>
                                                <span id={each._id+'3'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 3|| each.rating == 3? 'yellow' : 'black'}}  >&#9733;</span>
                                                <span id={each._id+'4'} style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 4|| each.rating == 4 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                <span  id={each._id+'5'}style={{fontSize:'2vw', cursor: 'pointer', color:each.rating > 5 || each.rating == 5 ? 'yellow' : 'black'}}  >&#9733;</span>
                                                    <button className="btn btn-outline-dark">{each.rating}</button>
                                                </div>
                                                 
                                                <p className="d-flex justify-content-start border p-3 text text-dark" >{each.feedBack} </p>
                        
                                            </div>
                                        )
                                      })
                            }
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