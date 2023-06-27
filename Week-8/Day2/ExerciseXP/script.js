// 🌟 Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// funcOne:
// Prediction: The value of a will be 3 because the condition a > 1 is true, so a is assigned the value 3 inside the if block.
// Running funcOne() in the console will show an alert with the message: "inside the funcOne function 3".
// 1.1. If the variable is declared with const instead of let:

// Prediction: The code will throw an error because const variables cannot be reassigned, and the assignment a = 3 inside the if block would violate that.
// funcTwo and funcThree:
// Prediction: The value of a will be 5 in both cases. Initially, a is assigned the value 0. Calling funcTwo() changes the value of the global a to 5, and calling funcThree() will display an alert with the message: "inside the funcThree function 5".
// Running funcThree() will display the alert: "inside the funcThree function 5".
// 2.1. If the variable is declared with const instead of let:

// Prediction: The code will throw an error because const variables cannot be reassigned, and the assignment a = 5 inside funcTwo would violate that.
// funcFour and funcFive:

// Prediction: The value of a will be "hello". funcFour assigns "hello" to the global a variable, and funcFive displays an alert with the message: "inside the funcFive function hello".
// Running funcFour() and funcFive() will display the alert: "inside the funcFive function hello".
// funcSix:

// Prediction: The value of a inside funcSix will be "test". Although there is a global a variable with the value 1, funcSix declares a new local a variable with the value "test". The alert will display: "inside the funcSix function test".
// Running funcSix() will display the alert: "inside the funcSix function test".
// 4.1. If the variable is declared with const instead of let:

// Prediction: The code will work the same way. const will limit the scope of the variable to the funcSix function, but it will not prevent the local a variable from being declared and assigned a new value.
// Block-level scope:
// Prediction: The value of a in the if block will be 5, and the value of a outside the if block will be 2. Inside the if block, a new block-scoped a variable is declared and assigned the value 5, which is separate from the outer block-scoped a variable with the value 2.
// Running the code will display two alerts: "in the if block 5" and "outside of the if block 2".
// 5.1. If the variable is declared with const instead of let:

// Prediction: The code will work the same way. const will limit the scope of the variable to the if block, but it will not prevent the local a variable from being declared and assigned a new value.


