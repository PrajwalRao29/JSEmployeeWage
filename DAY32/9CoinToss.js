const HEAD = 1;
const TAIL = 0;

let toss = Math.floor(Math.random() * 2) % 2;
if(toss == TAIL)
    console.log("TAIL")
else
    console.log("HEAD")
