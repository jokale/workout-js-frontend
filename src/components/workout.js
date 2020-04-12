class Workout {
    constructor(workoutJSON) {
        this.id = workoutJSON.id 
        this.name = workoutJSON.name
        this.description = workoutJSON.description
        this.athlete = workoutJSON.athlete.name 
     }
// renderLi(){
// return `<li>${this.name}</li>`
// }
}

