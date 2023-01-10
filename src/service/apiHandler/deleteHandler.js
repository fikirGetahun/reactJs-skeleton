import axios from "axios";
import apiUrl from "./apiUrl";


let api = new apiUrl()
 
class DeleteHandler {
    deleteProduct = async (id)=>{
        var result;
        try{
           await axios({
                url:api.joinUrl(api.endPoints.addFood)+id,
                method:'delete',
                headers:api.headers
            }).then(res=>{
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
        return result;
    }


    deleteCategory= async (id)=>{
        var result;
        try{
           await axios({
                url:api.joinUrl(api.endPoints.addCategory)+id,
                method:'delete',
                headers:api.headers
            }).then(res=>{
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
        return result;
    }
}

export default DeleteHandler;