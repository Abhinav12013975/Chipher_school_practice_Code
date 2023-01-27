// Val;
// next;
// constructor(val, next=null) {
//     this.val=val;
//     this.next=next;
// }

// class TestClass{
//     head;
//     constructor
// }
//promise is a class in a js
//constructor (function)
//let num1=10;
//let num2=5;
// let promise = new Promise((fullfilled , notfufulfilled)=>{
   
// });

// function addTwoNumbers(num1, num2) {
//     // return new Promise(fulfilled, notFulfilled)
//         setTimeout(() =>  {
//             console.log("Inside setTimeout");
//             fulfilled(num1+num2);
//          }, 5000);
    
// }



// addTwoNumbers(10,5)
// .then(() => {
//     console.log("Promise was fulfilled");
// });
// .catch(() => {
//     console.log("Promise was not fulfilled");
// });



// const  Promise= new(fulfilled, notFulfilled) => addTwoNumbers(num1, num2) {
//  {
//         setTimeout(() =>  {
//             console.log("Inside setTimeout");
//             fulfilled(num1+num2);
//          }, 5000);
//     });
// }

// addTwoNumbers(10,5)
// .then(() => {
//     console.log("Promise was fulfilled");
// });
// .catch(() => {
//     console.log("Promise was not fulfilled");
// });



function addTwoNumbers(num1, num2) {
    return new Promise((fulfilled, notFulfilled) => {
        setTimeout(() =>  {
            console.log("Inside setTimeout");
            fulfilled(num1+num2);
         }, 5000);
         notFulfilled("an error occurred");
    });
}

addTwoNumbers(10,5)
.then(() => {
    console.log("Promise was fulfilled");
})
.catch(() => {
    console.log("Promise was not fulfilled");
});