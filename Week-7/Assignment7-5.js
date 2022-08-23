function NGE(arr) {
    let size = arr.length;
    let stack = [arr[0]];
    let res = [];
    for (let i = 1; i < size; i++) {
        while (stack.length !== 0 && arr[i] > stack[stack.length - 1]){
            res.push(arr[i]);
            stack.pop();
        }
        stack.push(arr[i]);
    }
    while(stack.length !== 0){
        res.push(-1);
        stack.pop()
    }

    return res;
}

console.log(NGE([1, 3, 2, 4]));