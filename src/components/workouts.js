class Workouts{
    constructor() {
        this.workouts= []
        this.adapter = new WorkoutsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts()
        this.baseUrl = 'http://localhost:3000/workouts/'
    }

    initiBindingsAndEventListeners(){
        this.workoutsContainer = document.getElementById('workouts-container')     
        this.newWorkoutName = document.getElementById('new-workout-name')
        this.newWorkoutDescription = document.getElementById('new-workout-description')
        this.newWorkoutBodyPart = document.getElementById('new-workout-body_part-name')
        this.newWorkoutAthlete = document.getElementById('new-workout-athlete-name')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout.bind(this))
        this.getWorkoutForm = document.querySelectorAll('new-workout-form button')
        // this.workoutsContainer.addEventListener('dblclick', this.handleWorkoutClick.bind(this))
        // }

    }
    createWorkout(e) {
        // this.adapter = new WorkoutsAdapter
        e.preventDefault()
             const value_1 =  this.newWorkoutName.value
             const value_2 =  this.newWorkoutDescription.value
             const value_3 =  this.newWorkoutBodyPart.value
             const value_4 =   this.newWorkoutAthlete.value
        this.adapter.createWorkout(value_1,value_2,value_3,value_4).then(workout => {
             this.workouts.push(workout)
        
         this.render()   
      })       
           


    }


    fetchAndLoadWorkouts() {
    
          this.adapter
          .getWorkouts()
          .then(workouts => {
            workouts.forEach(workout => this.workouts.push(workout))
        })
        .then(() => {
            this.render()
        })
    }
    render(){
        this.workoutsContainer.innerHTML = this.workouts.map(workout =>  `<li id="workout-${workout.id}">${workout.description}</li>`).join('')
    }
    deleteAction(){
        let deleteButtons = this.getWorkoutForm
        for (let i = 0; i < deleteButtons.length; i++){
            deleteButtons[i].addEventListener('click', deleteWorkouts )
        }

    }
      deleteWorkouts(){
        let id = this.id
        fetchDeleteWorkouts(id)
    }
    fetchDeleteWorkouts(id){
        fetch(this.baseUrl + id,{
            method: 'DELETE'
        })
        .then(res=>res.json()).then(()=>{
         this.workoutsContainer.innerHTML = ''
        // (workout => {document.querySelector("#workout-${workout.id}").innerHTML = ''
        this.workouts = []
        fetchAndLoadWorkouts()
        })
    }
 }

