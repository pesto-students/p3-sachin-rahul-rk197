function getMaxSubarray(arr, size) {

    // check if input is array
    if (!Array.isArray(arr)) {
        throw "error"
    }

    // maximum negative 
    let maxSoFar = Number.NEGATIVE_INFINITY;
    // max ending at every itteration
    let maxEndingHere = 0;
    // to keep track of start of array
    let start = 0;
    // to keep track ending of array
    let end = 0;
    // helper
    let s = 0;

    for (var i = 0; i < size; i++) {
        // adding every element every iteration
        maxEndingHere += arr[i]
        // comparing max so far to update if maxEnding is greater
        // and maintaining start and end
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
        else if (maxEndingHere < 0) {
            maxEndingHere = 0;
            s = i + 1;
        }
    }
    return arr.slice(start, end + 1);

}

let arr = [-2, -3, -4, -1, -5, -4];
console.log(getMaxSubarray(arr, arr.length));
