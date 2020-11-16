const prompt = require('prompt-sync')();
let num = prompt("Enter a number:");
let count=0;
while(Math.floor(num%10)!=0)
{
    console.log(Math.pow(10,count)+" place digit is "+Math.floor(num%10));
    num=num/10;
    count++
}