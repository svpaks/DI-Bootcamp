// 🌟 Exercise 2 : Work With Forms

// 1. Retrieve the form element and console.log it
const form = document.querySelector("form");
console.log(form);

// 2. Retrieve the input elements by their ID and console.log them
var firstNameInput = document.getElementById("fname");
console.log(firstNameInput);

var lastNameInput = document.getElementById("lname");
console.log(lastNameInput);

// 3. Retrieve the input elements by their name attribute
const firstNameInput = document.querySelector('input[name="firstname"]');
const lastNameInput = document.querySelector('input[name="lastname"]');

// Log the input elements to the console
console.log(firstNameInput);
console.log(lastNameInput);

// 4. Retrieve the form element
var form = document.querySelector("form");

// Add submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input tags
  const firstNameValue = document.getElementById("fname").value;
  const lastNameValue = document.getElementById("lname").value;

  // Check if the input values are not empty
  if (firstNameValue.trim() !== "" && lastNameValue.trim() !== "") {
    // Create an li element for each input value
    const firstNameLi = document.createElement("li");
    firstNameLi.textContent = firstNameValue;

    const lastNameLi = document.createElement("li");
    lastNameLi.textContent = lastNameValue;

    // Append the li elements to the ul with class "usersAnswer"
    const usersAnswerList = document.querySelector(".usersAnswer");
    usersAnswerList.appendChild(firstNameLi);
    usersAnswerList.appendChild(lastNameLi);
  }
});
