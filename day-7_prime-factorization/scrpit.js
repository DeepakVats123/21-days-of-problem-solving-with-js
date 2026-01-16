// ## **1. Find the Prime Factorization (Return as an Array)**
// - **Input:** `N = 84`
// - **Output:** `[2, 2, 3, 7]`

function primeFactorization(n) {
    let factors = [];
    let i = 2;
    while(n > 1){
        if(n%i === 0 && n > 1){
            n= n/i
            factors.push(i)
        }
        else{
            i++
        }
    }
console.log(factors);
}
primeFactorization(84)