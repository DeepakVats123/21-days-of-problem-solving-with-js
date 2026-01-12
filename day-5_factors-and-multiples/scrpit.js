// 1. **Print All Factors of a Number**
function printFactors(N){
    const FactorsArr = [];
    for(let i=1; i<=N; i++){
        if(N%i === 0){
            FactorsArr.push(i);
        }
    }
    console.log(FactorsArr);
}
// printFactors(24)


// 2. **Print All Multiples of a Number up to N**
//    * **Input:** `Number = 4, Limit = 30`

function printAllMultiples(N, limit){
    let i = 1;
    while(N * i < limit){
        console.log(N*i)
        i++;
    }   
}
// printAllMultiples(4, 30)

// **Find the HCF (Highest Common Factor) or GCD of Two Numbers**
//    * **Input:** `12, 18`

function findHCF(N,M){
    let Factors = [];
    for(let i=1; i<=M; i++){
        if(N % i === 0 && M % i === 0){
            Factors.push(i)
        }
    }
    console.log(Factors[Factors.length-1]);
}
// findHCF(12, 18)


// 4. **Find the LCM (Least Common Multiple) of Two Numbers**
//    * **Input:** `12, 18`

function findLCM(N,M){
    let Factors = []
    let LCM = 1;
    for(let i=1; i<=M; i++){
        if(N % i === 0 && M % i === 0){
            Factors.push(i);
            LCM *= i
        }
    }
    console.log(LCM);
}
// findLCM(12, 18)

// Home Work ------------------------------------------------------------------

// 1. **Count the Total Number of Factors of a Number**
//    * **Input:** `N = 24`
//    * **Output:** `8 Factors`

function printFactorsTotal(N){
    const FactorsArr = [];
    let count = 0;
    for(let i=1; i<=N; i++){
        if(N%i === 0){
            FactorsArr.push(i);
            count++;
        }
    }
    console.log(count);
}
// printFactorsTotal(24)

// 2. **Sum of All Factors of a Number**
//    * **Input:** `N = 12`
//    * **Output:** `Sum = 28

function printFactorsSum(N){
    const FactorsArr = [];
    let sum = 0;
    for(let i=1; i<=N; i++){
        if(N%i === 0){
            FactorsArr.push(i);
            sum += i;
        }
    }
    console.log(sum);
}
// printFactorsSum(12);

// 3. **Find the Greatest Factor of a Number (Other Than Itself)**
//    * **Input:** `N = 36`
//    * **Output:** `18`

function print2ndGratestFactor(N){
    const FactorsArr = [];
    for(let i=1; i<=N; i++){
        if(N%i === 0){
            FactorsArr.push(i);
        }
    }
    console.log(FactorsArr[FactorsArr.length-2]);
}
// print2ndGratestFactor(36);

// 4. **Check if a Number is a Perfect Number**
//    * **Input:** `N = 28`
//    * **Output:** `Perfect Number`

function checkPerfectNumber(N){
    let sum = 0;
    for(let i=1; i<=N/2; i++){
        if(N%i === 0){
            sum += i;
        }
    }
    console.log(sum === N ? "Perfect Number" : " Not a Perfect Number")
    console.log(sum)
}
// checkPerfectNumber(28);

