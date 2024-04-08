//functions

//function
function sum(a,b){
    return a+b;
}

//anonymous function
const sum2 = function(a,b){
    return a+b;
}

//arrow function (no func name)
const sum3 = (a,b) => {
    return a+b;
}
//arrow function (optimized)
//if single line of code!!
const sum4 = (a,b) =>a+b;

//arrow function (if single variable input)
//no need for the parenthesis()
const sum5 = a => a+1;

console.log(sum(1,2));
console.log(sum2(5,9));
console.log(sum3(10,2));

//to access properties of OBJ, we use 'this' keyword.
//In JS, we use OBJ most often

const person  = {
    name: 'jayandhan',
    age:25,
    greet: function(){
        console.log("Hello "+ this.name);
    },
    greet2: ()=> {
        console.log("Hello "+ this.name);
    },
}

console.log(person);
//objname.greet
person.greet(); // works!
person.greet2(); // undefiend! because it is not bound to obj
//by default arrow functions search for var in global scope!.

//if there is only one func in obj
// you can use this syntax
const person2  = {
    name:'Jayandhan',
    greet(){
        console.log("Hello "+ this.name);
    },
}
person2.greet();