import React, { useState } from "react";

import { Textarea, TextField } from "@mui/joy";
import PostHandler from "../../service/apiHandler/postHandler";





const AddFeedBackQuestion = ()=>{


const [chooice, setChooice] = useState([]);
const [chooiceVal, setChooiceVal] = useState([]) 
const [addChooiceActive, setAddChooiceActive] = useState(true)
const [currentChooice, setCurrentChoice] = useState('')

const [final, setFinal] = useState([])

const chooiceValHandler = (value)=>{
    setChooiceVal(old=>[...old, value])

    let final = (<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label class="form-check-label d-flex justify-content-start text text-success" for="flexRadioDefault1">
     {value}
    </label>
  </div>)
    setFinal(old=>[...old, final])
    setChooice([])
    setAddChooiceActive(true)
}

const chooiceArrManage = ()=>{
    if(addChooiceActive){
        let feild = (
        <div className="textField ">
        <label className="textFieldLabel d-flex justify-content-center    ">Question Choice</label>
            <input className="form-control" type="text"    id="standard-basic" placeholder="Type Your Question here..."  onChange={(e)=>setCurrentChoice(e.target.value)}     name="catName" />
            <label></label>
        </div>)
     
        setChooice(old=>([...old, feild]))  
        setAddChooiceActive(!addChooiceActive)
    }

}

////----------------------////////-----------------------///
// db connection side

const [question , setQuestion] = useState('');
const [result, setResult] = useState('');

const [isLoadidng, setIsLoading]=useState()

const sendRequest = async ()=>{
    let sendQ = new PostHandler();
    let body = {
        question : question,
        active : true
    }
    let insertedQ;
    setIsLoading(true)
    await sendQ.AddFeedBackQuestion(body).then(res=>{
        
        if(res.status == 200){
            insertedQ = res.data// get the inserted response to get the question id to input it in chooice
            // console.log(insertedQ)
            setIsLoading(false)
        }else{
            setIsLoading(false)
            alert('error inserting question')
        }
    })
     chooiceVal.forEach(async (element) => {
        body = {
            chooseContent:element , question_id: insertedQ._id
        }
        await sendQ.addQuestionChoose(body).then(res=>{
            if(res.status == 200){
                setResult((<span className="text text-success" >Question Added!!</span>))
            }else{
                alert("error inserting choice")
            }
        })
    });
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
                     <textarea className="form-control" onChange={(e)=>setQuestion(e.target.value)} placeholder="Type Your Question here..." ></textarea>
                    <label></label>
                </div>
                <button className="btn btn-outline-info d-flex justify-content-start" onClick={chooiceArrManage} >+ Add Choice</button> <br></br>
                <div className="container" >{
                    final
                }</div>
                {
                      chooice
                }
            {!addChooiceActive ? <button className="btn btn-outline-success"  onClick={()=>chooiceValHandler(currentChooice)} >Add Choice</button> : <div></div> }
<br></br>
              

                {/* <div className="textField p-2">
                <label className="textFieldLabel d-flex justify-content-start   pb-1 ">Category Order</label> 
                    <TextField className="" type="text"    id="standard-basic" placeholder="Order of the Display"   onChange={(e)=>setCatOrder(e.target.value)} name="catOrder" />
                    <label></label>
                </div> */}
                    <button className="btn btn-outline-dark" onClick={()=>sendRequest()}> <span className="text text-primary">Submit Feedback Question</span> </button><br></br>
                    {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                           }

                    {
                        result
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddFeedBackQuestion;


