class Athletes{
    constructor() {
        this.adapter = new AthletesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadAthletes()
    }
    initiBindingsAndEventListeners(){
        this.athletesContainer = document.getElementById('athletes-container')     
        this.newAthlete = document.getElementById('new-athlete-name')
        this.athleteForm = document.getElementById('new-athlete-form')
        this.athleteForm.addEventListener('submit', this.createAthlete.bind(this))
       

    }

}