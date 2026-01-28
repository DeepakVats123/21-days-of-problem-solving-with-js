// ### 1️⃣ Find the Maximum and Minimum Element
// * **Input:** `[10, 25, 3, 18]`
// * **Output:** `Max = 25`, `Min = 3`

function findMaxandMinElement(arr){
    let max = -Infinity;
    let min = Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    return (`Max=${max} Min=${min}`);
}
// console.log(findMaxandMinElement([10, 25, 3, 18]));

// ### 2️⃣ Reverse an Array (Manual Method Only)
// * **Input:** `[1, 2, 3, 4, 5]`
// * **Output:** `[5, 4, 3, 2, 1]`

function ReverseArr(arr){
    let i = 0;
    let j = arr.length-1;

    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
        i++;
        j--;
    }
    return arr;
}
// console.log(ReverseArr([1, 2, 3, 4, 5]));

// ### 3️⃣ Check if an Array is Sorted (Ascending)
// * **Input:** `[1, 2, 3, 4, 5]`
// * **Output:** `Sorted`

function sortInAscending(arr){
    let flag = true;
    for(let i=0; i<=arr.length-2; i++){
        if(arr[i] > arr[i+1]){
            flag = false
        }
    }
    return flag
}
// console.log(sortInAscending([1, 2, 3, 4, 5]))

// ### 4️⃣ Remove All Duplicates From an Array (Use filter method)
// * **Input:** `[1, 2, 2, 3, 3, 4]`
// * **Output:** `[1, 2, 3, 4]`

function removeDuplicates(arr){
    // Good approch for interview also
    // let resObj = {}
    // for(let i=0; i<arr.length; i++){
    //     if(resObj[arr[i]]){
    //        resObj[arr[i]] += 1;
    //     }
    //     else{
    //         resObj[arr[i]] = 1;
    //     }
    // }
    // return Object.keys(resObj).map(el=> Number(el))


    // another approch using arr.filter() and arr.indexOf()
    return arr.filter((el, i) => i === arr.indexOf(el));
}
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// ### 5️⃣ Merge Two Arrays Without Using concat or spread
// * **Input:** ``
// * **Output:** `[1, 2, 3, 4, 5]`

function mergeArr (arr1, arr2){
    // using spred opratar the best approch
    return [...arr1, ...arr2]

    //using inbuit method
    // return arr1.concat(arr2);

    // this is another approch without loop
    // return arr1.push(...arr2)

    // using loop
    // for(let i=0; i<arr2.length; i++){
    //     arr1.push(arr2[i])
    // }
    // return arr1


}
// console.log(mergeArr([1, 2, 3], [4, 5]));


// ### 1️⃣ Find the Second Largest Element
// * **Input:** `[10, 20, 4, 45, 99]`
// * **Output:** `45`

function secondLargest(arr){
    let largest = arr[0]
    let secLargest = arr[0]

    for(let i=0; i<arr.length; i++){
        
        if(largest < arr[i]){
            secLargest = largest;
            largest = arr[i]
        }
        else if(arr[i] > secLargest && arr[i] !== largest){
            secLargest = arr[i];
        }
    }
    return secLargest
}
// console.log(secondLargest([10, 20, 4, 45, 99]));

// ### 2️⃣ Rotate an Array to the Right by K Steps
// * **Input:** `[1, 2, 3, 4, 5]`, `K = 2`
// * **Output:** `[4, 5, 1, 2, 3]`

function rotateArray (arr, k){
    // basic solution using inbuid methods
    // for(let i=0; i<k; i++){
    //     arr.unshift(arr[arr.length-1])
    //     arr.pop() 
    // }
    
    // return arr;

    // optimise solution using logic
    console.log("k before ", k);
    const n = arr.length;
    k = k % n; // handle k > n
    console.log("k after ", k);
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    console.log(arr);
}
// console.log(rotateArray([1, 2, 3, 4, 5],6));


// ### 3️⃣ Check if Two Arrays Are Equal (Same Order)
// * **Input:** `[1, 2, 3]` vs `[1, 2, 3]`
// * **Output:** `Equal`

function areEqual(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return "Not Equal"
        }
    }
    return "Equal"
}
// console.log(areEqual([1, 2, 3], [1, 2, 3]));

// ### 4️⃣ Count Even and Odd Numbers in an Array
// * **Input:** `[2, 5, 7, 8, 10]`
// * **Output:** `Even = 3`, `Odd = 2

function CountEvenOdd(arr){
    let Evens = 0;
    let Odds = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            Evens++;
        }
        else{
            Odds++
        }
    }
    return `Even = ${Evens} Odd = ${Odds}`
}
// console.log(CountEvenOdd([2, 5, 7, 8, 10]));


// ### 5️⃣ Find All Unique Pairs Whose Sum Equals a Target
// * **Input:** `[1, 2, 3, 4, 5]`, target = 6
// * **Output:** `(1,5), (2,4)`

function findUniquePairs(arr, target){
    let left = 0;
    let right = arr.length-1
    let output = [];
    while(left < right){
        if(arr[left] + arr[right] === target){
            let values = [arr[left], arr[right]]
            output.push(values);
            left++;
            right--;
        }
        else if(arr[left] + arr[right] < target){
            left++
        }
        else if(arr[left] + arr[right] > target){
            right--
        }
    }
    return output;
}
// console.log(findUniquePairs([1, 2, 3, 4, 5,6,7,8,9,10],8))



// ### 6️⃣ Left Shift an Array by One Position
// * **Input:** `[1, 2, 3, 4]`
// * **Output:** `[2, 3, 4, 1]`
//   ✨ Manual shifting, moving first element to end.

function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
    console.log("reverse Arr- ", arr);
}
function leftShiftByOnePosition(arr){
    let n = arr.length-1;
    reverse(arr, 0, n );
    reverse(arr, 0, n-1 );
    return arr;
}
console.log(leftShiftByOnePosition([1, 2, 3, 4]));


// ### 7️⃣ Count How Many Times an Element Appears in an Array
// * **Input:** array = `[1, 4, 4, 4, 2]`, element = `4`
// * **Output:** `3`

function countElementAppears (arr, element){
    let count = 0;
    for(el of arr){
        if(el === element) count++;
    }
    return count;
}
// console.log(countElementAppears([1, 4, 4, 4, 2],4));