// its TC is O(n)
function findPairDifference(arr, target) {
    // will create map to plot values
    let obj = new Map();
    for (num of arr) {
        obj.set(num, "has value");
    }
    // ploted everything on map
    // again run loop on map and checking if difference exist
    for (num of arr) {
        if(obj.has(Math.abs(target-num)))
            return 1;
    }
    return 0;
}   

console.log(findPairDifference([5, 10, 3, 2, 50, 80], 78));