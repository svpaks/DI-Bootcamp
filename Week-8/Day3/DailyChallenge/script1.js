// Go Wildcats

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//1
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
const allUsernames = [];

gameInfo.forEach(member => allUsernames.push(member.username + "!")); 

console.log(allUsernames);


//2
// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
const winners = [];

gameInfo.forEach(member => {
    if (member.score > 5) {
        winners.push(member.username);
    }
})

console.log(winners);


//3 
// Find and display the total score of the users. (Hint: The total score is 71)

const totalScore = gameInfo.reduce((accumulator, element) => {
    return accumulator + element["score"]
}, 0) 

console.log(totalScore);
