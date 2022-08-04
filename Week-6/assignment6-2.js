// its TC is O(m*n)
function spiralPrint(m, n, arr) {
    let counter, startRowIndex = 0, startColIndex = 0;

    let resultArr = [];
    while (startRowIndex < m && startColIndex < n) {
        // print the first row from the remaining rows

        for (counter = startColIndex; counter < n; ++counter) {
            resultArr.push(arr[startRowIndex][counter]);
        }
        startRowIndex++;

        // print the last column from the remaining columns
        for (counter = startRowIndex; counter < m; ++counter) {
            resultArr.push(arr[counter][n - 1]);
        }
        n--;

        // print the last row from the remaining rows
        if (startRowIndex < m) {
            for (counter = n - 1; counter >= startColIndex; --counter) {
                resultArr.push(arr[m - 1][counter]);
            }
            m--;
        }

        // print the first column from the remaining columns
        if (startColIndex < n) {
            for (counter = m - 1; counter >= startRowIndex; --counter) {
                resultArr.push(arr[counter][startColIndex]);
            }
            startColIndex++;
        }
    }
    return resultArr;
}

console.log(spiralPrint(3, 3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));