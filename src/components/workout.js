class Workout {
    constructor(workoutJSON) {
        this.id = workoutJSON.id 
        this.name = workoutJSON.name
        this.body_part = workoutJSON.body_part
        this.description = workoutJSON.description
        this.creator = workoutJSON.creator
     }
}

