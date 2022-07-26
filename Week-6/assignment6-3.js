function segregated012(arr) {
    if (!Array.isArray(arr)) {
        throw "error";
    }
    let zeros = 0, ones = 0, twos = 0;
    // counting occurrence of  os 1s and 2s
    for (num of arr) {
        if (num === 0) {
            zeros++;
        }
        else if (num === 1) {
            ones++;
        }
        else if (num === 2) {
            twos++;
        }
    }
    // allocation every element to array each count finishes
    for (let i = 0; i < arr.length; i++) {
        if (zeros > 0) {
            arr[i] = 0;
            zeros--;
            continue;
        }
        else if (ones > 0) {
            arr[i] = 1;
            ones--;
            continue;
        }
        else if (twos > 0){
            arr[i] = 2;
            twos--;
            continue;
        }
    }
    return arr;
}

console.log(segregated012([0, 2, 1, 2, 2, 1, 0, 0, 1]));