//Array, Obj & Reference Types

const hobbies = ['Sports','Cookies']

hobbies.push('Programming');

console.log(hobbies);
//thus we added to const var
//it is made because, that arr with values id declared in a mem loc
// that mem loc is assigned to const varible
//thus modification is made to a const var
//same applies to obj

const person = {name:'jd'};
person.name = "rolex";
console.log(person); // works!

//to copy arr values to another arr
const hobbies1 = ['Sports', 'Cooking'];
const hobbies2 = hobbies;
hobbies2.push('Programming');
console.log(hobbies1);

//since mem is shared, both var shared same mem address,
//modification in one affects another too!

//another method to copy(slice method)
//thus diff mem addr
const hobbies3 = ['Sports', 'Cooking'];
const hobbies4 = hobbies1.slice()
hobbies4.push('Programming');
console.log(hobbies3);
console.log(hobbies4);

//same applies for obj
const personObj = {name:'logic'};

//spread operator is for the copy
const student = {...personObj,age:26};

console.log(personObj,student);

//to get multiple args(REST operator)
//rest operator is for the function
const func=(...args)=>{
    return args;
}
console.log(func(1,2,3,4));