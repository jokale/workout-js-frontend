class Workouts{
    constructor() {
        this.workouts= []
        this.adapter = new WorkoutsAdapter()
        //  this.bindEventListeners()
        this.fetchAndLoadWorkouts()
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
        const workoutsContainer = document.getElementById('workouts-container')
        workoutsContainer.innerHTML = 'My workouts here'
    }
 }

