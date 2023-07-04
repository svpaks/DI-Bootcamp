// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs() { // we created a function
    return new Promise((resolve, reject) => { // function returns "new Promis" with two parameters: resolve and reject
        const morseJS = JSON.parse(morse); // we converted object named "morse" into JSON for JS and called it morseJS by using a new variable

        if (Object.keys(morseJS).length === 0) { // we used LOOP to determine if the morseJS is empty by using length of morseJS (zero ot not zero)
            reject ("Error"); // if the morseJS is empty we not continue anymore
        } else { // OR
            resolve(morseJS) // if the morseJS is NOT empty we ask to show whole morseJS
        }  
    });
}


function toMorse(morseJS) { // we created a new function
    return new Promise((resolve, reject) => { // function also returns "new Promis" with two parameters: resolve and reject
        const word = prompt("Enter a word or any sentence"); // we ask the user to enter a word or any sentence, for example: "hello" and create a new variable
        const arrletters = word.split(""); // by using "split" we divide the word into letters (for example: ["h", "e", "l"]) and create a new variable
        const areLettersInObj = arrletters.every(letter => letter in morseJS); // we check if the letter the user entered is in morseJS (true or false)
        const morseTranslation = [] // and create a new (empty) array to include the new received Morse word there
        console.log(areLettersInObj); // output a new array
        if (areLettersInObj) { // IF the new array is true...
            for (let char of arrletters){ // we check for matches for every symbol in the word entered by user by taking it from arrletters 
                morseTranslation.push(morseJS[char]); // when we find the match we add it to a new (empty) array called morseArray with "push"
            }
            resolve(morseTranslation); // ... and show the the array morseArray
        } else {
            reject ("error") // if there are no matches it shows an error 
        }
    });
}

toJs()
    .then((morseObj) => toMorse(morseObj))
    .then((result) => console.log(result))
    .catch(error => console.log(error))


function joinWords(morseTranslation) {
    const joinedMorse = morseTranslation.join("\n");
    const displayElement = document.getElementById("morseDisplay");
    displayElement.innerText = joinedMorse;
    }
    
const morseTranslation = ['....', '.', '.-..', '.-..', '---']
joinWords(morseTranslation);
