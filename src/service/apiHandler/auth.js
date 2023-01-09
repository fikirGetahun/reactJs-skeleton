 import axios from "axios";
 import apiUrl from "./apiUrl";

 const api = new apiUrl()

class Auth{
    LoginAuth = async (body)=>{
        await axios
        .post('http://localhost:3002/login2', body)
        .then(res=>{
            if(res.status == 201){
                return true
            }else{
                return false
            }
        })
    }   

    registerAuth = async (body)=>{
        var rrr;
        try{
            await axios 
            .post(api.joinUrl(api.endPoints.register), body)
            .then(function (res){
                rrr = res.statusText
            })
        }catch(error){
           
                if (error.response) {
 
                    var x= error.response.data
                     
                     return error.response.data
                //   console.log(error.response.status);
                //   console.log(error.response.headers);
                  
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                //   console.log(error.request);
                return error.request
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                  return error.message
                }
                // console.log(error.config);
              
        }
   return rrr
    }

    Login = async (body) =>{
        var result;
        try{
            await axios.post(api.joinUrl(api.endPoints.login), body)
            .then(res=>{
                localStorage.setItem('token', res.data)
                localStorage.setItem('email',body.email)
                 result = true
            })
        }catch(err){
            if(err.response){
                return err.response.data
            }else if(err.request){
                return err.request+"sdf"
            }else{
                return err.message
            }
        }
        return result;
    }

}

export default Auth;