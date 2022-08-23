/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let LinkedList = require('./Practise/LinkedList')

var hasCycle = function (list) {

    let fast = list.head;
    let slow = list.head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) return true;
    }

    return false;

};

let list = new LinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
const node = list.push(6);
list.push(7);

list.tail.next = node;

console.log(hasCycle(list));