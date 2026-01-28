// 1. **Find the Maximum of Three Numbers**
// * Input: `10 20 5`
// * Output: `20`

function findMax(a, b, c) {
    // using logic
    // if(a > b && a > c){
    //     return a;
    // }
    // else if(b > a && b > c){
    //     return b;
    // }
    // else {
    //     return c;
    // }

    // using inbuild method
    return Math.max(a,b,c);
}
// console.log(findMax(10, 20, 5))

// 2. **Check if a Number is Positive, Negative, or Zero**
//    * Input: `-9`
//    * Output: `Negative`

function checkNumber(N){
    // using conditions 
    // if(N < 0){
    //     return "Negative"
    // }
    // else if(N > 0){
    //     return "Positive"
    // }
    // return "Zero"

    return N === 0 ? "Zero" : N > 0 ? "Positive" : "Negative"
}
// console.log(checkNumber(-9));

/*
3. **Calculate Electricity Bill** --------------------------------

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
*/

function CalculateElectricityBill(units){
    let bill = 0;
    if (units > 300){
      bill = 12 * (units - 300) + 
      100 * 10 +
      100 * 7 +
      100 * 5
    }
    else if (units < 300 && units > 200){
      bill = 10 * (units - 200) +
       100 * 7 +
       100 * 5
    }
    else if (units < 200 && units > 100){
      bill = 7 * (units - 100) +
       100 * 5
    }
    else {
        bill = units * 5
    }
    return `Bill = ${bill}`
}
// console.log(CalculateElectricityBill(230))

// 4. **Check if a Character is a Vowel or Consonant**
//    * Input: `e`
//    * Output: `Vowel`

function checkCharacter(str){
    str = str.toLowerCase()
    if( str == "a" ||
        str == "e" || 
        str == "i" || 
        str == "o" || 
        str == "u"){
        return "Vowel";
    }
    else {
        return "consonant";
    }
}
// console.log(checkCharacter("a"));

// 5. **Check if a Year is a Leap Year**
//    * Input: `2024`
//    * Output: `Leap Year`

function checkLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return `${year} is a Leap Year`
    }
    else {
        return `${year} is not a Leap Year`
    }
}
// console.log(checkLeapYear(2024))



