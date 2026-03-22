// ### **1️⃣ Sort an Array in Ascending Order Using Insertion Sort**
// * **Input:** `[9, 5, 1, 4, 3]`
// * **Output:** `[1, 3, 4, 5, 9]`

const insertionSortASC = (arr) => {
    for(let i=1; i<arr.length; i++){
        let currEle = arr[i];
        let j = i-1;
        while(j >= 0 && currEle < arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currEle;
    }
    return arr;
}
// console.log(insertionSortASC([9, 5, 1, 4, 3]))


// ### **2️⃣ Sort an Array in Descending Order**
// * **Input:** `[3, 8, 2, 7, 4]`
// * **Output:** `[8, 7, 4, 3, 2]`

function insertionSortDESC (arr) {
    for(let i=1; i < arr.length; i++){
        let currEle = arr[i];
        let j = i-1;
        while(j >= 0 && currEle > arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currEle;
    }
    return arr;
}
// console.log(insertionSortDESC([3, 8, 2, 7, 4]));

// ### **3️⃣ Insert a New Element into an Already Sorted Array (Using Insertion Logic)
// * **Input:** Sorted: `[1, 3, 5, 6]`, New element: `4`
// * **Output:** `[1, 3, 4, 5, 6]`

const insertionSortAndAddNewEle = (arr, newEle) => {
    arr.push(newEle);
    for(let i=1; i<arr.length; i++){
        let currEle = arr[i];
        let j = i-1;
        while(j >= 0 && currEle < arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currEle;
    }
    return arr;
}
//  console.log(insertionSortAndAddNewEle([1, 3, 5, 6],4));

// ### **1️⃣ Sort an Array but Keep Odd Numbers Fixed**
// * **Input:** `[9, 4, 7, 6, 3, 2]`
// * **Output:** Sort evens only, odd positions unchanged.

function sortOnlyEven(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j >= 0 && current > arr[j] && arr[j]%2 === 0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
console.log(sortOnlyEven([9, 4, 7, 6, 3, 2]));
