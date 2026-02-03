# let vs const — Complete Behavior Notes
## 🔹 Case 1 — Arrays
## ✅ let allows reassignment
let x = 10;

x = 20;   // ✅ allowed

## ❌ const blocks reassignment
const y = 10;

y = 20;   // ❌ error

## 🔹 Case 2 — Objects (Both allow mutation)

### 🔹let object

let user = { name: "A" };

user.name = "B";   // ✅ allowed

user = {};         // ✅ allowed

### 🔹const object

const user = { name: "A" };

user.name = "B";   // ✅ allowed

user = {};         // ❌ error

👉 Difference: only reassignment blocked in const

## 🔹 Case 3 — Arrays

### 🔹let

let arr = [1,2];

arr.push(3);   // ✅

arr = [];      // ✅

### 🔹const

const arr = [1,2];

arr.push(3);   // ✅

arr = [];      // ❌


## 🔹 Case 4 — Declaration rule

let can be declared without value

let a;

a = 5;   // ok

const must be initialized immediately

const b;   // ❌ error

## 🧠 Key Takeaway:
- let → reassignment allowed
- const → reassignment not allowed
- Objects & arrays → mutation allowed in both
- const → must be initialized at declaration
