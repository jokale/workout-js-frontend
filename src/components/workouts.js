class Workouts{
    constructor() {
        this.workouts= []
        this.adapter = new WorkoutsAdapter()
          this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts()
    }

    initiBindingsAndEventListeners(){
        this.workoutsContainer = document.getElementById('workouts-container')
    }
    fetchAndLoadWorkouts() {
          this.adapter
          .getWorkouts()
          .then(workouts => {
            workouts.forEach(workout => this.workouts.push(workout))
          console.log(this.workouts)
        })
        .then(() => {
            this.render()
        })
    }
    render(){
        // const workoutsContainer = document.getElementById('workouts-container')
        this.workoutsContainer.innerHTML = this.workouts.map(workout =>  `<li>${workout.name}</li>`).join('')
    }
 }

