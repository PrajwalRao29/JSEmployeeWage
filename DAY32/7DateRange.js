var date1 = "03/20";
var date2 = "06/20";

const prompt = require('prompt-sync')();

var date = prompt('Enter the date in MM/DD/YYYY format: ');
let str1 = date1.split("/");
let str2 = date2.split("/");
let str3 = date.split("/");

if(str1[0] <= str3[0] && str2[0] >= str3[0]){
    if(str3[0] == str1[0]){
        if(str3[1] > str1[1])
            console.log("True");
        else
            console.log("False");
    }
    else if(str3[0] == str2[0]){
        if(str3[1] < str2[1])
            console.log("True");
        else
            console.log("False");
    }

    else
        console.log("True");
}
else
    console.log("False");