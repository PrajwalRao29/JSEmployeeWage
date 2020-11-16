let BET = 1;
let WIN = 1;
let stash = 100;

while (stash != 0 && stash != 200){
    let choice = Math.floor(Math.random() * 2) % 2;
    if(choice == BET){
        let result = Math.floor(Math.random() * 2) % 2;
        if(result == WIN)
            stash++ ;
        else
            stash-- ;
    }
}

if(stash == 0)
    console.log("The Gambler Lost !!")
else if(stash == 200)
    console.log("The Gambler Won !!")
