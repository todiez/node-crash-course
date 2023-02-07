//Globas Object

//console.log(global);

setTimeout(() => {
    console.log("inside Timeout")
}, 1000)

const int = setInterval(() => {
    console.log("inside Intervall");
}, 100);