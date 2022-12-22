import axios from "axios";
// import Category from "../model/category";
//  import Convert from "../model/helperClass";
import apiUrl from './apiUrl';
import Category from '../model/category';


const api = new apiUrl(); // this is url objects

class GetHandler{
 

     getCategory   = async ( )=> {
     return  await axios
            .get(api.joinUrl(api.endPoints.catagory))
            .then((res) => {
                if (res.status == 200) {
                    //   cat:Array   = new Category(); 
                    // cat = res.data;
                    // return  cat;
                    // var jj = new Convert()
                
                //   var x =      Convert.toCategory(res.data)
                var x: any = res.data;
                  return x;
                } else{
                    return 'error'
                }
            });
    }

}

export default GetHandler

 