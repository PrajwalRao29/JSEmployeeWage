let number1 = Math.floor(Math.random() * 1000);
let number2 = Math.floor(Math.random() * 1000);
let number3 = Math.floor(Math.random() * 1000);
let number4 = Math.floor(Math.random() * 1000);
let number5 = Math.floor(Math.random() * 1000);
let min = number1;
let max = number1;

switch(max)
{
case number1: min=number1;
case number2: if(max<number2)
max=number2;
case number3: if(max<number3)
max=number3;
case number4: if(max<number4)
max=number4;
case number5: if(max<number5)
max=number5;
}
switch(min)
{
case number1: min=number1;
case number2: if(min>number2)
min=number2;
case number3: if(min>number3)
min=number3;
case number4: if(min>number4)
min=number4;
case number5: if(min>number5)
min=number5;
}

console.log(+ number1 + "," + number2 + "," + number3 + "," + number4 + "," + number5);
console.log("Maximum = " + max);
console.log(" Minimum = " + min);