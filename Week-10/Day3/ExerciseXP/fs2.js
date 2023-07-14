// Exercise 2 : Writing Files With Node JS
// Instructions

// 1. Create an fs.js file, and use the Node js File System to create a new text file and write to it.

// const { log } = require('console');
// const fs = require('fs');

// const fileName = 'newFile.txt';
// const fileContent = 'This is the content of the new file.';

// fs.writeFile(fileName, fileContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(`File "${fileName}" has been created and written successfully.`);
// }); 





// 2. Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

// const fs = require('fs');

// const fileName = 'newFile.txt'
// const contentToAppend = '\n Buy orenge juice.';

// fs.appendFile(fileName, contentToAppend, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(`Text "${contentToAppend.trim()}" has been appended to "${fileName}" successfully.`);
// });





// 3. Use the Node js File System to delete the file.

const fs = require('fs');

const fileName = 'newFile.txt'

fs.unlink(fileName, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`File "${fileName}" has been deleted successfully.`);
});