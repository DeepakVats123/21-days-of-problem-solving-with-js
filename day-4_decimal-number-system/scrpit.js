// input = [2,4,6,5]
// output = 5642 

// const nums = [2,4,6,5]
// let result = 0
// for(let i=nums.length-1; i>=0; i--){
//     let n = nums[i];
//     for(let j = 0; j < i; j++){
//        n =  n * 10
//     }
//     result += n
// }
// console.log(result);

// 1. **Split Number into Digits**

//    * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`

function SplitNumbers(N){
    let arr = []
   while(N > 0){

    arr.push(N%10)
    N = Math.floor(N / 10)
   }
   console.log(arr.reverse());
}
// SplitNumbers(12345)

// 2. **Remove the Decimal Point Mathematically**

//    * Input: `N = 12.34`
//    * Output: `1234

function removeDesimal(N){
    while(N % 1 !== 0){
        N = N * 10
    }
   
   console.log(N);
}
// removeDesimal(12.34)

// 3. **Separate Whole and Fractional Parts of a Number**

//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`

function returnWholeAndFrac(N){
    return `Whole = ${N % 1}, Fraction = ${N - N%1}`
}
// console.log(returnWholeAndFrac(5.75));

// 4. **Count Whole and Fractional Digits Separately**

//    * Input: `N = 12.345`
//    * Output: `Whole Count = 2, Fraction Count = 3`

function returnWholeAndFracDigitsCount(N){
    let wholeNums = Math.floor(N - N % 1) 
    let wholeNumsCount = 0
    let FractionNums = (N - wholeNums).toFixed(3)
    let FractionNumsCount = 0
    console.log(wholeNums);
    console.log(FractionNums);
    while(wholeNums > 0){
        wholeNumsCount++;
        wholeNums = Math.floor(wholeNums / 10)
    }

    while(FractionNums % 1 !== 0){
        FractionNumsCount++;
        FractionNums = FractionNums * 10
    }

    return `Whole Count = ${wholeNumsCount}, Fraction = ${FractionNumsCount}`
}
// console.log(returnWholeAndFracDigitsCount(12.345));

// 5. **Generate a Decimal Number from Whole and Fractional Digits**

//    * Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`

function GenerateDecimalNumber (whole, fraction){
    let wholeNum = 0;
    let fractionNum = 0;

    for(let i=0; i < whole.length; i++){
        wholeNum =  wholeNum * 10 + whole[i]
    }

    for(let i=0; i < fraction.length; i++){
        fractionNum =  fractionNum * 10 + fraction[i]
        // fractionNum = fractionNum / Math.pow(10, fractionNum.length)
    }
    return wholeNum  + fractionNum / 1000;
    // return fractionNum;

}
console.log(GenerateDecimalNumber([1,2], [3,4,5]));




