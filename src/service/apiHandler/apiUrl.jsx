class apiUrl {
    constructor(){
        this.baseUrl = "http://localhost:3002";
        this.headers = {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem('token')
        }
        this.endPoints = {
            food: 'test',
            catagory: 'cat',
            login: 'api/auth',
            register: 'api/users',
            addCategory: 'api/category',
            listActiveCategory: 'api/category/active',
            makeCategoryActive: 'api/category/makeActive',
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