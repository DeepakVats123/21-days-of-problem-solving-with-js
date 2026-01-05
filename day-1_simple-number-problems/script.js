// 1. **Print Numbers from 1 to N**

function printNumbers(N){
    for(let i=1; i<=N; i++){
        console.log(i)
    }
}
// printNumbers(5);

// 2. **Print Numbers from N to 1 without changing the loop condition of above question**

function printNumbersFromNto1(N){
    for(let i=N; i>= 1; i--){
        console.log(i)
    }
}
// printNumbersFromNto1(5)

//3. **Print All Even Numbers from 1 to N**

function printAllEvenNumbers (N) {
    for(let i=1; i<=N; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}
// printAllEvenNumbers(10)

// 4. **Sum of First N Natural Numbers**

function sumOfNaturalNumbers(N){
    let sum = 0;
    // for(let i=1; i<=N; i++){
    //     sum += i;
    // }

    // Optimize solution
    sum = N * (N +1) / 2

    console.log(sum);
}

sumOfNaturalNumbers(5)

// 5. **Product (Factorial) of N**

function factorialOfN(N){
    let product = 1;
    for(let i=1; i<=N; i++){
        product *= i;
    }
    console.log(product);
}
// factorialOfN(5)

// 6. **Sum of All Even Numbers up to N**

function sumOfAllEven (N) {
    let sum = 0;
    for(let i=1; i<=N; i++){
        if(i%2 === 0){
            sum += i;
        }
    }
    console.log(sum);
}
// sumOfAllEven(10);

// 7. **Print Squares of Numbers from 1 to N**

function printSquares(N){
    for(let i=1; i<=N; i++){
        // console.log(i*i);
        // console.log(i**2);
        console.log(Math.pow(i, 2));
    }
}
printSquares(5)

// ### 🏠 **Homework / Practice Challenge**--------------

// 1. **Print all numbers divisible by 3 and 5 up to N**

function divisibleBy3and5 (N) {
    for(let i=1; i<=N; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log(i)
        }
    }
}
// divisibleBy3and5(30)

// 2. **Find the sum of all odd numbers up to N**

function sumOfAllOdd (N) {
    let sum = 0;
    for(let i=1; i<=N; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }
    console.log(sum);
}
// sumOfAllOdd(10);

// 3. **Print the cubes of numbers from 1 to N**

function printCubes(N){
    for(let i=1; i<=N; i++){
        console.log(i**3);
    }
}
// printCubes(5)

// 4. **Print only the numbers that are both even and perfect squares**

function evenAndPerfectSqure(N){
    for(let i=1; i<=N; i++){
        let squre = i**2;

        if(squre%2 === 0 && squre < 20){
            console.log(squre);
        }
    }
}
// evenAndPerfectSqure(10)





