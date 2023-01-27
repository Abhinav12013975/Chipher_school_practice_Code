// promise is a class in javascript
// it is process of creation of promise
 let promise = new Promise((fulfilled,notfufulfilled)=>{
 let num=10;
 let num2=15;
// let sum = num+num2;
let sum=0;
setTimeout(()=>{
    console.log(num1+num2);
    sum=num+num2;
},5000);
if(sum>24) {
    fulfilled(sum);
}
else{
    notfufulfilled(new rror("promises not fullfilled"));
}
}) ;

promise.then(()=>{
    console.log("promise was fulfilled")
}).catch(()=>{
    console.log("promise was rejected")
});


function addTwoNumbers(num1,num2) {
    let sum=0;
    setTimeout(()=>{
        console.log(num1+num2);
        sum=num1+num2;
    },5000);

    console.log("Inside addTwoNumbers")
    return sum;
}

console.log(addTwoNumbers(2,3));