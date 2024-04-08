//Promise
//used when we dont know when we get the result

//producing code for promise
let myPromise = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        // myResolve();
        myResolve('Jayandhan');
    },2000)
})

//consuming code for promise
//then -> success
//catch -> failed


// only print! so only one .then
//if parameter used, then use that here! 'name'
// myPromise.then((name)=>{
//     console.log("success! "+name)
// }).catch(()=>{
//     console.log("failed :( "+ name)
// })


//to perform some operation, use multiple .then
myPromise.then((name)=>{
   return "Name:"+name;
})
.then((name)=>{
    console.log(name);
})
.catch(()=>{
    console.log("failed :( "+ name)
})