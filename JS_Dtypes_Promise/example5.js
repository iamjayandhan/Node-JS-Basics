//Destructuring
const person = {name:'killer',age:22};

//method1
// const name = person.name;

//method2
const {name,age} = person;

console.log(name,age);

//take arr values as constants
const hobbies = ['sports','cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);
