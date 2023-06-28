// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// OUTPUT
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// 🌟 Exercise 2: Display Student Info
// Instructions
// Using the code, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

var objUser = {
    first: "Elie",
    last: "Schoppik"
}

function displayStudentInfo(objUser){
    var {first, last} = objUser
    console.log(`Your full name is ${first + " " + last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});




// 🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
}

const usersArray = Object.entries(users);
console.log(usersArray); // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]


const usersArray2 = Object
                .entries(users)
                .map(([key, value]) => [key, value * 2]);
console.log(usersArray); // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]



// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// The OUTPUT will be - object (we used typeof to determine the type of the element 
// that is within the scope of the function)



// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class analyze the options below. Which constructor will successfully extend the Dog class?


class Dog {
  constructor(name) {
    this.name = name;
  }
};

// 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
// This one true because It defines its own constructor, which takes two parameters: name and size. 
// Inside the constructor, super(name) is called to invoke the constructor of the parent class Dog 
// and pass the name parameter. This ensures that the name property is properly initialized in the Labrador 
// instances.

// 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


// 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };




// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

[2] === [2] // false
{} === {} // Error


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

// OUTPUT 
// 4
// 4
// 5

// object4 is a separate object with its own number property. 
// When accessing object4.number, it returns the initial value of 5, 
// That's why it isn't affected by the assignment made to object1.number.


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(sound) {
        return `The ${this.type} named ${this.name} (${this.color}) makes the sound ${this.sound}`;
    }
}

const lion = new Mamal("Simba", "lion", "golden");
console.log(lion.sound("roar"));


// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white


class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(sound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`;
    }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));

