// Array(heterogeneous)
const hobbies = ['sports','cooking'];

//for of method
for(const hobby of hobbies){
    console.log(hobby);
}

//map method (to modify arr elems)
console.log(hobbies.map((hobby)=>{
    return 'hobby: '+hobby;
})
)

//map method (optimized)
console.log(hobbies.map(hobby=>'hobby: '+hobby))

