import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetHandler from "../../service/apiHandler/getHandler";
import PostHandler from "../../service/apiHandler/postHandler";
 



const AnaliticFeedBackPage = ()=>{


const [questionConstructor, setQuetionConstructor] = useState([]);
const [allQuestions, setAllQuestions] = useState([])
const [allAnsewers, setAllAnsewers] = useState([])
 

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

const {qid} = useParams();
const getAnswers = async()=>{
    const data = new GetHandler();
    await data.getAnswers(foodId, qid) .then(res=>{
        if(res.status == 200){
            // console.log(res.data)
            setAllAnsewers(res.data)
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
const [d,setd]=useState(false)
let o = []
let hh=[]
const what = async ()=>{
    setQuetionConstructor([])

    const data = new GetHandler();
    let z = []
  
    allQuestions.forEach(async (sel)=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{sel.questions }  <span className="text text-info " style={{marginLeft:10 }} >[optional]</span>   </h3>)
   
        // setAllAnsewers([])
       await data.getChoosenQuestion(sel._id).then( (res)=>{
            if(res.status == 200){
              
               z.push(res.data)
           }else{
               alert('errr getting questions')
           }
        }) 
        // console.log('x')
        setQuetionConstructor(old=>[...old, question])
        //  console.log(z)
        z.forEach(async(res) => {
            let thisx = [];
            res.forEach(async(y)=>{
            
                await data.getAnswers(foodId, sel._id,y._id).then(resx=>{
                   
                    if(resx.status == 200){

                  
                     
                        let choices;
                        let label;
                            if(resx.data.qid == sel._id){
                                // console.log(element.question_id)
                                console.log(resx.data)
                                // choices = "";
                 
                                  choices = (  
                             
                                        <div className="d-flex justify-content-start " style={{float: 'left', marginLeft:10}}>
                           
                                          </div>
                
                               )
                                // label = "";
                              label = (    
                                <div className="d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
                                    <span class="form-check-label    text text-success" for="flexRadio Default1">
                              {resx.data.name}     {resx.data.countx}
                             </span>
                                </div>
                                        )
                                        // console.log(label)
                
                                thisx.push(label)
                                thisx.push(choices)
                                thisx.push((<div style={{clear: 'both'}} ></div>))
                              
                                setQuetionConstructor(old=>[...old, label])
                            
                
                                setQuetionConstructor(old=>[...old, choices])
                                setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
                        
                            }
                    
                        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
                          
                        //  let f = res.data
                        //  setAllAnsewers(old=>[...old,f])
                        //  o.push(res.data)
                     
                    }else{  
                        alert('no questions')
                    }
                }) 
            })
            // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])

            // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
        });
        // setQuetionConstructor(old=>[...old, (<br></br>)])
        // setd(!d)

    })
    //  setd(!d)
//    cons(o)
}
 
useEffect(()=>{
  
cons()
cons()
},[allAnsewers])

const fff = async ()=>{
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
                alert('no questions')
            }
        })
    });

}


const cons = ()=>{
    setQuetionConstructor([])
    // console.log(allQuestions)
    const data = new GetHandler();

     let answer = [];
     
    //  console.log(allQuestions)
    allQuestions.forEach(async (each)=>{
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[optional]</span>   </h3>)
      

        let j = []
       
  
        //  await data.getAnswers(foodId, each._id) .then(res=>{
            
        //      if(res.status == 200){
                 
        //         //  setAllAnsewers(res.data.qid)
        //         // setAllAnsewers(old=>[...old,res.data])
        //         j.push(res.data)
        //         // console.log(res.data)
        //         // j = res.data

        //      }else{
        //          alert('no questions')
        //      }
        //  })
         console.log(allAnsewers)
         setQuetionConstructor(old=>[...old, question])
         let choices;
         let label;
      allAnsewers.forEach(ff => {
        let thisx = [];
                ff.forEach(xx=>{
                   
                    if(xx.qid == each._id){
                        // console.log(element.question_id)
                        
                        // choices = "";
         
                          choices = (  
                     
                                <div className="d-flex justify-content-start " style={{float: 'left', marginLeft:10}}>
                   
                                  </div>
        
                       )
                        // label = "";
                      label = (    
                        <div className="d-flex justify-content-start" style={{float: 'left', marginRight:'10px'}}>
                            <span class="form-check-label    text text-success" for="flexRadio Default1">
                      {xx.name}     {xx.countx}
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
                })

             setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
        });
      
        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])
    })
}





 

useEffect(()=>{
    getQuestionsAndChoice()
    // getAnswers()
    
},[])

useEffect(()=>{
    fff()
    // what()
    // cons()
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
    
    if(xxx != []){
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
    }else{
        alert('empty quetion')
    }

 

}

const sender = async (x)=>{
  await  sendAnswer(x)
}

    return (
        <div>
        <div  className="category" >
            {
                // console.log(allAnsewers)
                // cons(allAnsewers)
                //   console.log(ff)
                // sendAnswer()
                // submit ? sender() : <div></div>
            }
            {
             questionConstructor
            }
 <br></br>
          
        
        </div>
   
    </div>
    )
}

export default AnaliticFeedBackPage;