// output of this program will be "Count is 0";
// Because when message is initialized the value of count was 0 and after increment of count value 
// message was not given new value.

function createIncrement() {
    let count=0; 
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
