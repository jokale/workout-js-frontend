class Workouts{
    constructor() {
        this.workouts= []
        this.adapter = new WorkoutsAdapter()
          this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts()
    }

    initiBindingsAndEventListeners(){
        this.workoutsContainer = document.getElementById('workouts-container')     
       this.newWorkoutName = document.getElementById('new-workout-name')
        this.newWorkoutDescription = document.getElementById('new-workout-description')
        this.newWorkoutBodyPart = document.getElementById('new-workout-body_part_name')
        this.newWorkoutAthlete = document.getElementById('new-workout-athlete-name')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout.bind(this))
        // this.workoutsContainer.addEventListener('dblclick', this.handleWorkoutClick.bind(this))
        // }

    }
    createWorkout(e) {
        // this.adapter = new WorkoutsAdapter
        e.preventDefault()
            const value =  this.newWorkoutDescription.value

        this.adapter.createWorkout(value).then(workout => {
             this.workouts.push(workout)
            console.log(this.workout)
         this.render()   // console.log(this.workouts + "  <----- undefined? ")
      })       
           


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

