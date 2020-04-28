// Define a function called greet that takes agreeting and a name as arguement and returns concated version of the string with an exclaimation point
//Function declaration 
// function greet(name,greeting){
//  return `${greeting} ${name}!`
// }

//Function expression using the keyword function 

// const greet = function (name,greeting){
//    return `${greeting} ${name}!`
// }

//Use an arrow function expression with explicit return
// const greet = (name,greeting)=>{
//  return  `${greeting} ${name}!`
// }

//Arrow function with implicit return

const greet = (name,greeting)=>`${greeting} ${name}!`
 
const greetObj = (name,greeting)=> ({name , greeting})



const name = "Joanna"
const greeting = "Hello"
const output = greet(name, greeting);
console.log(output)
console.log(greetObj(name,greeting))
