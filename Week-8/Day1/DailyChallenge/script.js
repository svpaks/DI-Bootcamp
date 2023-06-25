// Get the form element
const form = document.getElementById("libform");

// Get the input elements
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");

// Get the story element
const storyElement = document.getElementById("story");

// Get the shuffle button
const shuffleButton = document.getElementById("shuffle-button");

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Get the values of the inputs
  const noun = nounInput.value.trim();
  const adjective = adjectiveInput.value.trim();
  const person = personInput.value.trim();
  const verb = verbInput.value.trim();
  const place = placeInput.value.trim();

  // Check if any input is empty
  if (
    noun === "" ||
    adjective === "" ||
    person === "" ||
    verb === "" ||
    place === ""
  ) {
    console.error("Please fill in all the inputs");
    return;
  }

  // Generate the story using the input values
  const story = `Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} loved to ${verb} in ${place}.`;

  // Display the story
  storyElement.textContent = story;
};

// Function to handle shuffle button click
const handleShuffleButtonClick = () => {
  const stories = [
    "The sun was shining brightly in the clear blue sky.",
    "A mysterious creature appeared from the depths of the forest.",
    "In a distant galaxy, there was a planet full of colorful creatures.",
    "The old castle on the hill had a secret hidden in its walls.",
    "The sound of laughter filled the air as friends gathered for a picnic.",
  ];

  // Shuffle the stories randomly
  const shuffledStory = stories[Math.floor(Math.random() * stories.length)];

  // Display the shuffled story
  storyElement.textContent = shuffledStory;
};

// Add event listeners
form.addEventListener("submit", handleFormSubmit);
shuffleButton.addEventListener("click", handleShuffleButtonClick);
