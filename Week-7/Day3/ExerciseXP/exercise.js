// 🌟 Exercise 1 : List Of People

// Part I

const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.splice(0, 1);

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");

// Write code to add your name to the end of the people array.
people.push("Svetlana");

// Write code that console.logs Mary’s index.
// Take a look at the indexOf method on Google.
console.log(people.indexOf["Mary"]);

// Write code to make a copy of the people array using the slice method.
// - The copy should NOT include “Mary” or your name.
// - Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// - Hint: Check out the documentation for the slice method
const people_copy = people.slice();
console.log(people_copy);

// Write code that gives the index of “Foo”. Why does it return -1 ?
const index = people.indexOf("Foo");
console.log(index);
// It it returns -1 because the specified element is not found.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the
//    last element in the array and the length of the array?
const last = people[people.length - 1];
console.log(last);

// Part II - Loops

for (let name = 0; name < people.length; name++) {
  console.log(people[name]);
}

for (let name = 0; name < people.length; name++) {
  console.log(people[name]);

  if (people[name] === "Devon") {
    break;
  }
}

// 🌟 Exercise 2 : Your Favorite Colors

// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["Blue", "White", "Pink", "Green"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let color = 0; color < colors.length; color++) {
  const position = color + 1;
  console.log(`My #${position} choice is ${colors[color]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const suffixes = ["st", "nd", "rd", "th"];

for (let color = 0; color < colors.length; color++) {
  const position = color + 1;
  console.log(`My ${position}${suffixes[color]} choice is ${colors[color]}`);
}

// 🌟 Exercise 3 : Repeat The Question

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

const userInput = prompt("Please enter a number:");
console.log(typeof userInput);
// the data type of userInput is string

let number = Number(userInput);
// the data type of number is number

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

while (typeof number === "number" && number < 10) {
  number = Number(prompt("Enter a new number"));
}

console.log(`The number ${number} is >= 10`);

// 🌟 Exercise 4 : Building Management

// Review About Objects
// Copy and paste the above object to your Javascript file.

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Console.log the number of floors in the building.

console.log("Number of floors:", building["numberOfFloors"]);

// Console.log how many apartments are on the floors 1 and 3.

console.log(
  "Number of apartments on the first floor:",
  building["numberOfAptByFloor"]["firstFloor"]
);
console.log(
  "Number of apartments on the third floor:",
  building["numberOfAptByFloor"]["thirdFloor"]
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log("The name of the second tenant:", building["nameOfTenants"][1]);
console.log(
  "The number of rooms he has in his apartment:",
  building["numberOfRoomsAndRent"][
    building["nameOfTenants"][1].toLowerCase()
  ][0]
);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const rentSum =
  building["numberOfRoomsAndRent"]["sarah"][1] +
  building["numberOfRoomsAndRent"]["david"][1];
const rentDan = building["numberOfRoomsAndRent"]["dan"][1];

if (rentSum > rentDan) {
  console.log("The sum of Sarah's and David's rent is bigger than Dan's rent");
  building["numberOfRoomsAndRent"]["dan"][1] = 1200;
  console.log(
    `Now Dan's rent is ${building["numberOfRoomsAndRent"]["dan"][1]}`
  );
}

// Exercise 5 : Family

// Create an object called family with a few key value pairs.

const family = {
  lastname: "Connor",
  members: "5",
  pets: ["cat", "dog"],
};

// Using a for in loop, console.log the keys of the object.

for (let key in family) {
  console.log(key);
}

// Using a for in loop, console.log the values of the object.

for (let key in family) {
  console.log(key, "--->", family[key]);
}

// Exercise 6 : Rudolf -------------

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = "";
for (let key in details) {
  sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim()); // .trim() is for removing the last space at the end of the sentence

// Exercise 7 : Secret Group -------------

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society.
//    The society’s name will be the first letter of each of their names sorted in alphabetical order.
//    Hint: a string is an array of letters

names.sort(); // sorting names in alphabetical order

let societyName = "";

for (member of names) {
  societyName += member[0];
}
const secretSocietyName = societyName;

// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(secretSocietyName);
