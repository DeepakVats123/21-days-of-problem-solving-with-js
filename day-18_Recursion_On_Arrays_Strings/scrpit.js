// ### **1️⃣ Print All Elements of an Array Using Recursion**
// - **Input:** `[1, 2, 3, 4]`
// - **Output:** `1 2 3 4`  
//   Constraint: no loops allowed.

function printElementsOfArray(arr, index=0){
    
    if(index === arr.length){
        return
    }
    console.log(arr[index])
    
    printElementsOfArray(arr, index + 1)
}
// printElementsOfArray([1, 2, 3, 4])

// 2️⃣ Find the Sum of All Elements in an Array Using Recursion
// Input: [2, 4, 6, 8]
// Output: 20

function findSum(arr, index=0){
    if(index === arr.length-1) return arr[index]
    return arr[index] + findSum(arr, index+1)
}
// console.log(findSum([2, 4, 6, 8]))

// ### **3️⃣ Check if an Array Is Sorted (Ascending) Using Recursion**
// - **Input:** `[1, 2, 3, 5, 4]`
// - **Output:** `false`

function findIsSorted(arr, index){
    if(index === arr.length-1) return true;
    if(arr[index] > arr[index+1]){
        return false
    }
    return findIsSorted(arr, index+1)
}
// console.log(findIsSorted([1, 2, 3, 4, 5],0))

// ### **4️⃣ Reverse a String Using Recursion**
// - **Input:** `"hello"`
// - **Output:** `"olleh"

function reverseString(str, index=str.length-1){
   if(index < 0){
        return ""
    }
    
    return str[index] + reverseString(str, index-1)
}
// console.log(reverseString("hello"))

// ### **5️⃣ Check if a String Is Palindrome Using Recursion**
// - **Input:** `"madam"`
// - **Output:** `Palindrome`

function checkPalindrome(str, index=str.length-1){
    if(index < 0){
        return ""
    }
    
    return str[index] + checkPalindrome(str, index-1) === str
}
// console.log(checkPalindrome("hello"))
