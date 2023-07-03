// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.


function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10){
            resolve ("The number is less than or equal to 10");
        } else {
            reject ("The number is greater than 10");
        }
    });
}

compareToTen(34)
.then(result => {
    console.log("Resolved", result);
})
.catch(error => {
    console.log("Rejected", error);
});


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

function success() {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve("success");
        }, 4000);
    });
}

success()
.then((result) => {
    console.log(result); // success
})
// .catch((error) => {
//     console.log(error);
// });


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise = Promise.resolve(3);

promise.then((result) => {
    console.log(result); //3
});


const promise2 = Promise.reject("Boo!");

promise.catch((error) => {
    console.log(error); // "Boo!"
});






// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.