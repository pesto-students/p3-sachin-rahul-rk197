function numbersSum() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
// bind method 
// creates copy of function which means has its on this.
var sum = numbersSum(1,2,3);
console.log(sum);

// call method
// it can be called with some specific this value.
// accepts parameters with specific values
var sum = numbersSum.call(null,4,5,6);
console.log(sum);

// apply method
// it can be called with some specific this value.
// accepts parameters in array
var numbers = [7,8,9];
var sum = numbersSum.apply(null, numbers);
console.log(sum);