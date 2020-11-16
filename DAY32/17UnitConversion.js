const prompt = require('prompt-sync')();
console.log("1. Feet to Inch \n2. Inch To Feet \n3. Feet To Meter \n4. Meter To Feet");
let choice = prompt("Enter a choice: ");
choice = parseInt(choice);
switch(choice){
    case 1:
        let num1 = prompt("Enter the number in Feet : ");
        console.log(num1 * 12 + " Inch");
        break;
    case 2:
        let num2 = prompt("Enter the number in Inch : ");
        console.log(num2 / 12 + "Feet");
        break;
    case 3:
        let num3 = prompt("Enter the number in Feet : ");
        console.log(num3 * 3 / 10 + "Meter");
        break;
    case 4:
        let num4 = prompt("Enter the number in Meter : ");
        console.log(num4 * 10 / 3 + "Feet");
        break;
}