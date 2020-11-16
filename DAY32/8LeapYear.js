const prompt = require('prompt-sync')();
let year=prompt("Enter the year");
if(year%4==0 && year%100!=0)
{
    console.log("LEAP YEAR");
}
else
{
    console.log("NOT LEAP YEAR");
}

