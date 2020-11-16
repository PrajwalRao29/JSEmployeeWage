function isPrime(a) {
    a = parseInt(a);
    check = false;
    for (iterator = 2; iterator <=Math.sqrt(a); iterator++) {
        if (a % iterator == 0) {
            check = true;
            break;
        }
    }
    if (check)
        return false
    else
        return true;
}

function getPalindrome(a) {
    num1 = parseInt(a);
    pal = 0;
    while (num1 > 0) {
        pal = pal * 10 + num1 % 10;
        num1 = Math.floor(num1 / 10);

    }
    return pal;
}

function checkPrimePalindrome(a){
    let b=parseInt(getPalindrome(a));
    return isPrime(b);
}

console.log(checkPrimePalindrome(101));
