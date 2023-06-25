// 🌟 Exercise 1 : Change The Article

// retrieve the h1 and console.log it
var h1 = document.querySelector("h1");
console.log(h1);

// Retrieve the <article> element
var article = document.querySelector("article");
// Remove the last paragraph element
var lastArticleElement = article.lastElementChild;
lastArticleElement.remove();

// Retrieve the <h2> element
var h2 = document.querySelector("h2");
// Add event listener to the <h2> element
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

// Retrieve the <h3> element
var h3 = document.querySelector("h3");
// Add event listener to the <h3> element
h3.addEventListener("click", function () {
  // Hide the <h3> element
  h3.style.display = "none";
});

// Retrieve the <button> element
var boldButton = document.getElementById("boldButton");
// Add event listener to the <button> element
boldButton.addEventListener("clock", function () {
  // Retrieve all paragraphs
  var paragraphs = document.getElementsByTagName("p");
  // Apply bold style to each paragraph
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold";
  }
});

// Retrieve the <h1> element
var h1 = document.querySelector("h1");
// Add event listener for mouseover event
h1.addEventListener("mouseover", function () {
  // Generate a random pixel size between 0 and 100
  var randomSize = Math.floor(Math.random() * 101);
  // Set the font size of the <h1> element
  h1.style.fontSize = randomSize + "px";
});

// Retrieve the second paragraph
var secondParagraph = document.querySelectorAll("p")[1];
// Add event listener for mouseover event
secondParagraph.addEventListener("mouseover", function () {
  // Apply fade-out animation using CSS transition
  secondParagraph.style.transition = "opacity 0.5s";
  secondParagraph.style.opacity = "0";
});
// Add event listener for mouseout event
secondParagraph.addEventListener("mouseout", function () {
  // Reset opacity when mouse moves out
  secondParagraph.style.opacity = "1";
});
