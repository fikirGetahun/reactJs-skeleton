import React, { useEffect, useState } from "react";

import GetHandler from "../../service/apiHandler/getHandler";
import { useParams } from "react-router-dom";
import PutHandler from "../../service/apiHandler/putHandler";
import PostHandler from "../../service/apiHandler/postHandler";
import DeleteHandler from "../../service/apiHandler/deleteHandler";
 




const EditFeedBackQuestion = ()=>{
    const {qid} = useParams();

    const [isLoadidng, setIsLoading]=useState()

////--db side-------//

/////--------------------------------------------------------------------------
const [question, setQuestion] = useState(''); 
const [choiceList, setChoiceList] = useState([]);
const [newQuestion, setNewQuestion] = useState('')

const getQuestion = async ()=>{
    const data = new GetHandler();
    setIsLoading(true)

  await  data.getSingleQ(qid) .then(res=>{
    setIsLoading(false)
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
    setIsLoading(true)

   await data.getChoosenQuestion(question?question._id:'') .then(res=>{
    setIsLoading(false)
        if(res.status == 200){
            

             setChoiceList(res.data)
        }else{
            
            alert('errr getting questions')
        }
    })
}
/////--------------------------------------------------------------------------
useEffect(()=>{
    getQuestion();
    
},[])

useEffect(()=>{
    getChoice();
},[question])
 
/////--------------------------------------------------------------------------
const updateQuestion = async ()=>{
    setIsLoading(true)
    const data = new PutHandler();
    let body ={
        question: newQuestion
    }
    data.updateQuestion(body, qid).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
             
            alert('Question Updated!!')
        }else{
             
            alert('error')
        }
    })
}


const updateChoice = async (content, id)=>{
    const data = new PutHandler();
    let body ={
        content: content
    }
    setIsLoading(true)
    data.updateQuestionChoice(body, id).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
             
            alert('Choice Updated!!')
        }else{
            
            alert('error')
        }
    })
}

/////--------------------------------------------------------------------------
const [editActive, setEditActive] = useState(false)
const [activeVal, setActiveVal] = useState('')
const [singleEditForm, setSingleEditForm] = useState([])
const [tobeEditedId, setTobeeditedid] = useState()

const handleEdit = (val, id)=>{
    setEditActive(true)
    setTobeeditedid(id)
    setSingleEditForm([])
    let fild = (
        <div className="textField ">
        <label className="textFieldLabel d-flex justify-content-start    ">Edit Choice</label>
             <input className="form-control" onChange={(e)=>setActiveVal(e.target.value)} placeholder={val}  />  
     
            <label></label>
      
         </div>
    )
    setSingleEditForm(old=>[...old,fild])
}
/////--------------------------------------------------------------------------

const [newChoice, setNewChoice] = useState();
const [singleFormNewChoice, setSingleFormNewChoice] = useState( )
const [activeFormChoice , setActiveFormChoice] = useState(false)

const handleNewChoice = ()=>{
     setActiveFormChoice(true)

    let fild = (
        <div className="textField ">
        <label className="textFieldLabel d-flex justify-content-start    ">Add Choice</label>
             <input className="form-control" onChange={(e)=>setNewChoice(e.target.value)}    />  
     
            <label></label>
      
         </div>
    )
    setSingleFormNewChoice(fild)
}


const addNewChoice = async ()=>{
    let sendQ = new PostHandler()
    setIsLoading(true)
    let body = {
        chooseContent:newChoice , question_id: qid
    }
    await sendQ.addQuestionChoose(body).then(res=>{
        setIsLoading(false)
        if(res.status == 200){
             
            alert('Question Added!!')
            getChoice();

        }else{
            
            alert("error inserting choice")
        }
    })
}




const deleteChoices = async (id)=>{
    const data = new DeleteHandler()
    setIsLoading(true)
    if (window.confirm("Are you sure you want to delete this?  ") == true) {
        await data.deleteChoices(id).then(res=>{
            setIsLoading(false)
            if(res.status == 200){
               
                window.alert("Deleted!")
                window.location.reload()
            }else{
              
                alert('error not deleted!')
            }
        })
    } else {
        setIsLoading(false)
    //  alert('error not deleted!')
    }

}

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
                    <button type="button" onClick={()=>updateQuestion()}  class="btn btn-outline-info">Edit</button>
                 </div>
                <hr></hr>

                {
                    activeFormChoice ? singleFormNewChoice : <div></div>
                }
    {
                    activeFormChoice ?(<div>
                         <button type="button" onClick={()=>addNewChoice()}  class="btn btn-outline-success">Submit New Choice</button> <button className="btn btn-outline-danger" onClick={()=>setActiveFormChoice(false)} > Cancel</button>
                    </div>): <div></div>
                }



                <label className="textFieldLabel d-flex justify-content-start    ">Choice</label>
                 {
                    editActive ?  singleEditForm : <div></div>
                }
                {/* i copied the button b/c it seams it dosent understand when its pushed in to the array */}
                {
                    editActive ?       (
                        <div>
                            <button type="button" onClick={()=>updateChoice(activeVal,tobeEditedId)}  class="btn btn-outline-success">Save Edited Choice</button> <button className="btn btn-outline-danger" onClick={()=>setEditActive(false)}> Cancel</button>
                        </div>
                    ) : <div></div>
                }
                           {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                           }
                  {
                    choiceList.map(sel=>{
                        return (
                            <div className="row ">
                              
                                <span className="text text-dark container col">{sel.chooseContent}</span>
                                 <div className="col">
                                 <button type="button" onClick={()=>handleEdit(sel.chooseContent, sel._id)}  class="btn btn-outline-info">Edit</button>
                                

                                |<button type="button" onClick={()=>deleteChoices(sel._id)} class="btn btn-outline-danger">Delete</button>
                                 </div>

                            </div>
                        )
                    })
                  }
                    |<button type="button" onClick={()=>handleNewChoice()} class="btn btn-outline-success">Add New Choice</button>
              
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditFeedBackQuestion;


