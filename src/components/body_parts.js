class BodyParts{
    constructor() {
        this.body_parts= []
        this.adapter = new BodyPartsAdapter()
         this.initBindingsAndEventListeners()
        this.fetchAndLoadBodyParts()
    
    }
    initBindingsAndEventListeners(){
        this.body_partsContainer = document.getElementById('body_parts-container')
    }
    fetchAndLoadBodyParts(){
        this.adapter
        .getBodyParts()
        .then(body_parts =>{
            body_parts.forEach(body_part => this.body_parts.push(body_parts))
         
        })
        .then(()=> {
            this.render()
        })
    }
    render (){
        
        this.body_partsContainer.innerHTML = this.body_parts.map(body_part => `<li>${body_part.name}</li>`).join('')
        }
}