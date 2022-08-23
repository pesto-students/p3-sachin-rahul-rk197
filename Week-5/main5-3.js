const hasDuplicate = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 5, -1, 4]));               // false
console.log(hasDuplicate([1, 2, 3, 4]));                // false
console.log(hasDuplicate(['a','b','c','d','a']));             // true
console.log(hasDuplicate([1, 2, 2, 8, 3]));             // true
