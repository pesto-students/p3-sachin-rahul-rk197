function createStack() {
    let items = [];
    this.push = function(ele){
        items.push(ele)
    }
    this.pop = function(){
        items.pop();
    }
}
const stack = new createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);
