import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetHandler from "../service/apiHandler/getHandler";
import PostHandler from "../service/apiHandler/postHandler";




const FeedBackPage = ()=>{


const [questionConstructor, setQuetionConstructor] = useState([]);
const [allQuestions, setAllQuestions] = useState([])
const [allChoices, setAllChoices] = useState([])
const [selectedChoice, setSelectedChoice] = useState(null)
const [selectedQuestion, setSelectedQuestion] = useState(null);

const {foodId} = useParams();
const sendAnswer = async(ans)=>{
    const data = new PostHandler();
  
    ans.forEach(async(sel)=>{
        let body = {
            food_id: foodId,
            question_id: sel.qid,
            choose_id:sel.cid
        }
        await data.addAnswerFeedback(body).then(res=>{
            if(res.status !=200){
                alert('couldnot submit feedback!')
            }else{
                alert('submited')
            }
        })
    })
   
}
 

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

let ff=[]
const pls = (c, q)=>{

    ff[q] = {
        qid : q,
        cid : c
    }
    setXxx([])
    setXxx(ff)
    // console.log(ff)
}

const cons = ()=>{
    setQuetionConstructor([])
    // console.log(allQuestions)

    allQuestions.forEach(each=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions } </h3>)
        setQuetionConstructor(old=>[...old, question])
        let choices;
        let label;
        let hug = (<div class="form-check">
                {choices}
                {label}
            </div>)
        allChoices.forEach(element => {
            if(element.question_id == each._id){
          

                  choices = (  
             
                        <div className="d-flex justify-content-start " style={{float: 'left'}}>
                                        <input class="form-check-input " onChange={()=>pls(element._id, each._id)} type="radio" name={element.chooseContent} id="flexRadioDefault1" />  
                        </div>

               )
              label = (    
                <div className="d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
                    <span class="form-check-label    text text-success" for="flexRadio Default1">
              {element.chooseContent} 
             </span>
                </div>
                        )

              
                setQuetionConstructor(old=>[...old, label])
            

                setQuetionConstructor(old=>[...old, choices])
                setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
            }
        });
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




    return (
        <div>
        <div  className="category" >
       
            {
             questionConstructor
            }
<h3 className="foodTitle d-flex justify-content-center" >Give Us Feedback </h3>
<textarea className="form-control" >

</textarea>
 
<div>
    <button className="btn btn-outline-warning">Send Feedback</button>
</div>

          
        
        </div>
   
    </div>
    )
}

export default FeedBackPage;