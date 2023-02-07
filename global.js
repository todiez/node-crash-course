//Globas Object

//console.log(global);

setTimeout(() => {
    console.log("inside Timeout");
    clearInterval(int);
}, 1000)

const int = setInterval(() => {
    console.log("inside Intervall");
}, 100);

console.log(__dirname);
console.log(__filename);