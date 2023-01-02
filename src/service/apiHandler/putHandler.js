import axios from "axios";
import apiUrl from "./apiUrl";
const api =new apiUrl()

class PutHandler{
      headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem('token')
    }
    

    updateCategory = async (body, id)=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.addCategory)+id ,
                method: 'put',
                data: body,
                headers:this.headers
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
        return result
    }

}

export default PutHandler