class BodyPartsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/body_parts'
    }
    getBodyParts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}