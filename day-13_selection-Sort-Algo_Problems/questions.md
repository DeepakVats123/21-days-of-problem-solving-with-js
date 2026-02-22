# 🎯 **Day 13 – Selection Sort Questions**

### 🧩 Core Concept Focus

- Selecting minimum or maximum element
- Swapping with correct index
- Reducing the unsorted region
- Understanding unstable sorting and selection-based logic

---

# 🏫 **Class Questions**

---

### **1️⃣ Sort an Array in Ascending Order Using Selection Sort**

- **Input:** `[7, 2, 9, 4, 1]`
- **Output:** `[1, 2, 4, 7, 9]`

---

### **2️⃣ Sort an Array in Descending Order**

- **Input:** `[3, 8, 5, 2, 9]`
- **Output:** `[9, 8, 5, 3, 2]`

---

### **3️⃣ Find the Kth Smallest Element Using Selection Logic**

- **Input:** `[9, 4, 7, 1, 3]`, `K = 3`
- **Output:** `4`

---

### **4️⃣ Selection Sort but Track Index of Minimum for Each Pass**

- **Input:** `[4, 2, 5, 3, 1]`
- **Output:**  
  Pass 1 → min index = 4  
  Pass 2 → min index = 3

---

### **5️⃣ Sort an Array of Objects by Name**

- **Input:**

  ```js
  [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
  ```

- **Output:** Sorted alphabetically by name.

---

# 🏠 **Homework Questions**
---

### **1️⃣ Find the K Largest Elements Without Full Sorting**

- **Input:** `[5, 1, 9, 3, 7]`, `K = 2`
- **Output:** `[9, 7]`
  _(Stop early once top K elements are placed.)_

---

### **2️⃣ Sort a 2D Array by Second Element in Each Subarray**

- **Input:** `[[3, 9], [1, 4], [2, 5]]`
- **Output:** Sorted by second values → `[[1,4], [2,5], [3,9]]`

---

### **3️⃣ Sort an Array and Count How Many Times Minimum Changed**

- **Input:** `[8, 3, 5, 2, 6]`
- **Output:** Number of times a new minimum was found.

---

### **4️⃣ Sort Only Elements at Even Indexes**

- **Input:** `[9, 4, 7, 6, 3, 2]`
- **Even index elements:** 9, 7, 3
- **Output:** Sort only these positions using selection logic.

---

### **5️⃣ Sort an Array of Characters by ASCII Value**

- **Input:** `['d', 'A', 'c', 'B']`
- **Output:** Sorted by ASCII: `['A', 'B', 'c', 'd']`

const sortStringByAscii = (arr) => {

}
