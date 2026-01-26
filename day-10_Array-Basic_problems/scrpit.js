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
    
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
