
let LinkedList = require('./Practise/LinkedList')
function rotateLinkList(list, n, k) {
    let fast = list.head;

    while (--k !== 0) {
        fast = fast.next;
    }

    list.tail.next = list.head;
    list.head = fast.next;
    fast.next = null;

    return list
}

let list = new LinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.log();
// 1 -> 2 -> 3 -> 4 -> 5
rotateLinkList(list, 5, 2).log();
// 3 -> 4 -> 5 -> 1 -> 2

