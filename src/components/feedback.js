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
const sendAnswer = async(selChoice, selQ)=>{
    const data = new PostHandler();
    let body = {
        food_id: foodId,
        question_id: selQ,
        choose_id:selChoice
    }
    await data.addAnswerFeedback(body).then(res=>{
        if(res.status !=200){
            alert('couldnot submit feedback!')
        }else{
            alert('submited')
        }
    })
}
let x =[]
const manageSelectedQuestion = (selectedChoice, selectedQustion)=>{
    
    let xx = {
        q:selectedQustion,
        c:selectedChoice
    }
 
    x.forEach(s=>{
        if(s.q ==selectedQustion ){
            x.push(xx)
        }
    })
    // setSelectedChoice(selectedChoice);
    // setSelectedQuestion(selectedQustion);
    sendAnswer(selectedChoice,selectedQustion)
 }
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


const cons = ()=>{
    setQuetionConstructor([])
    // console.log(allQuestions)
    allQuestions.forEach(each=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions } </h3>)
        setQuetionConstructor(old=>[...old, question])
        allChoices.forEach(element => {
            if(element.question_id == each._id){
                let choices = ( <div class="form-check">
                <input class="form-check-input" onChange={()=>manageSelectedQuestion(element._id, each._id)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label d-flex justify-content-start text text-success" for="flexRadioDefault1">
                 {element.chooseContent} 
                </label>
              </div>)

                setQuetionConstructor(old=>[...old, choices])
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
          
        
        </div>
   
    </div>
    )
}

export default FeedBackPage;