class WorkoutsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/workouts'
    }
    getWorkouts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
    createWorkout(value) {

        const workout = {
            description: value,
        }
 return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({workout}),
        }).then(res => res.json)

    }
}