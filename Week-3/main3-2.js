function numbersSum() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
// bind method
var sum = numbersSum(1,2,3);
console.log(sum);

// call method
var sum = numbersSum.call(null,4,5,6);
console.log(sum);

// apply method
var numbers = [7,8,9];
var sum = numbersSum.apply(null, numbers);
console.log(sum);