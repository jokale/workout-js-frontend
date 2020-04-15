class BodyPartsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/body_part'
    }
    getBodyParts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}