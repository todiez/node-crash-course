//fs module built into node

const fs = require('fs');

//reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log("last line");

//writing files
fs.writeFile("./docs/blog1.txt", "hello dogs", () => {
    console.log('file was written');
})
fs.writeFile("./docs/blog2.txt", "hello dogs", () => {
    console.log('file was written');
})