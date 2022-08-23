// this problem is related to sliding window concept
// its TC is O(n)
function bestTimeStock(arr, n) {

    let buy = arr[0], sell = 0, profit = 0;
    // we are considering that user will buy stock on 1st day
    // so we will start loop from 2nd day
    for (let i = 1; i < n; i++) {
        // if price is less then buy and sell is 0 we will buy it
        if (sell === 0 && arr[i] < buy) {
            buy = arr[i];
        }
        // else if we have bought and profit is greater then last profit will update profit and make sell = 0;
        else if ((buy !== 0) && (arr[i] - buy) > (profit)) {
            profit = arr[i] - buy;
            sell = 0;
        }
    }
    return profit;

};

console.log(bestTimeStock([7, 1, 5, 3, 6, 4], 6));