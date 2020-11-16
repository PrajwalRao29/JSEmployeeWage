var prompt = require('prompt-sync')();
console.log("Enter the number to get its harmonic number");
input=parseInt(prompt());
ans=0;
for(iterator = 1;iterator<=input;iterator++){
    ans=ans+1/iterator;
}
console.log("Harmonic number is " + ans);