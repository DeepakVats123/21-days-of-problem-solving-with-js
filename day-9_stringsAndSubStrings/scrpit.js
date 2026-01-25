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
    for(let i=0; i<mainStr.length; i++){
        let targetInd = 0
        outerLoopCount++;
        if(mainStr[i] === target[targetInd]){
            for(let j=i; j<mainStr.length; j++){
                innerLoopCount++;
                if(mainStr[j] === target[targetInd]){
                    subStr += mainStr[j]
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