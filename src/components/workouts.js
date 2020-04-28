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
        this.getWorkoutForm = document.querySelectorAll('#workouts-container button')

    }
    createWorkout(e) {
        
        e.preventDefault()
             const value_1 =  this.newWorkoutName.value
             const value_2 =  this.newWorkoutDescription.value
             const value_3 =  this.newWorkoutBodyPart.value
             const value_4 =   this.newWorkoutAthlete.value
        this.adapter.createWorkout(value_1,value_2,value_3,value_4).then(workout => {
             this.workouts.push(workout)
            
                 

                 
         this.fetchAndLoadWorkouts()

      })       
           


    }


    fetchAndLoadWorkouts() {
         let workoutsContainer = document.getElementById('workouts-container')
        workoutsContainer = ''
          this.adapter
          .getWorkouts()
          .then(workouts => {
            workouts.forEach(workout => this.workouts.push(workout))
        })
        .then(() => {
            this.render()
             this.deleteAction()
        })

        
    }
        
        deleteAction(){
            let deleteButtons = document.querySelectorAll('#workouts-container button')

       
            for (let i = 0; i < deleteButtons.length; i++){
                deleteButtons[i].addEventListener('click', e => {
                    console.log('deleted')
               this.deleteWorkouts(e) } )
            }
            
    }
    render(){
        this.workoutsContainer.innerHTML = this.workouts.map(workout =>  `<li>${workout.name}</li><li id="workout-${workout.id}">${workout.description}</li><button id="${workout.id}">Delete workout</button>`).join('')
    }
   

    
      deleteWorkouts(e){
          e.preventDefault()
          
        this.fetchDeleteWorkouts(e.target.id)
    }
    fetchDeleteWorkouts(id){
        
        fetch(`${this.baseUrl}${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json()).then(workout =>{
        
            document.querySelector(`#workout-${workout.workoutId}`).remove();

         this.workouts = []
        this.fetchAndLoadWorkouts()
        })
    }
 }

