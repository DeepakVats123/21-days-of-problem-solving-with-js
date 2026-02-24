// ### **1️⃣ Find an Element in an Array Using Linear Search**
// - **Input:** array = `[4, 2, 7, 1, 9]`, element = `7`
// - **Output:** `Found at index 2`

function findElement(arr, el){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === el){
            return `Found ${el} at index ${i}`
        }
    }
}
// console.log(findElement([4, 2, 7, 1, 9], 7));

// ### **2️⃣ Find the First Occurrence of an Element**
// - **Input:** `[3, 5, 3, 7, 3]`, search = `3`
// - **Output:** `index 0`

const FindFirstOccurrence = (arr, el) => {
    let count = [];
    for( let i=0; i<arr.length; i++){
        if(arr[i] === el){
            count.push(i)
        }
    }
    return `index ${count[0]}`
}
// console.log(FindOccurrence([3, 5, 3, 7, 3], 3));

// ### **3️⃣ Find the Last Occurrence of an Element**
// - **Input:** `[3, 5, 3, 7, 3]`, search = `3`
// - **Output:** `index 4`

const FindLastOccurrence = (arr, el) => {
    let count = [];
    for( let i=0; i<arr.length; i++){
        if(arr[i] === el){
            count.push(i)
        }
    }
    return `index ${count[count.length-1]}`
}
// console.log(FindLastOccurrence([3, 5, 3, 7, 3], 3));

// ### **4️⃣ Count How Many Times an Element Appears**
// - **Input:** `[1, 2, 2, 3, 2, 4]`, element = `2`
// - **Output:** `3 times`

const findElemAppears = (arr, el) => {
    let count = 0;
    for(let e of arr){
        if(el === e) count++
    }
    return `${count} times`;
}
// console.log(findElemAppears([1, 2, 2, 3, 2, 4], 2));

// ### **5️⃣ Find All Indexes Where the Element Appears**
// - **Input:** `[5, 7, 5, 9, 5]`, search = `5`
// - **Output:** `[0, 2, 4]`

function FindAllIndexes(arr, target){
    let appearIndexes = [];
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === target){
            appearIndexes.push(i)
        }
    }
    return appearIndexes;
}
// console.log(FindAllIndexes([5, 7, 5, 9, 5], 5));

// ### **6️⃣ Linear Search in Array of Objects**

// - **Input:**
//   [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//     { id: 3, name: "C" },
//   ];
//   Search id = 2
// - **Output:** `{id:2, name:"B"}

function searchByID (arr, id){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === id){
            return arr[i];
        }
    }
}
// console.log(searchByID([{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" },], 2));

// ### **1️⃣ Check If an Element Exists in a 2D Array**
// - **Input:**
//   [[1, 2], [3, 4],[5, 6]]
//   search = 4
// - **Output:** `Found at position (1,1)`

function searcIn2DArr(arr, target){
    for(let i=0; i<arr.length; i++){
        let flag = false;
        let index = null
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] === target){
                index = j
                flag = true;
                break;
            }
        }
        if(flag){
            return `Found at position (${i},${index})`
        }
    }
}
// console.log(searcIn2DArr([[1, 2],[3, 4],[5, 6]], 4));

// ### **2️⃣ Find the Minimum Value Using Linear Scan**
// - **Input:** `[9, 3, 5, 1, 7]`
// - **Output:** `1`

function findMinium (arr){
    let minVal = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] < minVal){
            minVal = arr[i]
        }
    }
    return minVal;
}
// console.log(findMinium([9, 3, 5, 1, 7]));

// ### **3️⃣ Find the Maximum Value Using Linear Scan**
// - **Input:** `[4, 9, 2, 11, 6]`
// - **Output:** `11`

function findMaximum(arr){
    let maxVal = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxVal){
            maxVal = arr[i]
        }
    }
    return maxVal;
};
console.log(findMaximum([4, 9, 2, 11, 6]));