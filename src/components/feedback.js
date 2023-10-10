import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetHandler from "../service/apiHandler/getHandler";
import PostHandler from "../service/apiHandler/postHandler";
import  "../css/allCss.css";



const FeedBackPage = ()=>{


const [questionConstructor, setQuetionConstructor] = useState([]);
const [allQuestions, setAllQuestions] = useState([])
const [allChoices, setAllChoices] = useState([])
 

const {foodId} = useParams();


const [xxx, setXxx]= useState([])

 
//  useEffect(()=>{
//     sendAnswer()
//  },[selectedChoice])

const getQuestionsAndChoice = async ()=>{
    const data = new GetHandler();
    await data.getQuestions().then(res=>{
        if(res.status == 200){
      
            setAllQuestions(res.data)
        }else{
            alert('no questions')
        }
    })
}


const getChooen = async()=>{
    const data = new GetHandler();
    await data.getChoosen().then(res=>{
        if(res.status == 200){
            setAllChoices(res.data)
        }else{
            alert('no questions')
        }
    })
}
let ff=[];
 


const pls =   (c, q)=>{


   let current = {
                 qid : q,
                cid : c,
                status: true
             }
        let i = 0
            xxx.forEach(ff=>{
                ff.forEach(element => {
                    if(element.status == true && element.qid == q){
                        element.status = false

                        // alert('in')
                        // ff.splice(i,1)
                    
                   

                    }
                    i = i+1;
            });
            })
  
        ff.push(current);
        // console.log(ff)
        // setXxx([])
        setXxx(old=>[...old,ff])
//     ff[q] = {
//         qid : q,
//         cid : c
//     }

//    setter(ff)
    // console.log(xxx)
    // alert(xxx)
}
const [allq, setAllq] = useState([])
const getQuestionWithChoice = async ()=>{
    const data = new GetHandler()
     await data.getQuestionWithChoice().then(res=>{
        if(res.status == 200){
            setAllq(res.data)
        }else{
            alert('no q')
        }
     })

}


// const cons = ()=>{
//     setQuetionConstructor([])
//     // console.log(allQuestions)

//     allQuestions.forEach(each=>{
//         let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[optional]</span>   </h3>)
//         setQuetionConstructor(old=>[...old, question])

     
//          let thisx = [];
//         allChoices.forEach(element => {
//         let choices;
//         let label;
//             if(element.question_id == each._id){
//                 // console.log(element.question_id)
                
//                 // choices = "";
 
//                   choices = (  
             
//                         <div className="d-flex justify-content-start " style={{float: 'left', marginLeft:10}}>
//             <input class="form-check-input " onChange={()=>pls(element._id, each._id)} type="radio" name={each._id}   />  
                    
//                           </div>

//                )
//                 // label = "";
//               label = (    
//                 <div className="d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
//                     <span class="form-check-label    text text-success" for="flexRadio Default1">
//               {element.chooseContent}     
//              </span>
//                 </div>
//                         )
//                         // console.log(label)

//                 thisx.push(label)
//                 thisx.push(choices)
//                 thisx.push((<div style={{clear: 'both'}} ></div>))
              
//                 setQuetionConstructor(old=>[...old, label])
            

//                 setQuetionConstructor(old=>[...old, choices])
//                 setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
//             }
//         });
//         // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
//     })
// }





 

useEffect(()=>{
    getQuestionWithChoice()
    // getQuestionsAndChoice()
    getChooen()
    
},[])

 

//// ------------- post answer and rating ---------//
const [comment, setComment]= useState('')
const [rating, setRating] = useState('');
const [submit, setSubmit] = useState(false)

// useEffect(()=>{
//      sendAnswer()
// },[submit])

const handleSubmit = async (aa)=>{
  
    setSubmit(true)
    const data = new PostHandler()
    let body={
        food_id: foodId,
        rating: rating,
        feedBack: comment
    }
    if(rating == ''){
        alert('please select rating before submiting!')
        return
    }
    await data.addRating(body).then(res=>{
        if(res.status == 200){
            alert('submited')
        }else{
            console.log('bad')
        }
    })
   
 
    sendAnswer(aa)
  
}

const sendAnswer = async( zz)=>{
   
    const data = new PostHandler();
    console.log('xxx')
    console.log(xxx)
    if(xxx != []){
        xxx.forEach(async(sel)=>{
            let i = 0
            let stat = false
             sel.forEach(async(sel)=>{
                 let body = {
                     food_id: foodId,
                     question_id: sel.qid,
                     choose_id:sel.cid
                 }
                //  console.log(sel)
              
                 // console.log('w')
                 // console.log( sel)
               
                 if(sel.status == true){
                  
                     await data.addAnswerFeedback(body).then(res=>{
                        
                         if(res.status !=200){
                            console.log('couldnot submit feedback!')
                         }else{
                             stat = true
                         }
                     })
                    
                 }
                 i = i+1
             })
             if(stat == true){
                alert('submited')
             }
     
         })
    }else{
        alert('empty quetion')
    }

 

}

const sender = async (x)=>{
  await  sendAnswer(x)
}

 const ratingHandler = (id)=>{
    setRating(id)
    for(let i=1;i<=id;i++){
        document.getElementById('r'+i).style.color='yellow'

    }
    for(let i=id+1;i<=10;i++){
        document.getElementById('r'+i).style.color='black'
    }
  
}

    return (
        <div className="d-flex justify-content-center" >
        <div  className="category " >
            {
                //   console.log(ff)
                // sendAnswer()
                // submit ? sender() : <div></div>
            }
            {
            //  questionConstructor
                allq ?                 allq.map(each=>{
        
                    return(
                      <div>
                        <h5 className="d-flex justify-content-start" >{each.questions}</h5>
                        {
                            each.result.map(element=>{
                                return(
                                    <div className="   ">
                                        <div className="row ">
                                        <div className="col-8 d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
                        <span class="form-check-label    text text-info" for="flexRadio Default1">
          {element.chooseContent}     
                        </span>
                        </div>
                        <div className="col" style={{  marginLeft:10}}>
                        <input class="form-check-input" style={{fontSize:"20px"}} onChange={()=>pls(element._id, each._id)} type="radio" name={each._id}   />  
                
                      </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                      </div>  
                    )
            }) :
            <span>pls wait</span>

            }
<h3 className="foodTitle d-flex justify-content-center" >Give Us Feedback </h3>
<div className="row  " >
<h6 className="col">Rate this Food:</h6>
{/* <input className="form-control" onChange={(e)=>setRating(e.target.value)} type="text" /> */}
 
<div className="hstack   d-flex justify-content-center">
  <span id="r1" style={{fontSize:'30px', cursor: 'pointer'}} onClick={()=>ratingHandler(1)  } >&#9733;</span>
  <span id="r2" style={{fontSize:'30px', cursor: 'pointer'}} onClick={()=>ratingHandler(2)} >&#9733;</span>
  <span id="r3" style={{fontSize:'30px', cursor: 'pointer'}} onClick={()=>ratingHandler(3)}>&#9733;</span>
  <span id="r4" style={{fontSize:'30px', cursor: 'pointer'}} onClick={()=>ratingHandler(4)}>&#9733;</span>
    <span  id="r5"style={{fontSize:'30px', cursor: 'pointer'}} onClick={()=>ratingHandler(5)}>&#9733;</span>
</div> 
</div>
{/* <script src="https://kit.fontawesome.com/5ea815c1d0.js"></script>
<div class="wraper">
  <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="gitlabBilal" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"></script>
</div> */}
<textarea className="form-control" onChange={(e)=>setComment(e.target.value)} >

</textarea>
 
<div>
    <button onClick={()=>handleSubmit(xxx)} className="btn btn-outline-warning">Send Feedback</button>
</div>
<br></br>
<br></br>
<br></br>
<br></br>      
        
        </div>
   
    </div>
    )
}

export default FeedBackPage;