class BodyPartsAdapter {
    constructor(){
        this.baseUrl = 'https://workout-rails-api-backend.herokuapp.com/body_parts'
    }
    getBodyParts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}