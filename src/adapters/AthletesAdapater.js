class AthletesAdapter {
    constructor(){
        this.baseUrl = 'https://workout-rails-api-backend.herokuapp.com/athletes'
    }
    getAthletes(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
    createAthlete(value){
        const athlete = {
            name: value 
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',  
            },
            body: JSON.stringify({athlete}),
        }).then(res => res.json)
    }
}