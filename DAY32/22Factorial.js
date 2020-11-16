const prompt = require('prompt-sync')();

let input1 = prompt("Enter a number : ");

if(input1 == 0)
    return console.log("Factorial : 1");
else{
    let fact = 1;
    for(let i = 2; i <= input1; i++){
        fact = fact * i;
    }
    console.log("Factorial : " + fact);
}
