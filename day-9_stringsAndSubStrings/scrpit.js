// ### **1️⃣ Find if One String Is a Substring of Another (Manual Method)**
// - **Input:**
//   Main string: `"hellothere"`
//   Target string: `"there"`
function findSubString(mainStr, target){
    //    brute force solution outerLoopCount-6 & innerLoopCount-45
//  let outerLoopCount = 0;
//     let innerLoopCount = 0;
//     for(let i=0; i< mainStr.length; i++){
//     outerLoopCount++;
//         let subStr = "";
//         for(let j=i; j< mainStr.length; j++){
//             innerLoopCount++;
//             subStr += mainStr[j];
//             console.log(subStr);
//         }
//         if(subStr === target){
//              console.log("outerLoopCount ", outerLoopCount);
//     console.log("innerLoopCount ", innerLoopCount);
//             return subStr;
            
//             }
//     }

    // optimised solution   outerLoopCount-6 & innerLoopCount-5 -------------------------

    let subStr = ""
    let outerLoopCount = 0;
    let innerLoopCount = 0;
    for(let i=0; i<=mainStr.length-target.length; i++){
        let targetInd = 0
        outerLoopCount++;
        if(mainStr[i] === target[targetInd]){
            for(let j=0; j<target.length; j++){
                innerLoopCount++;
                if(mainStr[j+i] === target[j]){
                    subStr += mainStr[j+i]
                    targetInd++;
                    if(subStr === target){
                        break;
                    }
                }
            }
        }
        if(target === subStr){
            break;
        }
        
    }
    console.log("outerLoopCount ", outerLoopCount);
    console.log("innerLoopCount ", innerLoopCount);
    return subStr;
   
    
}
console.log(findSubString("hellothere","there"));


// ### **2️⃣ Manual Substring Search (Without Using indexOf)**
// - **Input:** text = `"hello world"`, pattern = `"wor"`
// - **Output:** `Found at index 6`


function findIndexOfSubstring(str, pattern){
    for(let i=0; i<str.length-pattern.length; i++){
        let subStrFlag = false;
        if(str[i] === pattern[0]){
            for(let j=0; j<pattern.length; j++){
                if(str[j+i] !== pattern[j]){
                    break;
                }
                subStrFlag = true;
            }
        }
        if(subStrFlag){
            return i;
        }
    }
}
// console.log(findIndexOfSubstring("hello world", "llo"));