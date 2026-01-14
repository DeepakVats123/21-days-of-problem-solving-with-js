// 1. **Check if a Number is Prime**

function isPrime(N){
 let count = 0;
 for(let i=2; i<N; i++){
    if(N%i === 0){
        count++;
        break;
    }
 }
 return count === 0 ? true : false 
}
// console.log(isPrime(7));


// 2. **Check if two Numbers are Co-Prime**
//    - **Input:** `(7, 8)`
//    - **Output:** `Co-Prime`

function findCoPrime(n, m){
    let hcf = 0;
    for(let i=1; i<n; i++){ 
        if(n%i === 0 && m%i === 0){
            hcf = i
            
        }

    }
    // if hcf is 1 then its a co prime 
    return hcf === 1 ? "Co-Prime" : "Not co-prime";
}
// console.log(findCoPrime(6,8)); 

// 3. **Print Fibonacci Series up to N Terms**
//    - **Input:** `N = 10`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

function fibonacci(N){
    const series = [0,1];

    for(let i=2; i<N; i++){
        series.push(series[i-2] + series[i-1])
    }

    console.log(series);
}
// fibonacci(10);

// 4. **Find the Nth Fibonacci Number**
//    - **Input:** `N = 8`
//    - **Output:** `13`

function Nthfibonacci(N){
    const series = [0,1];

    for(let i=2; i<N; i++){
        series.push(series[i-2] + series[i-1])
    }

    console.log(series[N-1]);
}
// Nthfibonacci(8)



// 5. **Check if a Number Belongs to the Fibonacci Series**
//    - **Input:** `21`
//    - **Output:** `Yes`

function findNumInfibonacci(N){
    const series = [0,1];

    for(let i=2; true; i++){
        const nextNum = series[i-2] + series[i-1]
        series.push(nextNum)
        if(N === nextNum || N === 0) return true;
        if(nextNum > N) break;
    }

    return false;
}
// console.log(findNumInfibonacci(21));



// ## 🏠 **Homework Questions**------------------

// 1. **Print All Prime Numbers up to N**
//    - **Input:** `N = 20`
//    - **Output:** `2, 3, 5, 7, 11, 13, 17, 19`

function printAllPrimes(N){
    let primeNums = [];
    for(let i=2; i<=N; i++){
        if(isPrime(i)){
            primeNums.push(i)
        }
    }
    console.log(primeNums);
}
// printAllPrimes(20);


// 2. **Sum of All Prime Numbers till N**
//    - **Input:** `N = 10`
//    - **Output:** `Sum = 17`

function printSumOfAllPrimes(N){
    let sum = 0;
    for(let i=2; i<=N; i++){
        if(isPrime(i)){
            sum += i
        }
    }
    console.log(sum);
}
// printSumOfAllPrimes(10);

// 3. **Check if Two Numbers are Twin Primes**
//    - **Input:** `(3, 5)`
//    - **Output:** `Twin Primes`
// if both nums are prime and there difference is 2 then they are twin prime (5-3 = 2)

function checkTwinPrime(n, m){
    if(isPrime(n) && isPrime(m) && m-n === 2){
        console.log("Twin Primes");
    }
    else{
        console.log("Not Twin Primes");
    }
}
// checkTwinPrime(3,5)


// 4. **Print All Fibonacci Numbers up to a Given Limit**
//    - **Input:** `Limit = 100`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

function fibonacciupToLimit(N){
    const series = [0,1];

    for(let i=2; true; i++){
        const nextnum = series[i-2] + series[i-1]
        if(nextnum > N){
            break;
        }
        series.push(nextnum)
    }
    console.log(series);
}
// fibonacciupToLimit(100);



