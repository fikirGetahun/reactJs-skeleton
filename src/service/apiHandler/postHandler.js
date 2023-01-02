import axios from "axios";
import apiUrl from "./apiUrl";
const api =new apiUrl()
class PostHandler{

    CategoryAdder = async(body)=>{
        var result;
        var headers = {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem('token')
        }
        
         try{
            await axios(
                {
                    url: api.joinUrl(api.endPoints.addCategory),
                    method:"post",
                    headers:headers,
                    data:body,
                    
                }
            ).then(res=>{
                result = res.statusText
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


    FoodAdder = async (body)=>{
        var result;
        var headers = {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem('token')
        }
        try{
            await axios(
                {
                    url:api.joinUrl(api.endPoints.addFood),
                    method:'post',
                    data: body,
                    headers:headers
                }
            ).then(res=>{
                result = res
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

export default PostHandler;