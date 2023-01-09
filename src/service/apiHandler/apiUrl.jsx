class apiUrl {
    constructor(){
        this.baseUrl = "http://localhost:3002";
        this.endPoints = {
            food: 'test',
            catagory: 'cat',
            login: 'api/auth',
            register: 'api/users',
            addCategory: 'api/category',
            addFood:'api/food',
            getPrice:'api/price',
            product: 'api/food/product',
            getOneUser: 'api/users/byemail',
            getAllUsers: 'api/users/allUsers',
            
        }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;