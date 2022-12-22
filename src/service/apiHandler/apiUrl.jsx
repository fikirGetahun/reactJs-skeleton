class apiUrl {
    constructor(){
        this.baseUrl = "http://localhost:3001";
        this.endPoints = {
            food: 'test',
            catagory: 'cat'
        }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;