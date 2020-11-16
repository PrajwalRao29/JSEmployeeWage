const prompt = require('prompt-sync')();
let num = prompt("Enter A Number: ");

console.log("Prime Factors of "+ num + " Are: ");
for(let i = 2; i <= num; i++){
    while(num % i == 0){
        console.log("Factor: " + i);
        num = num / i;
    }
}