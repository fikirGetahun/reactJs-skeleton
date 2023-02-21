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
            alert('no questions')
        }
    })
}

const {qid} = useParams();
 
 
 
useEffect(()=>{
  
cons()
cons()
 
},[allAnsewers])

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
        let question = (<h3 className="foodTitle d-flex justify-content-start" >{each.questions }  <span className="text text-info " style={{marginLeft:10 }} >[Review]</span>   </h3>)
 
       
  
 
        //  console.log(allAnsewers)
         setQuetionConstructor(old=>[...old, question])

      allAnsewers[0].forEach(xx => {
      
                // ff.forEach(xx=>{
                    // let thisx = [];
                    if(xx.qid == each._id){
                        // console.log(element.question_id)
                        let choices;
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
                      {xx.name}    
                     </span>
                     <h5 className="col" > {xx.countx}</h5>
                     </div>
                        </div>
                                )
                                // console.log(label)
        
                        // thisx.push(label)
                        // thisx.push(choices)
                        // thisx.push((<div style={{clear: 'both'}} ></div>))
                 setQuetionConstructor(old=>[...old, label])
            

                setQuetionConstructor(old=>[...old, choices])
                setQuetionConstructor(old=>[...old, (<div style={{clear: 'both'}} ></div>)])
                        // setQuetionConstructor(old=>[...old, (<div className="p-1" >{thisx}</div>)])

                   
                      } 
                // })

        });
      
 
    })
}





 

useEffect(()=>{
    getQuestionsAndChoice()
    
    
},[])

useEffect(()=>{
    allAnsewresGetter()
    getCount()
},[allQuestions])


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
            alert('error')
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
            alert('n')
        }
    })
}
 
useEffect(()=>{
    if(activeRating){
        // alert('ddpp')
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
 

 
    return (
        <div>
            {/* {           console.log(lastId)} */}
            {/* {           console.log(lastId)} */}
        <div  className="category" >
            <h3>All Reviews of Question</h3>
            <button className="btn btn-outline-info" onClick={()=>setActiveRating(!activeRating)} >{activeRating ? (<span>View Question Review</span>) : (<span>View Rattings </span>)} </button>
           <div className="d-flex justify-content-center vstack gap 1" >
           {
            !activeRating ? 
             questionConstructor
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