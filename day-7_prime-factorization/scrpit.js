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
    return factors;

}
// console.log(primeFactorization(84));

// ## **2. Factorization in Exponent Form**
// - **Input:** `N = 360`
// - **Output:** `"2^3 × 3^2 × 5^1"`

function FactorizationInExponent (n){
   let factors = [];
   let ExponentForm = ""
    let i = 2;
    let count = 0;
    while(n > 1){
        if(n%i === 0 && n > 0){
            n= n/i
            factors.push(i)
            count++;
            if(n===1){
              ExponentForm += ` x ${i}^${count}`  
            }
        }
        else{
            if(!ExponentForm && count){
                ExponentForm += `${i}^${count}`
            }
            else if (count){
                ExponentForm += ` x ${i}^${count}`
            }
            i++;
            count = 0;
        }
    }
    console.log("factors", factors);
    console.log("ExponentForm", ExponentForm);
    return factors;
}
// console.log(FactorizationInExponent(84));

// 2nd trick
function FactorizationInExponentTrick2(n){
    const factors = primeFactorization(n)
    const facObj = {};
    let exponentForm = "";
    factors.forEach((key)=>{
        facObj[key] ? facObj[key] += 1 : facObj[key] = 1
    })
    Object.keys(facObj).forEach((el, i) => {
        exponentForm += (i === 0 ? "" : " x ") + `${el}^${facObj[el]}`
    })
    console.log("exponentForm", exponentForm);
}
// FactorizationInExponentTrick2(360)


// ## **3. Distinct Prime Factor Count**
// - **Input:** `N = 100`
// - **Output:** `Distinct Prime Factors = 2`
function DistinctPrimeFactorCount(N){
    const factors = primeFactorization(N);
    const facObj = {}
    console.log(factors);
    factors.forEach((el)=>{
        facObj[el] ? facObj[el] += 1 : facObj[el] = 1;
    })
    return Object.keys(facObj).length
}
// console.log(DistinctPrimeFactorCount(100));

// ## **4. Check if a Number Is a Powerful Number**
// - **Input:** `N = 36`
// - **Output:** `Powerful Number`
//   (36 → 2² × 3² → all exponents ≥ 2)

function isPowerFulNumber(N){
    const factors = primeFactorization(N)
    const facObj = {}
    console.log(factors);
    factors.forEach((el)=>{
        facObj[el] ? facObj[el] += 1 : facObj[el] = 1;
    })
    const keys = Object.values(facObj);
    console.log("keys", keys);
    let flag = true;
    for(let el of keys ){
        if(el < 2){
            flag = false;
            break
        }
    }
    return flag ? "Powerful Number" : "Not a Powerful Number"
}
console.log(isPowerFulNumber(40));