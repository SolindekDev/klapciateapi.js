const fetch = require('node-fetch');

class KlapciateAPI {
    constructor() {
        this.baseURL = "http://klapciate-api.herokuapp.com/"
    }

    async getText() {
        const response = await fetch(this.baseURL + "api/text")
        const body = await response.text()
        
        return body
    }

    async getImage() {
        const response = await fetch(this.baseURL + "api/image")
        const body = await response.json()
        
        return body.res
    }

    async getGif() {
        const response = await fetch(this.baseURL + "api/gif")
        const body = await response.json()
        
        return body.res
    }
}

module.exports = KlapciateAPI;