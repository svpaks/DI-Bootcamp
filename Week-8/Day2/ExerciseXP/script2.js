// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?

// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => {
    return typeof value === 'string';
  };
  
  console.log(isString('hello')); // true
  console.log(isString([1, 2, 4, 0])); // false
  

// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 3)); // Output: 5
console.log(sum(10, -7)); // Output: 3


// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// Function declaration

function convertToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
  }
  
  console.log(convertToGramsDeclaration(2)); // Output: 2000
  
  // Function expression
  const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  
  console.log(convertToGramsExpression(2)); // Output: 2000
  
  // One-line arrow function
  const convertToGramsArrow = weightInKg => weightInKg * 1000;
  
  console.log(convertToGramsArrow(2)); // Output: 2000
  


// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numberOfChildren, partnerName, location, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    document.getElementById('output').textContent = sentence;
  })(2, 'John', 'New York', 'Software Engineer');  



// 🌟 Exercise 7 : Welcome + HTML
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function(userName) {
    const userProfileDiv = document.getElementById('userProfile');
  
    // Create elements
    const userNameElement = document.createElement('span');
    const userProfilePicture = document.createElement('img');
  
    // Set attributes
    userNameElement.textContent = `Welcome, ${userName}!`; // Display the user's name
    userProfilePicture.src = 'path/to/profile-picture.jpg'; // Set the path to the user's profile picture
    userProfilePicture.alt = 'Profile Picture';
  
    // Append elements to the div
    userProfileDiv.appendChild(userNameElement);
    userProfileDiv.appendChild(userProfilePicture);
  })('John');
  

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
      document.getElementById('output').textContent = sentence;
    }
  
    // Invoke the inner function
    addIngredients('apple', 'orange', 'carrot');
  }
  
  // Invoke the outer function
  makeJuice('medium');
  

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
      document.getElementById('output').textContent = sentence;
    }
  
    // Invoke the addIngredients function twice
    addIngredients('apple', 'orange', 'carrot');
    addIngredients('strawberry', 'banana', 'spinach');
  
    // Invoke the displayJuice function
    displayJuice();
  }
  
  // Invoke the makeJuice function
  makeJuice('medium');
  
