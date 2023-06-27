let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => {
  let user = client; // Creating a copy of the client variable
  client = "Betty"; // Modifying the value of the client variable

  let shopping = Object.assign({}, groceries); // Creating a shallow copy of the groceries object

  shopping.totalPrice = "35$"; // Modifying the totalPrice key in the shopping object
  shopping.other.payed = false; // Modifying the payed key in the shopping object

  console.log("Modified client:", client);
  console.log("User:", user);
  console.log("Modified shopping object:", shopping);
};

displayGroceries(); // Output: pear, apple, banana

// Invoke the cloneGroceries function
cloneGroceries();


// Modified client: Betty
// // User: John
// Modified shopping object: {
//   fruits: ["pear", "apple", "banana"],
//   vegetables: ["tomatoes", "cucumber", "salad"],
//   totalPrice: "35$",
//   other: {
//     payed: false,
//     meansOfPayment: ["cash", "creditCard"]
//   }
// }
