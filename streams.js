const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"});

const writeStream = fs.createWriteStream("./docs/blog4.txt");

//on is an event listener
// readStream.on("data", (chunk) => {
//     console.log('----- New Chucnk-----');
//     console.log(chunk);
//     writeStream.write("\nNew Chunk\n")
//     writeStream.write(chunk);
// });


//piping
readStream.pipe(writeStream);