// game.js

function playTheGame() {
  var wantToPlay = confirm("Would you like to play the game?");

  if (!wantToPlay) {
    alert("No problem, Goodbye");
  } else {
    var userNumber;

    do {
      userNumber = parseInt(prompt("Enter a number between 0 and 10:"));
    } while (isNaN(userNumber) || userNumber < 0 || userNumber > 10);

    var computerNumber = Math.round(Math.random() * 10);

    compareNumbers(userNumber, computerNumber);
  }
}

function compareNumbers(userNumber, computerNumber) {
  var attempts = 0;

  while (attempts < 3) {
    if (userNumber === computerNumber) {
      alert("WINNER!");
      return;
    } else if (userNumber > computerNumber) {
      attempts++;
      if (attempts === 3) {
        alert("Out of chances");
        return;
      }
      userNumber = parseInt(
        prompt("Your number is bigger than the computer's, guess again")
      );
    } else {
      attempts++;
      if (attempts === 3) {
        alert("Out of chances");
        return;
      }
      userNumber = parseInt(
        prompt("Your number is smaller than the computer's, guess again")
      );
    }
  }
}
