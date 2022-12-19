class apiUrl {
    constructor(){
        this.baseUrl = "http:localhost:3000/";
        this.endPoints = {
            food: 'test'
        }


    }

    joinUrl(endPoint){
        return `${this.baseUrl}/${endPoint}/`;
    }

}

export default apiUrl;