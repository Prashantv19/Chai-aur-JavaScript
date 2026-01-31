# Object.prototype Methods – Quick Reference

These methods and properties are inherited by **all JavaScript objects** from `Object.prototype`.

---

## 📌 Methods & Properties (Parallel View)

| Method / Property | Purpose (Short Meaning) |
|-------------------|-------------------------|
| `constructor` | Batata hai object kis constructor se bana (`Object()`) |
| `hasOwnProperty()` | Check karta hai property object ki **own** hai ya nahi |
| `isPrototypeOf()` | Check karta hai koi object prototype chain me hai ya nahi |
| `propertyIsEnumerable()` | Property enumerable hai (loop me dikhegi) ya nahi |
| `toLocaleString()` | Locale-aware string representation deta hai |
| `toString()` | Object ko string me convert karta hai (`[object Object]`) |
| `valueOf()` | Object ki primitive value return karta hai |
| `__defineGetter__()` | Property ke liye getter define karta hai (legacy) |
| `__defineSetter__()` | Property ke liye setter define karta hai (legacy) |
| `__lookupGetter__()` | Getter ko prototype chain me search karta hai |
| `__lookupSetter__()` | Setter ko prototype chain me search karta hai |
| `__proto__` | Object ka prototype reference |
| `get __proto__()` | Prototype ko read/access karne ke liye |
| `set __proto__()` | Prototype ko set/change karne ke liye |

---

## 🧠 One-line Takeaway
> Ye saare methods `Object.prototype` se aate hain, isliye har JavaScript object me automatically available hote hain.

---
