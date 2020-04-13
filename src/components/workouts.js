class Workouts{
    constructor() {
        this.workouts= []
        this.adapter = new WorkoutsAdapter()
          this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts()
    }

    initiBindingsAndEventListeners(){
        this.workoutsContainer = document.getElementById('workouts-container')
        this.newWorkoutDescription =document.getElementById('new-workout-description')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout.bind(this))
        // this.workoutsContainer.addEventListener('dblclick', this.handleWorkoutClick.bind(this))
        // }

    }
    createWorkout(e) {
        e.preventDefault()
            const value = this.newWorkoutDescription.value

        this.adapter.createWorkout(value).then(workout => {
            // this.workouts.push(workout))
            console.log(this.workouts)
      })            
      this.render()


    }

    // handleWorkoutClick(e){
    //     const li = e.target 
    //     li.contentEditable = true 
    // }
    fetchAndLoadWorkouts() {
    
          this.adapter
          .getWorkouts()
          .then(workouts => {
            workouts.forEach(workout => this.workouts.push(workout))

        //   console.log(this.workouts)
        })
        .then(() => {
            this.render()
        })
    }
    render(){
        // const workoutsContainer = document.getElementById('workouts-container')
        this.workoutsContainer.innerHTML = this.workouts.map(workout =>  `<li>${workout.description}</li>`).join('')
    }
 }

