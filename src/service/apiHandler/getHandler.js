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

}

export default GetHandler

 