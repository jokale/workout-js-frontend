class AthletesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/athletes'
    }
    getAthletes(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}