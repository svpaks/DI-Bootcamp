// 🌟 Exercise 3 : Transform The Sentence

// Declare global variable
let allBoldItems;

// Function to get all the bold items
function getBoldItems() {
  const paragraph = document.querySelector("p");
  allBoldItems = paragraph.querySelectorAll("strong");
}

// Function to highlight bold items in blue
function highlight() {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
}

// Function to return bold items to default color (black)
function returnItemsToDefault() {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
}

// Add event listeners
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
