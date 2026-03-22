// ### **1️⃣ Print Numbers from 1 to N Using Recursion**
// - **Input:** `N = 5`
// - **Output:** `1 2 3 4 5`

function printNumbersToN(N){
    if(N > 1) {
        printNumbersToN(N-1)
    }
    console.log(N)
}
// printNumbersToN(5)

// ### **2️⃣ Print Numbers from N to 1 Using Recursion**
// - **Input:** `N = 5`
// - **Output:** `5 4 3 2 1`

const printNumberFrom1ToN = (N) =>{
    if(N === 0) return;
    console.log(N);
    printNumberFrom1ToN(N-1)
}
// printNumberFrom1ToN(5);

// ### **3️⃣ Find Factorial of a Number Using Recursion**
// - **Input:** `N = 5`
// - **Output:** `120`

function findFactorial(N){

    if(N===1) return 1
    return N * findFactorial(N-1)
}
// console.log(findFactorial(5));
// 5 * findFactorial(5-1 = 4)
// 4 * findFactorial(4-1 = 3)
// 3 * findFactorial(3-1 = 2)
// 2 * findFactorial(2-1 = 1)
// 1 
// = 120

// ### **4️⃣ Find the Sum of First N Natural Numbers Using Recursion**
// - **Input:** `N = 4`
// - **Output:** `10`

function sumOfNaturalNumbers(N){
    if(N === 1) return 1;
    return N + sumOfNaturalNumbers(N-1)
}
// console.log(sumOfNaturalNumbers(4));


// ### **5️⃣ Calculate Power Using Recursion**
// - **Input:** `a = 2, n = 5`
// - **Output:** `32`
//   _(Compute aⁿ recursively.)_

function calculatePower(a, n){
    if(n === 1) return a;
    return a * calculatePower(a, n-1);
}
// console.log(calculatePower(2, 5))



// ## 🏠 **Homework Questions**

// ---

// ### **1️⃣ Find the Sum of Digits of a Number Using Recursion**

// - **Input:** `N = 1234`
// - **Output:** `10`

function findSumOfDigits(N){
    if(N === 0) return 0
    return N%10 + findSumOfDigits(Math.floor(N/10))
    
}
// console.log(findSumOfDigits(1234));

// ### **2️⃣ Reverse a Number Using Recursion**

// - **Input:** `N = 123`
// - **Output:** `321`

function reverseNumber (num, output=0){
    /*  
        output = 0
        last digit = num % 10
        output = output * 10 + lastdight

    */
    if(num === 0){
       return output
    }

    let lastDigit = num % 10; 
    output = output * 10 + lastDigit;

    return reverseNumber(Math.floor(num / 10), output)
}
// console.log(reverseNumber(1234))

// ### **3️⃣ Find the Product of Digits of a Number Using Recursion**
// - **Input:** `N = 234`
// - **Output:** `24`

function productOfDigits(n, output=1){
    if(n===0) return output

    let lastDigit = n % 10;

    output = output * lastDigit;

    return productOfDigits(Math.floor(n/10), output)
}
// console.log(productOfDigits(234));

// ### **4️⃣ Check if a Number is Palindrome Using Recursion**

// - **Input:** `N = 121`
// - **Output:** `Palindrome`

function checkPalindrome(n){
    
}
console.log(checkPalindrome(121));