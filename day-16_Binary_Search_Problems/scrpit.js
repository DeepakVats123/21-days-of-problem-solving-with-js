// ### **1️⃣ Find an Element Using Binary Search**
// - **Input:** `[1, 3, 5, 7, 9]`, search = `7`
// - **Output:** `3`
//   - Return -1 If Element Is Not Found

function findElement (arr, target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start + end)/2 )
        if(arr[mid] === target) return mid;
        
        if(arr[mid] < target){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return -1;
}
// console.log(findElement([1, 3, 5, 7, 9], 5));

// ### **2️⃣ Find the First Occurrence of a Repeated Number**
// - **Input:** `[2, 4, 4, 4, 9, 11]`, search = `4`
// - **Output:** `index 1`

function firstOccurrence(arr, target){
    let start = 0;
    let end = arr.length-1;
    let targetInd = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === target){
            targetInd = mid;
            end = mid-1;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return targetInd;
}
// console.log(firstOccurrence([2, 4, 4, 4, 9, 11], 4));

// ### **3️⃣ Find the Last Occurrence of a Repeated Number**
// - **Input:** `[2, 4, 4, 4, 9, 11]`, search = `4`
// - **Output:** `index 3`

function FindLastOccurrence(arr, target){
    let start = 0;
    let end = arr.length-1;
    let index = -1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === target){
            index = mid
            start = mid+1;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return index;
}
// console.log(FindLastOccurrence([2, 4, 4, 4, 9, 11], 4));

// # 🏠 **Homework Questions**


// ### **1️⃣ Find the Smallest Element Greater Than a Given Value**
// - **Input:** `[3, 5, 8, 12, 17]`, search = `10`
// - **Output:** `12`

function findSmallestUsingBinarySearch(arr, target){
    if(!arr.length) return -1;
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2)

        if(arr[mid] < target && arr[mid+1] > target && mid+1 < arr.length){
            return arr[mid]
        }
        else if(mid+1 === arr.length) return arr[mid]
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1
        }
    }
}
// console.log(findSmallestUsingBinarySearch([3, 5, 8, 12, 17], 18));

// ### **2️⃣ Find the Greatest Element Smaller Than a Given Value**
// - **Input:** `[3, 5, 8, 12, 17]`, search = `10`
// - **Output:** `8`

function findGratestUsingBinarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);
        console.log(mid);
        if(arr[mid] > target && arr[mid-1] < target){
            console.log("working");
            return arr[mid-1]
        }
        else if(mid === 0) return arr[mid];

        else if(mid === arr.length-1) return arr[mid]
        

        else if(arr[mid] < target){
            start = mid+1;
        }else{
            end = mid-1
        }
    }
}
console.log(findGratestUsingBinarySearch([3, 5, 8, 12, 17], 18));