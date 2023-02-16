import React, { useEffect, useState } from "react";

import GetHandler from "../../service/apiHandler/getHandler";
import { useParams } from "react-router-dom";
 




const EditFeedBackQuestion = ()=>{
    const {qid} = useParams();

 
////--db side-------//


const [question, setQuestion] = useState(''); 
const [choiceList, setChoiceList] = useState([]);
const [newQuestion, setNewQuestion] = useState('')

const getQuestion = async ()=>{
    const data = new GetHandler();
  await  data.getSingleQ(qid) .then(res=>{
        if(res.status == 200){
            setQuestion(res.data)
            setNewQuestion(res.data)
        }else{
            alert('errr getting questions')
        }
    })
}

const getChoice = async ()=>{
    const data = new GetHandler();
   await data.getChoosenQuestion(question._id) .then(res=>{
     
        if(res.status == 200){
             setChoiceList(res.data)
        }else{
            alert('errr getting questions')
        }
    })
}

useEffect(()=>{
    getQuestion();
    
},[])

useEffect(()=>{
    getChoice();
},[question])
 

    return(
        <div>
        <div className="vstack  ">
            
            <hr/>
            <div className="row d-flex justify-content-center">
            <h3>Add FeedBack Questions</h3>
                <div className="col-6">
                <div className="textField ">
                <label className="textFieldLabel d-flex justify-content-start    ">Question</label>
                     <textarea className="form-control" onChange={(e)=>setNewQuestion(e.target.value)} placeholder={question.questions} value={newQuestion.questions} > </textarea>
                     
                    <label></label>

                 </div>
                <hr></hr>
                <label className="textFieldLabel d-flex justify-content-start    ">Choice</label>

                  {
                    choiceList.map(sel=>{
                        return (
                            <div className="textField ">
                                 <input className="form-control" onChange={(e)=>setQuestion(e.target.value)} placeholder="Type Your Question here..." value={sel.chooseContent} /> 
                                <label></label> 
                            </div>
                        )
                    })
                  }
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditFeedBackQuestion;


