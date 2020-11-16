const prompt = require('prompt-sync')();

let num1 = prompt("Enter the first number:  ")
let num2 = prompt("Enter the second number:  ")

if(num1.length != num2.length){
    console.log("The two numbers are not palindromes")
}
else{
    num1 = num1.split("")
    num2 = num2.split("")

    for(let i = 0; i < num1.length; i++){
        if(num1[i] != num2[num2.length - 1 - i]){
            console.log("The two numbers are not palindormes")
            return;
        }
    }

    console.log("The two numbers are palindromes")
}
