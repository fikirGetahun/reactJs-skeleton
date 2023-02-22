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
countReview()
// cons()
// reloader()
// allAnsewresGetter()
// allAnsewresGetter()
// window.location.reload(false);

 
},[u])


const allAnsewresGetter = async ()=>{
    const data = new GetHandler();
    allQuestions.forEach(async(each) => {
        await data.getAnswers(foodId, each._id) .then(res=>{
            
            if(res.status == 200){
                
               //  setAllAnsewers(res.data.qid)
               setAllAnsewers(old=>[...old,res.data])
            //    j.push(res.data)
               // console.log(res.data)
               // j = res.data
    
            }else{
                console.log('no questions')
            }
        })
    });

    

}

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

const answerPerChoice = async ()=>{
      const data = new GetHandler();
      let i = 0;
      setAllAnsewers([])
      allQuestions.forEach(q=>{
        allchoices[i].forEach(async(x) => {
            // each.forEach(async(x)=>{
                await data.getAnswers(foodId, q._id, x._id) .then(res=>{
                
                    if(res.status == 200){
                        
                        // setAllAnsewers(res.data)
                       setAllAnsewers(old=>[...old,res.data])
                    //    j.push(res.data)
                       // console.log(res.data)
                       // j = res.data
            
                    }else{
                        console.log('no questions')
                    }
                })
            // })

        });
        i=i+1
      })

}

 
useEffect(()=>{
    // answerPerChoice()
},[allchoices])

const [pls, setpls] = useState([])

const countReview = async ()=>{
    const data = new GetHandler();
    let result;

    let i = 0
    u.forEach(async (element) => {
        await data.getAnswers(foodId, element.question_id, element._id).then(res=>{
            if(res.status == 200){
                result = res.data.countx
                let f = []
                f = {
                    cid : element._id,
                    count : result
                }
                setpls(old=>[...old,f])
                // console.log(f)
            }else{
                console.log('no')
            }
        })
        i = i +1
    });
// return result
}

const cons = ()=>{
    setQuetionConstructor([])
 

     let answer = [];
     
    
    //  console.log(u)   
    allQuestions.forEach( (each)=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[Review]</span>   </h3>)
 
       
  
 
         setQuetionConstructor(old=>[...old, question])
        
       let  i = 0

       u.forEach((xx )=> {
        // console.log('xx')
        let t 
    //    console.log(pls[i])
       pls.forEach(g=>{
         if(g.cid == xx._id){
            t = g.count;
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
},[foodId])

useEffect(()=>{
    // allAnsewresGetter()
    // reloader()
    getAllchoice()
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
 
const cc = ()=>{
    allQuestions.map(q=>{
        return (
            <div>
            <h3 className="foodTitle d-flex justify-content-start" >{q.questions }  <span className="text text-info " style={{marginLeft:10 }} >[Review]</span>   </h3>
            {
                allAnsewers.map(ans=>{
                    if(ans.qid == q._id){
                        <div className="  w-100" style={{float: 'left', marginRight:'10px'}}>
           
       
                        <div className="row" >
                        <span class="form-check-label col    text text-success" for="flexRadio Default1">
                         {ans.name}    
                        </span>
                        <h5 className="col" > {ans.countx}</h5>
                        </div>
                           </div>
                    }
                })
            }
            </div>
        )

})
}

 
    return (
        <div>
            {/* { console.log(allchoices)} */}
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
              ratings.map(each=>{
                return(
                    <div>
                        <h6>{each.rating} </h6>
                        <p>{each.feedBack} </p>

                    </div>
                )
              })
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