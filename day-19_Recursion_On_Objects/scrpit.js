// ### **1️⃣ Print All Values in a Nested Object**

// - **Input:**

// ```js
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: {
//         g: 'Hi'
//       }
//     }
//   }
// }
// ```

// - **Output:** `1 2 3 Hi`

function printAllValues (obj){
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            printAllValues(obj[key]);
        }
        else{
            console.log(obj[key]);
        }
    }
}
// printAllValues({
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: {
//         g: 'Hi'
//       }
//     }
//   }
// })



// ### **2️⃣ Count Total Number of Keys in a Nested Object**
// - **Input:**
// ```js
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4
//     }
//   }
// }
// ```
// - **Output:** `6`

function countKeys(obj){
 let count = 0;
    for(let key in obj){
        count++
        if(typeof obj[key] === 'object' &&  obj[key] !== null){
           count += countKeys(obj[key])
        }
    }
    return count
}
// console.log(countKeys({
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4
//     }
//   }
// }))

// ### **3️⃣ Find the Sum of All Numeric Values in a Nested Object**
// - **Input:**

// ```js
// {
//   x: 10,
//   y: {
//     z: 5,
//     w: {
//       k: 15
//     }
//   }
// }
// ```
// - **Output:** `30`

function FindSumOfAllNumbers(obj, sum=0){
    
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            sum += obj[key];
        }
        else if(typeof obj[key] === 'object' && obj[key] !== null){
            sum +=  FindSumOfAllNumbers(obj[key])
        }
        
    }
    return sum

}
// console.log(FindSumOfAllNumbers({
//   x: 10,
//   y: {
//     z: 5,
//     w: {
//       k: 15
//     }
//   }
// }));


// ### **4️⃣ Print All Keys in a Nested Object**
// - **Input:**
// ```js
// {
//   a: {
//     b: {
//       c: 1;
//     }
//   }
// }
// ```
// - **Output:** `a b c`

function printAllKeys(obj){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            console.log(key);
            printAllKeys(obj[key])
        }else{
            console.log(key)
        }
        
    }
}
// printAllKeys({
//   a: {
//     b: {
//       c: 1
//     }
//   }
// })


// ### **1️⃣ Convert All String Values to Uppercase in a Nested Object**

// - **Input:**

// ```js
// {
//   name: "john",
//   details: {
//     city: "mumbai",
//     role: "dev"
//   }
// }
// - **Output:** All strings converted to uppercase.

function convertAllStringToUpparcase(obj){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null ){
            convertAllStringToUpparcase(obj[key])
        }
        else{
            obj[key] = obj[key].toUpperCase();
        }   
    }
    return obj;
}
// console.log(convertAllStringToUpparcase({
//   name: "john",
//   details: {
//     city: "mumbai",
//     role: "dev"
//   }
// }))

// ### **2️⃣ Count How Many Times a Key Appears in a Nested Object**
// - **Input:**
// ```js
// {
//   a: 1,
//   b: {
//     a: 2,
//     c: {
//       a: 3
//     }
//   }
// }
// - **Search key:** `"a"`
// - **Output:** `3

function CountAppears(obj, count=0){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
          count = count +  CountAppears(obj[key])
        }
        else if(key === "a"){
            count++
        }
    }
    return count;
}
// console.log(CountAppears({
//   a: 1,
//   b: {
//     a: 2,
//     c: {
//       a: 3
//     },
//     d : {
//         e: 4
//     }
//   }
// }))

// ### **3️⃣ Find the Depth of a Nested Object**
// - **Input:**

// {
//   a: {
//     b: {
//       c: {
//         d: 1;
//       }
//     }
//   }
// }
// - **Output:** `4`


function findDepth (obj, count=1){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            count +1;
           count = count + findDepth(obj[key])
        }
        
    }
    return count
}
// console.log(findDepth({
//   a: {
//     b: {
//       c: {
//         d: 1
//       }
//     }
//   }
// }));

