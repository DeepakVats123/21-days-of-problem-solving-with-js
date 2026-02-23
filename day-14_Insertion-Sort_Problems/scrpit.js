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
 console.log(insertionSortAndAddNewEle([1, 3, 5, 6],4));
