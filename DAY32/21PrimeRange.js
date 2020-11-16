const prompt = require('prompt-sync')();

let input1 = prompt("Enter first number : ");
let input2 = prompt("Enter last number : ");
for(let j = input1; j <= input2; j++){
    for(let i = 2 ; i <= Math.sqrt(j); i++){
        if(j % i == 0){
            console.log("Num: " + j + "   Not A Prime");
        }
    }
}
console.log("Is A Prime Number");