
let heads=0;
let tails=0;
andom = 0;
while (heads < 11 && tails < 11) {
    if (Math.random() < .5) {
        console.log("HEADS");
        heads++;
    }
    else {
        console.log("TAILS");
        tails++;
    }
}
