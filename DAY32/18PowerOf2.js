const prompt = require('prompt-sync')();

let input = prompt("Enter a number : ");
for(let i=0; i<= input; i++){
    console.log(Math.pow(2,i));
}