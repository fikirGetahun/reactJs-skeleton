class apiUrl {
    constructor(){
        this.baseUrl = "http://localhost:3002";
        this.endPoints = {
            food: 'test',
            catagory: 'cat',
            login: 'login',
            register: 'api/users'
        }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;