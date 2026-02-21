// ### **1️⃣ Sort an Array in Ascending Order Using Bubble Sort**

// - **Input:** `[5, 3, 8, 4, 2]`
// - **Output:** `[2, 3, 4, 5, 8]`

function bubbleSortASC(arr){
    let count = 0;
 for(let i=0; i<arr.length-1; i++){
    count++;
    let swaped = false;
    for(let j=0; j<arr.length-1-i; j++){
        count++
        
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swaped = true;
        }
    }
    if(!swaped) break;
 }
 console.log("count - ",count);
 return arr;
}

// console.log(bubbleSortASC([5, 3, 8, 4, 2])); 

// ---

// ### **2️⃣ Sort an Array in Descending Order Using Bubble Sort**

// - **Input:** `[7, 1, 5, 3, 2]`
// - **Output:** `[7, 5, 3, 2, 1]`

function bubbleSortDEC(arr){
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        count++;
        let swapped = false;
        for(let j=0; j< arr.length-1-i;j++){
            count++;
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    console.log("count - ", count);
    return arr

}
// console.log(bubbleSortDEC([7, 1, 5, 3, 2]))

// ---

// ### **3️⃣ Sort a String Alphabetically Using Bubble Sort Logic**

// - **Input:** `"javascript"`
// - **Output:** `"aacijprstv"`
//   _(Treat string as array of characters.)_

function bubbleSortAlphabets(str){
    let arr = str.split("")
    let count = 0;
    for(let i=0; i<arr.length-1; i++){
        count++
        let swapped = false;
        for(let j=0; j < arr.length-1-i; j++){
            count++
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                swapped = true
            }
        }
        if(!swapped) break;
    }
    console.log(count);
    return arr.join("")
}
// console.log(bubbleSortAlphabets("javascript"))

// ---

// ### **4️⃣ Sort an Array and Count the Number of Swaps Performed**

// - **Input:** `[4, 3, 2, 1]`
// - **Output:**

//   - Sorted: `[1,2,3,4]`
//   - Swaps: `6`

function bubbleSortASCSwapCount(arr){
    let count = 0;
 for(let i=0; i<arr.length-1; i++){
    let swaped = false;
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swaped = true;
            count++
        }
    }
    if(!swaped) break;
 }
 return count;
}
// console.log(bubbleSortASCSwapCount([4, 3, 2, 1]));

// # 🏠 **Homework Questions**

// ---

// ### **1️⃣ Sort an Array of Objects by Age (Ascending)**

// - **Input:**
//   ```js
//   [
//     { name: "A", age: 25 },
//     { name: "B", age: 20 },
//     { name: "C", age: 30 },
//   ];
//   ```
// - **Output:** Sorted by `age`.

function sortByAge(arr){
    for(let i=0; i<arr.length-1; i++){
        let swapped = false;
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].age > arr[j+1].age){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}
// console.log(sortByAge([
//     { name: "A", age: 25 },
//     { name: "B", age: 20 },
//     { name: "C", age: 30 },
//   ]));



// ### **2️⃣ Sort an Array but Keep Zeros at the End (Zeros Fixed)**

// - **Input:** `[3, 0, 5, 0, 2, 1]`
// - **Output:** `[1, 2, 3, 5, 0, 0]`

function sortAndKeepZerosToEnd(arr){
    let count = 0;
 for(let i=0; i<arr.length-1; i++){
    count++;
    let swaped = false;
    for(let j=0; j<arr.length-1-i; j++){
        count++
        
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swaped = true;
        }
        if(arr[j] === 0){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
     if(!swaped) break;
   
 }
 console.log("count - ",count);
 return arr;
}
// console.log(sortAndKeepZerosToEnd([3, 0, 5, 0, 2, 1]));

// ### **4️⃣ Sort an Array of Characters Case-Insensitive**

// - **Input:** `['b', 'A', 'd', 'C']`
// - **Output:** `['A', 'b', 'C', 'd']

function sortCharacters(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].toLowerCase() > arr[j+1].toLowerCase()){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
// console.log(sortCharacters(['b', 'A', 'd', 'C']))

// ### **5️⃣ Sort a 2D Array by the First Element of Each Subarray**
// - **Input:**
//   [[3, "c"], [1, "a"], [2, "b"]]
// - **Output:**
//   [[1, "a"], [2, "b"], [3, "c"]]

function sort2DArr(arr){
     for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j][0] > arr[j+1][0]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
// console.log(sort2DArr([[3, "c"], [1, "a"], [2, "b"]]));

// ### **6️⃣ Sort an Array in Ascending Order but Stop After K Passes**

// - **Input:** `[5, 4, 3, 2, 1]`, K = 2
// - **Output:** Array state after 2 bubble sort passes.

function ArrayInASC (arr, K){
    let count = 0;
     for(let i=0; i<arr.length-1; i++){
        count++;
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(count === K) break;
    }
    return arr

}
// console.log(ArrayInASC([5, 4, 3, 2, 1], 2));

// ### **7️⃣ Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)**

// - **Input:** `[9, 4, 2, 7, 6, 5]`
// - **Output:** `[9, 2, 4, 7, 6, 5]`
//   _(Sort evens using bubble sort while keeping odd numbers fixed.)_

function sortOnlyEvens(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1] && arr[j]%2 === 0 && arr[j+1]%2 === 0){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
// console.log(sortOnlyEvens([9, 4, 2, 7, 6, 5]));

// ### **8️⃣ Sort an Array of Strings by Length (Shortest to Longest)**

// - **Input:** `["hi", "javascript", "is", "fun"]`
// - **Output:** `["hi", "is", "fun", "javascript"]`

function sortArrOfStringsByLength(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].length > arr[j+1].length){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
// console.log(sortArrOfStringsByLength(["hi", "javascript", "is", "fun"]));