import React from "react";
import axios from "axios";

class Auth{
    LoginAuth = async (body)=>{
        await axios
        .post('', body)
        .then(res=>{
            if(res.status == 201){
                return true
            }else{
                return false
            }
        })


    }   
}