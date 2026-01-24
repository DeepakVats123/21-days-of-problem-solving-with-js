// ### **1️⃣ Reverse a String (Manual Method Only)**
// - **Input:** `"javascript"`
// - **Output:** `"tpircsavaj"`

function reverseAstring(str){
//    return str.split("").reverse().join("") // using inbuild js method 
    let revStr = ""; // using logic
    for(let i=str.length-1; i>=0; i--){
        revStr += str[i];
    }
    return revStr
}
// console.log(reverseAstring("javascript"));


// ### **2️⃣ Check if a String is a Palindrome**
// - **Input:** `"racecar"`
// - **Output:** `Palindrome`

function checkPalindrome(str){
    let j = str.length-1;
    let flag = true
    for(let i=0; i<=j; i++){
        if(str[i] !== str[j]){
            flag=false;
        }
        j--;    
    }
   return flag? "Palindrome" : "Not a Palindrome"
}
// console.log(checkPalindrome("racecar"));


// ### **3️⃣ Count Frequency of Each Character**
// - **Input:** `"banana"`
// - **Output:** `{ b:1, a:3, n:2 }`

function countFrequency(str){
    const obj = {}
    for(let i in str){
        if(obj[str[i]]){
            obj[str[i]] += 1
        }else{
            obj[str[i]] = 1
        }
    }
    return obj;
}
// console.log(countFrequency("banana"));

// ### **4️⃣ Find the Most Frequent Character in a String**
// - **Input:** `"success"`
// - **Output:** `Most frequent: s (3 times)`

function mostFrequent (str){
     const obj = {}
    let maxFreq = 0
    let cahr = ""
    for(let i in str){
        if(obj[str[i]]){
            
            obj[str[i]] += 1
            maxFreq = obj[str[i]] > maxFreq ? obj[str[i]] : maxFreq
            cahr = str[i]
        }else{
            obj[str[i]] = 1
        }
    }
    console.log(obj);
    return `Most frequent: ${cahr} (${maxFreq} times)`;
   
}
// console.log(mostFrequent("success"));
// console.log(mostFrequent("Banana"));

// ### **5️⃣ Check if Two Strings Are Anagrams (Without Sorting)**
// - **Input:** `"listen"`, `"silent"`
// - **Output:** `Anagram`

function checkAnagram(str1, str2){
    let sortedStr1 = str1.split("").sort().join("")
    let sortedStr2 = str2.split("").sort().join("")
    return sortedStr1 === sortedStr2 ? "Anagram" : "Not Anagram"
}
// console.log(checkAnagram("listen", "silent"));

// ### **6️⃣ Find the First Non-Repeating Character**
// - **Input:** `"aabbcddeff"`
// - **Output:** `c`

function checkNotRepeating(str){
    let obj = {}
    let charArr = [];
    for(let i in str){
        if(obj[str[i]]){
            obj[str[i]] += 1
        }
        else{
            obj[str[i]] = 1
        }
    }

    let keys = Object.keys(obj);
    for(let i in keys){
        if(obj[keys[i]] === 1){
            charArr.push(keys[i])

        }
    }
return charArr[0];

}
// console.log(checkNotRepeating("aabbcddeff"));

// # 🏠 **Homework Questions (7 Challenging Problems)**

// ### **1️⃣ Remove All Duplicate Characters (Keep First Occurrence)**
// - **Input:** `"programming"`
// - **Output:** `"progamin"`

function removeDuplicates(str){
    const obj = {}
    let strF = "";
    for(let i in str){
        if(obj[[str[i]]]){
            obj[[str[i]]] += 1;
        }
        else{
            obj[[str[i]]] = 1
            strF += str[i]
        }
    }
    // let strFinal = Object.keys(obj).join("") // we can create like this with inbuilt function
    return strF
}
// console.log(removeDuplicates("programming"));

// ### **2️⃣ Check if a String Contains Only Alphabets (No Regex)**
// - **Input:** `"HelloWorld123"`
// - **Output:** `false`
// - ASCAII value of 0–9 (48–57)

const isStringContainOnlyChar = (str) => {

    let hasAlpha = /[a-zA-Z]/.test(str) &&  /\d/.test(str) // /\d/ use to check digits // we can use regex and .test()
    // console.log("Has Alpha ", hasAlpha);
    for(let i in str){
        if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) < 57){
            return true;
        }
    }
    return false;
}
// console.log(isStringContainOnlyChar("123"));

// ### **3️⃣ Reverse Only the Words in a Sentence**
// - **Input:** `"I love coding"`
// - **Output:** `"coding love I"`

function reverseWords(str){
    let reverseStr = ""
    let word = ""
    for(let char of str){
        if(char === " "){
            reverseStr = word + " " + reverseStr;
            word = ""
        }else{
            word += char
        }
    }
    reverseStr = word + " " + reverseStr;
    return reverseStr
}
// console.log(reverseWords("I love coding"));

// ### **4️⃣ Find the Longest Word in a Sentence**
// - **Input:** `"coding is beautiful"`
// - **Output:** `"beautiful"`

function findLongestWord(str){
    let count = 0;
    let maxCount = 0;
    let word = ""
    let longestWord = ""
    
    for(let i=0; i<str.length; i++){
        if(str[i] === " "){
           if(count > maxCount){
            maxCount = count
            longestWord = word
            word = ""
            count = 0
           }else{
            word = ""
            count = 0
           }
        }else{
            count++
            word += str[i]
        }
    }
    return word.length > longestWord.length ? word : longestWord;
}
// console.log(findLongestWord("coding is beautiful"));

// ### **5️⃣ Count the Number of Words (Manually Without split)**
// - **Input:** `"  hi   there  world "`
// - **Output:** `3 words`

function countNumberOfWords(str){
//    return str.trim().split(/\s+/).length; // using inbuilt methods 
    let count = 0;
    let isWord = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " " && !isWord) {
    count++;
    isWord = true;
  } else if (str[i] === " ") {
    isWord = false;
  }
}
return count
}
let result = countNumberOfWords("  hi   there  world ")
// console.log(result);

// ### **6️⃣ Find All Substrings of a String (No Built-ins)**
// - **Input:** `"abc"`
// - **Output:** [a, ab, abc, b, bc, c]

function genrateSubStrings(str){
const subStringsArr = []
    for(let i=0; i<str.length; i++){
        let subStr = "";
        for(let j=i; j< str.length; j++){
            subStr += str[j]
            subStringsArr.push(subStr)
        }
    }
    return subStringsArr
}
// console.log(genrateSubStrings("abc"))

// ### **7️⃣ Compress a String (Basic Run-Length Encoding)**
// - **Input:** `"aaabbccccd"`
// - **Output:** `"a3b2c4d1"`

function compressAString(str){
    let count = 1;
    let compressedStr = ""
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }
        else{
            compressedStr += str[i] + count
            count = 1;
        }
    }
    return compressedStr;
}
console.log(compressAString("aaabbccccd"));