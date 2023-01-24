class apiUrl {
    constructor(){
        this.baseUrl = "http://localhost:3002";
        // this.baseUrl = "http://192.168.1.2:3002";
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
            getSearch: 'api/food/search',
            getCategoryInOrder:'api/category/order',
            getProductInOrder:'api/food/order'
        }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;