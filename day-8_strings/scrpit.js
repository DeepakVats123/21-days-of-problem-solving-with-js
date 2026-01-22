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
// console.log(checkNotRepeating("aabbcddeff"));s