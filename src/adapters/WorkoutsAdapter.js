class WorkoutsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/workouts'
    }
    getWorkouts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
    createWorkout(value_1, value_2, value_3, value_4) {

        const workout = {
            name: value_1,
            description: value_2,
            body_part_name: value_3,
            athlete_name: value_4
        }
         return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
              },
            body: JSON.stringify(workout)
            }).then(res => res.json())
    
            // .then(workoutJson =>  (workoutJson.workout)
            //     // return workoutJson
            //       console.log(workout
        //  
                //   )
        

         }       
    
}