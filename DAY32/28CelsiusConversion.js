const prompt = require('prompt-sync')();
function celsiusToFahrenheit(ctemp) {
    return ctemp * 1.8 + 32;
}

function fahrenheitToCelsius(ftemp) {
    return (ftemp - 32) / 1.8;
}

function checkCelsiusTemp(ctemp) {
    if (ctemp > 0 && ctemp < 100)
        return true;
    else
        return false;
}

function checkFahrenheitTemp(ftemp) {
    if (ftemp > 32 && ftemp < 212)
        return true;
    else
        return false;
}
console.log("Enter 1 to convert Celcius to Fahrenheit\nEnter 2 to convert Fahrenheit to Celsius");
choice = parseInt(prompt());
switch (choice) {
    case 1:
        console.log("Enter temperature in Celcius in the range 0 - 100");
        ctemp = parseInt(prompt());
        if (checkCelsiusTemp(ctemp))
            console.log(celsiusToFahrenheit(ctemp));
        else
            console.log("Enter valid temperature");
        break;
    case 2:
        console.log("Enter temperature in Fahrenheit in the range 32 - 212");
        ftemp = parseInt(prompt());
        if (checkFahrenheitTemp(ftemp))
            console.log(fahrenheitToCelsius(ftemp));
        else
            console.log("Enter valid temperature");
        break;
    default:
        console.log("Enter valid choice");
        break;
}
