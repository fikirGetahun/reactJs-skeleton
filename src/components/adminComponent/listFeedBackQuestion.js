import React, { useEffect, useState } from "react";

import { Textarea, TextField } from "@mui/joy";
import GetHandler from "../../service/apiHandler/getHandler";
import { Link } from "react-router-dom";
import DeleteHandler from "../../service/apiHandler/deleteHandler";
 




const ListFeedBackQuestion = ()=>{


// const [chooice, setChooice] = useState([]);
// const [chooiceVal, setChooiceVal] = useState([]) 
// const [addChooiceActive, setAddChooiceActive] = useState(true)
// const [currentChooice, setCurrentChoice] = useState('')

// const [final, setFinal] = useState([])

// const chooiceValHandler = (value)=>{
//     setChooiceVal(old=>[...old, value])

//     let final = (<div class="form-check">
//     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//     <label class="form-check-label d-flex justify-content-start text text-success" for="flexRadioDefault1">
//      {value}
//     </label>
//   </div>)
//     setFinal(old=>[...old, final])
//     setChooice([])
//     setAddChooiceActive(true)
// }

// const chooiceArrManage = ()=>{
//     if(addChooiceActive){
//         let feild = (
//         <div className="textField ">
//         <label className="textFieldLabel d-flex justify-content-center    ">Question Choice</label>
//             <input className="form-control" type="text"    id="standard-basic" placeholder="Type Your Question here..."  onChange={(e)=>setCurrentChoice(e.target.value)}     name="catName" />
//             <label></label>
//         </div>)
     
//         setChooice(old=>([...old, feild]))  
//         setAddChooiceActive(!addChooiceActive)
//     }

// }

// ////----------------------////////-----------------------///
// // db connection side

// const [question , setQuestion] = useState('');
// const [result, setResult] = useState('');

// const sendRequest = async ()=>{
//     let sendQ = new PostHandler();
//     let body = {
//         question : question,
//         active : true
//     }
//     let insertedQ;
//     await sendQ.ListFeedBackQuestion(body).then(res=>{
        
//         if(res.status == 200){
//             insertedQ = res.data// get the inserted response to get the question id to input it in chooice
//             // console.log(insertedQ)
//         }else{
//             alert('error inserting question')
//         }
//     })
//      chooiceVal.forEach(async (element) => {
//         body = {
//             chooseContent:element , question_id: insertedQ._id
//         }
//         await sendQ.addQuestionChoose(body).then(res=>{
//             if(res.status == 200){
//                 setResult((<span className="text text-success" >Question Added!!</span>))
//             }else{
//                 alert("error inserting choice")
//             }
//         })
//     });
// }

////--db side-------//

const [questionList, setQuestionList] = useState([]);
const [isLoadidng, setIsLoading]=useState()

const getQuestion = async ()=>{
    const data = new GetHandler();
    setIsLoading(true)

    data.getQuestions().then(res=>{
        setIsLoading(false)

        if(res.status == 200){
            setQuestionList(res.data)
        }else{
            // alert('errr getting questions')
        }
    })
}

useEffect(()=>{
    getQuestion()
},[])

 

const deleteQuestion = async (id)=>{
    const data = new DeleteHandler()
    setIsLoading(true)

    if (window.confirm("Are you sure you want to delete this? you will delete all related choices to this question too") == true) {
        await data.deleteQustions(id).then(res=>{
            setIsLoading(false)

            if(res.status == 200){
                window.alert("Deleted!")
                getQuestion()
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
            <h3>Manage FeedBack Questions</h3>
             
                <div className="col-6">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Question</th>
      <th scope="col">| Action |</th>
     </tr>
  </thead>
  <tbody>
  {
                             isLoadidng ?  
                               <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />

                            : <div></div>
                        }
     {
        questionList.map((sel,i)=>{
            return(
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{sel.questions}</td>
                    <td>
                        <Link to={"/admin/editFeedBackQuestion/"+sel._id} >
                        <button type="button"  class="btn btn-outline-info">Edit</button>

                        </Link>
                        |<button type="button" onClick={()=>deleteQuestion(sel._id)} class="btn btn-outline-danger">Delete</button>
                    </td>
               </tr>
            )
        })
     }
 
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ListFeedBackQuestion;


