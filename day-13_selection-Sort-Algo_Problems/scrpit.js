// ### **1️⃣ Sort an Array in Ascending Order Using Selection Sort**

// - **Input:** `[7, 2, 9, 4, 1]`
// - **Output:** `[1, 2, 4, 7, 9]`

function sortInASC(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
        
    }
    return arr;
}
// console.log(sortInASC([7, 2, 9, 4, 1]));

// ### **2️⃣ Sort an Array in Descending Order**

// - **Input:** `[3, 8, 5, 2, 9]`
// - **Output:** `[9, 8, 5, 3, 2]`
function sortInDEC(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
        
    }
    return arr;
}
// console.log(sortInDEC([3, 8, 5, 2, 9]));

// ### **3️⃣ Find the Kth Smallest Element Using Selection Logic**

// - **Input:** `[9, 4, 7, 1, 3]`, `K = 3`
// - **Output:** `4`

function KthSmallest(arr, k){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
        if(i === k-1){
            return arr[i]
        }
        
    }
   
}
// console.log(KthSmallest([9, 4, 7, 1, 3],3));

// ### **4️⃣ Selection Sort but Track Index of Minimum for Each Pass**
// - **Input:** `[4, 2, 5, 3, 1]`
// - **Output:**  
//   Pass 1 → min index = 4  
//   Pass 2 → min index = 3

function trackIndex(arr){
    let minIndexes = []
    for(let i=0; i<arr.length-1; i++){
        let minInd = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]< arr[minInd]){
                minInd = j
            }
        }
        if(minInd !== i){
            let temp = arr[i];
            arr[i] = arr[minInd];
            arr[minInd] = temp;
        }
    
        minIndexes.push(minInd)
    }
    return minIndexes;
}
// console.log(trackIndex([4, 2, 5, 3, 1]));

// ### **5️⃣ Sort an Array of Objects by Name**
// - **Input:**
//   [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
// - **Output:** Sorted alphabetically by name.

function sortStringByName(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j].name[0] < arr[minIndex].name[0]){
                minIndex = j
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
        
    }
    return arr;
}
// console.log(sortStringByName([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }]));


// ### **1️⃣ Find the K Largest Elements Without Full Sorting**

// - **Input:** `[5, 1, 9, 3, 7]`, `K = 2`
// - **Output:** `[9, 7]`
//   _(Stop early once top K elements are placed.)_

function kLargestSortedElements(arr,k){
    for(let i=0; i<arr.length-1; i++){
        let largestInd = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]>arr[largestInd]){
                largestInd = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[largestInd]
        arr[largestInd] = temp
        if(i === k-1) break;
    }
    return [arr[0], arr[1]]

}
// console.log(kLargestSortedElements([5, 1, 9, 3, 7],2));

// ### **2️⃣ Sort a 2D Array by Second Element in Each Subarray**
// - **Input:** `[[3, 9], [1, 4], [2, 5]]`
// - **Output:** Sorted by second values → `[[1,4], [2,5], [3,9]]`

function sort2DArr(arr){
    for(let i=0; i<arr.length-1; i++){
        let minInd = i;
        for(let j=i+1; j< arr.length; j++){
            if(arr[j][1] < arr[minInd][1]){
                minInd = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minInd]
        arr[minInd] = temp
    }
    return arr;
}
// console.log(sort2DArr([[3, 9], [1, 4], [2, 5]]));


// ### **3️⃣ Sort an Array and Count How Many Times Minimum Changed**
// - **Input:** `[8, 3, 5, 2, 6]`
// - **Output:** Number of times a new minimum was found.

function sortAndCount (arr) {
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        let minInd = i;
        for(let j= i+1; j<arr.length; j++){
            if(arr[j] < arr[minInd]){
                minInd = j
                count++;
            }
        }
        let temp = arr[i]
        arr[i] = arr[minInd]
        arr[minInd] = temp;
    }
    return arr;
}
// console.log(sortAndCount([8, 3, 5, 2, 6]));

// ### **5️⃣ Sort an Array of Characters by ASCII Value**
// - **Input:** `['d', 'A', 'c', 'B']`
// - **Output:** Sorted by ASCII: `['A', 'B', 'c', 'd']`

const sortStringByAscii = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        let minInd = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j].charCodeAt(0) < arr[minInd].charCodeAt(0)){
                minInd = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minInd];
        arr[minInd] = temp;
    }
    return arr;
}
console.log(sortStringByAscii(['d', 'A', 'c', 'B']));