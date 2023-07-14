// const fs = require('fs');

// const fileName = 'RightLeft.txt'

// fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }

//     // Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.

//     let stepsToRight = 0;
//     let stepsToLeft = 0;

//     for (let i=0; i < data.length; i++) {
//         if (data[i] === '>') {
//             stepsToRight++;
//         } else if (data[i] === '<') {
//             stepsToLeft++;
//         }
//     }


//     const finalPosition = stepsToRight - stepsToLeft;
//     console.log(`Final position: ${finalPosition} steps to the right.`);
// });


// Use the corresponding operations to calculate the number of steps needed 
// to hit position the -1 for the first time - The answer should be: 1795 steps.


const fs = require('fs');

const fileName = 'RightLeft.txt'

fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    let stepsToRight = 0;
    let stepsToLeft = 0;
    let currentPosition = 0;

    for (let i=0; i < data.length; i++) {
        if (data[i] === '>') {
            stepsToRight++;
        } else if (data[i] === '<') {
            stepsToLeft++;
        }

        if (currentPosition === -1) {
            console.log(`Steps needed to hit position -1: ${i}`);
            return;
        }

        currentPosition = stepsToRight - stepsToLeft;
    }

    console.log(`Position -1 not found.`);
});