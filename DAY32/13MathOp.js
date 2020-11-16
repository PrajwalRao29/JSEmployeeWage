let num1 = 1;
let num2 = 2;
let num3 = 3;
let result1 = num1 +( num2 * num3);
let result2 = (num1 % num2 )+ num3;
let result3 = num3 + (num1 / num2);
let result4 = (num1 * num2) + num3;
function findMin()
{
let min=result1;
switch(min)
{
    case result1: min=result1;
    case result2: if(min>result2)
    min=result2;
    case result3: if(min>result3)
    min=result3;
    case result4: if(min>result4)
    min=result4;
}
return min;
}
function findMax()
{
    let max=result1;
switch(max)
{
    case result1: max=result1;
    case result2: if(max<result2)
    max=result2;
    case result3: if(max<result3)
    max=result3;
    case result4: if(max<result4)
    max=result4;
}
return max;
}
console.log("MINIMUM OF THE 4 FUNCTIONS HAVE THE VALUE "+ findMin());
console.log("MAXIMUM OF THE 4 FUNCTIONS HAVE THE VALUE "+ findMax());

