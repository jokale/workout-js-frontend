class AthletesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/athletes'
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