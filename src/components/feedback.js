import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetHandler from "../service/apiHandler/getHandler";
import PostHandler from "../service/apiHandler/postHandler";




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
        ff.forEach(element => {
                if(element.status == true && element.qid == q){
                    // element.status = false
                    ff.splice(i,1)
                }
                i = i+1;
        });
  
        ff.push(current);
        // console.log(ff)
        setXxx([])
        setXxx(old=>[...old,ff])
//     ff[q] = {
//         qid : q,
//         cid : c
//     }

//    setter(ff)
    // console.log(xxx)
    // alert(xxx)
}

const cons = ()=>{
    setQuetionConstructor([])
    // console.log(allQuestions)

    allQuestions.forEach(each=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }   {each._id}  </h3>)
        setQuetionConstructor(old=>[...old, question])

     
         let thisx = [];
        allChoices.forEach(element => {
        let choices;
        let label;
            if(element.question_id == each._id){
                // console.log(element.question_id)
                
                // choices = "";
 
                  choices = (  
             
                        <div className="d-flex justify-content-start " style={{float: 'left'}}>
            <input class="form-check-input " onChange={()=>pls(element._id, each._id)} type="radio" name={each._id}   />  
                    
                          </div>

               )
                // label = "";
              label = (    
                <div className="d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
                    <span class="form-check-label    text text-success" for="flexRadio Default1">
              {element.chooseContent}     {element._id}
             </span>
                </div>
                        )
                        // console.log(label)

                thisx.push(label)
                thisx.push(choices)
                thisx.push((<div style={{clear: 'both'}} ></div>))
              
                // setQuetionConstructor(old=>[...old, label])
            

                // setQuetionConstructor(old=>[...old, choices])
                // setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
            }
        });
        setQuetionConstructor(old=>[...old, (<div className="form-check" >{thisx}</div>)])
    })
}





 

useEffect(()=>{
    getQuestionsAndChoice()
    getChooen()
    
},[])

useEffect(()=>{
    cons()
},[allQuestions])

//// ------------- post answer and rating ---------//
const [comment, setComment]= useState('')
const [rating, setRating] = useState();
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
    await data.addRating(body).then(res=>{
        if(res.status == 200){
            alert('good')
        }else{
            alert('bad')
        }
    })
   
 
    sendAnswer(aa)
}

const sendAnswer = async( zz)=>{
   
    const data = new PostHandler();
    
    
    xxx.forEach(async(sel)=>{
       let i = 0
       console.log(sel)
        sel.forEach(async(sel)=>{
            let body = {
                food_id: foodId,
                question_id: sel.qid,
                choose_id:sel.cid
            }
            console.log(sel)
         
            // console.log('w')
            // console.log( sel)
          
            if(sel.status == true){
             
                await data.addAnswerFeedback(body).then(res=>{
             
                    if(res.status !=200){
                        alert('couldnot submit feedback!')
                    }else{
                        alert('submited')
                    }
                })
               
            }
            i = i+1
        })


    })
 

}

const sender = async (x)=>{
  await  sendAnswer(x)
}

    return (
        <div>
        <div  className="category" >
            {
                //   console.log(ff)
                // sendAnswer()
                // submit ? sender() : <div></div>
            }
            {
             questionConstructor
            }
<h3 className="foodTitle d-flex justify-content-center" >Give Us Feedback </h3>
<input className="form-control" onChange={(e)=>setRating(e.target.value)} type="text" />
<textarea className="form-control" onChange={(e)=>setComment(e.target.value)} >

</textarea>
 
<div>
    <button onClick={()=>handleSubmit(xxx)} className="btn btn-outline-warning">Send Feedback</button>
</div>

          
        
        </div>
   
    </div>
    )
}

export default FeedBackPage;