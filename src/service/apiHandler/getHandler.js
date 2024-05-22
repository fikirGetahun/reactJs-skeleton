import axios from "axios";
// import Category from "../model/category";
//  import Convert from "../model/helperClass";
import apiUrl from './apiUrl';
// import Category from '../model/category';


const api = new apiUrl(); // this is url objects

class GetHandler{
 

    //  getCategory   = async ( )=> {
    //  return  await axios
    //         .get(api.joinUrl(api.endPoints.catagory))
    //         .then((res) => {
    //             if (res.status == 200) {
    //                 //   cat:Array   = new Category(); 
    //                 // cat = res.data;
    //                 // return  cat;
    //                 // var jj = new Convert()
                
    //               // var x =      Convert.toCategory(res.data)
    //             var x: any = res.data;
    //               return x;
    //             } else{
    //                 return 'error'
    //             }
    //         });
    // }


    getCategory = async () =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.addCategory))
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }

    getRatingGre = async (gte,skip) =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.ratingGte)+gte+'/'+skip)
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }

    getRatingLs = async (gte,skip) =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.ratingLs)+gte+'/'+skip)
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }

    getRatingCountTotal = async () =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.ratingcount))
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }

    getFoodCountTotal = async () =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.foodCount))
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }

    getActiveCategory = async () =>{
      var result;
      try{
        await axios.get(api.joinUrl(api.endPoints.listActiveCategory))
        .then(res=>{
          result = res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message
        }
      }

      return result;
    }


    getOneCategory = async (id)=>{
      var result;
      try{
        await axios({
          url: api.joinUrl(api.endPoints.addCategory)+id,
          method:'get',
        
        }).then(res=>{
          result = res;
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result;
    }



    getProductOnCategory = async (catId)=>{
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addFood)+catId,
          method:'get',
        }).then(res=>{
          result = res;
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result;
    }

    getCategoryInOrder = async ()=>{
      var result
      try{
       await  axios({
          url:api.joinUrl(api.endPoints.getCategoryInOrder),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result;
    }


    getProductInOrder = async ()=>{
      var result
      try{
       await  axios({
          url:api.joinUrl(api.endPoints.addFood),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result;
    }

    getProductPrice = async (foodId)=>{
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.getPrice)+foodId,
          method:'get',
        }).then(res=>{
          result = res;
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result;
    }


    getOneProduct = async (id)=>{
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.product)+id,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }
    

    getOneUser = async (email)=>{
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.getOneUser)+email,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }


    getAllUsers = async () => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.getAllUsers),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getSearchResult = async (food) => {
      var result;
      try{
        const ourRequest = new AbortController()
        ourRequest.abort()
        await axios({
          url:api.joinUrl(api.endPoints.getSearch)+food,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    

    //// --------- feedback handler ----------///
    getQuestions = async () => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addFeedbackQuestion),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }


    getChoosenQuestion = async (qid) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addChooseQuestion)+qid,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getChoosen = async () => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addChooseQuestion),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getQuestionWithChoice = async () => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.questionWithChoice),
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getRating = async (foodId) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addRating)+foodId,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }
    // getProductbyCat = async (cid ) => {
    //   var result;
    //   try{
    //     await axios({
    //       url:api.joinUrl(api.endPoints.catWithProduct)+cid ,
    //       method:'get'
    //     }).then(res=>{
    //       result =res
    //     })
    //   }catch(err){
    //     if(err.response){
    //       return err.response.data
    //     }else if(err.request){
    //       return err.request
    //     }else{
    //       return err.message()
    //     }
    //   }
    //   return result
    // }
    getProductbyCat = async (cid,pid) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.catWithProduct)+cid+'/'+pid,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getRatingAvg = async (foodId) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.ratingAvg)+foodId,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }


    getRatingLimit = async (foodId, startingId) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.limitRating)+foodId+'/'+startingId,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    getRatingLimitDay = async (foodId, startingId,stDate, fDate) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.ratingAvgDate)+foodId+'/'+startingId+'/'+stDate+'/'+fDate,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }


    getAnswers = async (foodId, qid, cid) => {
      var headers = {
        "Content-Type": "application/json",
     
    }
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.addAnswer)+qid+"/"+foodId+"/"+cid,
          method:'get',
          headers: headers,
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }

    
    getSingleQ = async (id) => {
      var result;
      try{
        await axios({
          url:api.joinUrl(api.endPoints.getsingleQ)+id,
          method:'get'
        }).then(res=>{
          result =res
        })
      }catch(err){
        if(err.response){
          return err.response.data
        }else if(err.request){
          return err.request
        }else{
          return err.message()
        }
      }
      return result
    }
 
}

export default GetHandler

 