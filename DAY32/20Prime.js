const prompt = require('prompt-sync')();

let input = prompt("Enter a number : ");
for(let i = 2 ; i <= Math.sqrt(input); i++){
    if(input % i == 0){
        console.log("Not A Prime");
        return;
    }
}
console.log("Is A Prime Number");