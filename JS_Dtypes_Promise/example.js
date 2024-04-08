//Datatypes

let name = "jayandhan";
let age = 25;
let hasHobby = true;
name = "JD"

//name object is deprecated in JS, 
//Warning from vscode
console.log(name); 

function displayUser(userName, userAge, userHasHobby){
    return 'User name is '+name+'\n' +
            'age is '+age+'\n'+
            'has hobby? '+hasHobby;
}           
//both works! 
// console.log(displayUser(name, age, hasHobby));
console.log(displayUser());
//variables outside func can be used inside function.
//not vice versa


//let vs const
//let - cannot redeclare a variable with same name!
// let name = "jd"
// name = "jk", works!
//const - once declared with val, cant be changed
// const name = "jd"
// name = "jk", wont works!