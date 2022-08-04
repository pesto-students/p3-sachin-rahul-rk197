
let LinkedList = require('./Practise/LinkedList')
function reverseLinkList(list) {
    var prev = null;
    var current = list.head;
    var next = null;

    list.tail = list.head;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    list.head = prev;
    return list;

}

let list = new LinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.log();
// 1 -> 2 -> 3 -> 4 -> 5
reverseLinkList(list).log();
// 5 -> 4 -> 3 -> 2 -> 1

