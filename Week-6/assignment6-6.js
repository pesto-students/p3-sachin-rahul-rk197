
const S1 = [-1, 2, 1, -4], T1 = 1;

const validateInput = (arr, target) => Array.isArray(arr) && arr.length > 2 &&
    arr.every(el => Number.isFinite(el)) && Number.isInteger(target);

const getClosestSum = (arr, target) => {
    if (!validateInput(arr, target)) throw new Error('Invalid input provided');

    const arrayLength = arr.length;
    let start, end = arrayLength - 1;
    let closeSum = Infinity;

    // sorting the array first to have better time complexity
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    // go upto start of the last triplet, i.e. 3rd last value
    for (let i = 0; i < arrayLength - 2; i++) {
        start = i + 1;

        while (start < end) {
            
            // sum of the current 3 elements
            let sum = arr[i] + arr[start] + arr[end];
            
            let diff = Math.abs(target - sum);
            
            // difference between the target & the closest sum
            let tDiff = Math.abs(target - closeSum);

            if (diff < tDiff) 
                closeSum = sum;

            /**
             * if sum of the current 3 elements is - 
             * 1. same as target sum, return it
             * 2. less than target sum, move start forward
             * 3. greater than target sum, move end backward
             */
            if (sum === target) 
                return sum;
            else if 
                (sum < target) start++;
            else 
                end--;
        }
    }

    return closeSum;
}

console.log("Closest sum:", getClosestSum(S1, T1));
