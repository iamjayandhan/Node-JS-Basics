//asynchronous code

setTimeout(() => {
    console.log('Timer is done');
}, 2000);
console.log('Hi');
console.log('Hello World!');

//first 2 console statements are executed.
//then  after 2 seconds, the timer is done message
//Non Blocking!

const fetchData = (callback) => {
    // 2.
    //to make delay
    //executes after 1.5 seconds
    setTimeout(()=>{
        callback("function executed!");
    },1500)
}

setTimeout(()=>{
    // 1.
    //executes this func after 2 seconds!
    fetchData((result)=>{
        console.log(result);
    })
},2000);
console.log("hey dude")
console.log("hey buddy")




