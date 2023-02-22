class apiUrl {
    constructor(){
        // this.baseUrl = "https://akko-menu-server.vercel.app";
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
            getSearch: 'api/food/search',
            getCategoryInOrder:'api/category/order',
            getProductInOrder:'api/food/order',
            addFeedbackQuestion: 'api/feedback',
            addChooseQuestion: 'api/feedback/choose',
            addRating: 'api/feedback/rating',
            addAnswer: 'api/feedback/answer',
            getsingleQ : 'api/feedback/singleQ',
            limitRating: 'api/feedback/ratingLimit',
            ratingAvg: 'api/feedback/rattingAvg'
         }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;