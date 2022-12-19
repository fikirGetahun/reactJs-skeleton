import axios from "axios";
// import apiUrl from './apiUrl.js';

const api = new apiUrl() // this is url objects

class GetHandler{
 

     getCategory   = async   (): Promise<Category>=> {
     return  await axios
            .get(api.baseUrl)
            .then((res) => {
                if (res.status == 200) {
                    var cat = new Category();
                    cat = res.data;
                    return  cat;
                } else{
                    return new Category();
                }
            });
    }

}

export default GetHandler