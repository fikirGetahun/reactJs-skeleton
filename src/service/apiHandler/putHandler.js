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
                method: 'patch',
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

    updateProduct = async (body, fid, pid)=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.addFood )+fid+"/"+pid,
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

    updateUserData = async (body )=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.register ) ,
                method: 'patch',
                data: body,
                headers:this.headers
            }).then(res=>{
                result = res
            })
        }catch(err){
            if(err.response){
                // this is the ultimate error response handler 
                // i was straglling with this for a long time 
                return err.response.data
            }else if(err.request){
                return err.request
            }else{
                return err.message()
            }
        }
        return result
    }

    updateCategoryOrder = async (body, id )=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.getCategoryInOrder )+id ,
                method: 'patch',
                data: body,
                headers:this.headers
            }).then(res=>{
                result = res
            })
        }catch(err){
            if(err.response){
                // this is the ultimate error response handler 
                // i was straglling with this for a long time 
                return err.response.data
            }else if(err.request){
                return err.request
            }else{
                return err.message()
            }
        }
        return result
    }


    updateProductOrder = async (body, id )=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.getProductInOrder )+id ,
                method: 'patch',
                data: body,
                headers:this.headers
            }).then(res=>{
                result = res
            })
        }catch(err){
            if(err.response){
                // this is the ultimate error response handler 
                // i was straglling with this for a long time 
                return err.response.data
            }else if(err.request){
                return err.request
            }else{
                return err.message()
            }
        }
        return result
    }

    updateQuestion = async (body, id )=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.addFeedbackQuestion )+id ,
                method: 'patch',
                data: body,
                headers:this.headers
            }).then(res=>{
                result = res
            })
        }catch(err){
            if(err.response){
                // this is the ultimate error response handler 
                // i was straglling with this for a long time 
                return err.response.data
            }else if(err.request){
                return err.request
            }else{
                return err.message()
            }
        }
        return result
    }

    updateQuestionChoice = async (body, id )=>{
        var result;
        try{
            await axios({
                url: api.joinUrl(api.endPoints.addFeedbackQuestion )+'choice/'+id ,
                method: 'patch',
                data: body,
                headers:this.headers
            }).then(res=>{
                result = res
            })
        }catch(err){
            if(err.response){
                // this is the ultimate error response handler 
                // i was straglling with this for a long time 
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