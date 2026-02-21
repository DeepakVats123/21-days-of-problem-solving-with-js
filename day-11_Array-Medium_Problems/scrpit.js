// ### **1️⃣ Find Missing Number from Range 1 to N**
// - **Input:** `[1, 5, 2, 4]`
// - **Output:** `3`

function findMissing(arr){
    let n = arr.length + 1;
    let sum = (n * (n+1)) / 2;
    let actualSum = 0;
    for(let el of arr){
        actualSum += el
    }
    return sum - actualSum;
}
// console.log(findMissing([1, 5, 2, 4]));

// ### **2️⃣ Move All Zeroes to End (Stable, O(n))**
// - **Input:** `[0, 1, 0, 3, 12]`
// - **Output:** `[1, 3, 12, 0, 0]`

function moveZerosToEnd(arr){
    let left = 0;
    let right = arr.length-1;
    let count = 0
    while(left < right){
        count++;
        if(arr[left] === 0){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            right--;
        }
        left++;
    }
    console.log("count ", count);
    return arr;
}
// console.log(moveZerosToEnd([0, 1, 0, 3, 12]))

// ### **3️⃣ Find the First Repeating Element in an Array**
// - **Input:** `[10, 5, 3, 4, 3, 5, 6]`
// - **Output:** `5`

function findFirstRepeating(arr){
    // its not a goog approch because time complexcity is O(n^2);
    // let el = null;
    // for(let i=0; i<arr.length-1; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i] === arr[j]){
    //             el = arr[i];
    //             break;
    //         }
    //     }
    //     if(el) {
    //         return el
    //     }
    // }

    // this solution is optimised 
    let obj = {}
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        }
        else{
            obj[arr[i]] = 1
        }
    }

    for(let el of arr){
        if(obj[el] > 1){
            return el
        }
    }

    
}
// console.log(findFirstRepeating([10, 5, 3, 4, 3, 5, 6]))

// ### **4️⃣ Maximum Subarray Sum (Kadane’s Algorithm – O(n))**
// - **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
// - **Output:** `6`

function maxSubArraySum (arr){
    let maxSum = -Infinity;
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        if(sum > maxSum){
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}
// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// # 🏠 **Homework Questions**

// ### **1️⃣ Find the Longest Subarray with Sum = K (Optimized)**
// - **Input:** `[1, 2, 3, 4, 5]`, K = 9
// - **Output:** `[2, 3, 4]`

function findSubarraySumWithK (arr, k){
    let subArr = []

    for(let i=0; i<arr.length; i++){
        let sum = 0;
        for(let j = i; j<arr.length; j++){
            sum += arr[j]
            subArr.push(arr[j])
            if(sum === k){
                break;
            }  
        }
        if(sum === k) break;
        else subArr = [];
    }
    return subArr
}
// console.log(findSubarraySumWithK([1, 2, 3, 4, 5], 9));


// ### **2️⃣ Find the Length of the Longest Subarray with No Repeating Elements**
// - **Input:** `[1,2,3,1,2,3,4]`
// - **Output:** `4`

function longestSubArrayWithNoRepeating(arr){
    let maxLength = 0;

    for(let i=0; i<arr.length; i++){
        
    }
}
console.log(longestSubArrayWithNoRepeating([1,2,3,1,2,3,4]));