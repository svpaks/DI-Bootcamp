// 🌟 Exercise 1 : Giphy API

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My` // uses the fetch() method to retrieve data from the specified API URL 

fetch(apiUrl)
.then(response => {
    if (!response.ok) { // we check if the response is successful by examining the ok property
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); /// If the response is successful, we parse the JSON data by calling response.json() 
})
.then(data => {
    console.log(data); // ... and log the resulting JavaScript object to the console
})
.catch(error => {
    console.error('Error:', error); // we throw an error with the corresponding HTTP status (if the response is not successful)
});


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.


const apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
const apiUrl1 =  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=sun&limit=10&offset=2`;

fetch(apiUrl1)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});


// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));


    async function fetchData() {
        try {
            const response = await fetch("https://www.swapi.tech/api/starships/9/");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const Data = await response.json();
            console.log(Data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fetchData();





// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// OUTPUT

// 1. The string 'calling' will be logged to the console.
// 2. The code will pause for 2 seconds due to the await statement inside asyncCall().
// 3. After 2 seconds, the Promise returned by resolveAfter2Seconds() will be resolved with the value 'resolved'.
// 4. The value 'resolved' will be assigned to the result variable.
// 5. The value of result, which is 'resolved', will be logged to the console.

// The final outcome will be:
calling
resolved