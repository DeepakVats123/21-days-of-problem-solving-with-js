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

function countKeys(obj, count=0){

    let keys = Object.keys(obj) 
    for(let i=0; i< keys.length; i++){
        if(i === keys.length-1) return count;
        if(typeof obj[i] !== 'object'){
            count++;
        }
        else{
            
            countKeys(obj[i], count +1);
        }
    }
}
console.log(countKeys({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
}))