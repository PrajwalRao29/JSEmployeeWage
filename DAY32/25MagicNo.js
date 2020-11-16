  
const prompt = require('prompt-sync')();

let input = prompt("Enter a number between 1 and 100 : ");
let upper = 100;
let lower = 1;
let mid = 0;
while(mid != input){
    mid  = (upper + lower) / 2;
    if(input < mid){
        upper = mid;
    }
    else{
        lower = mid;
    }
}

console.log(mid);