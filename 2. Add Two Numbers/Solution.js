/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let newNode = new ListNode(0);
    let head = newNode;
    let carry = 0;

    while (l1 || l2) {
        let a = l1 && l1.val;
        let b = l2 && l2.val;
        let sum = a + b + carry;

        carry = Math.floor(sum / 10);
        head.next = new ListNode(sum % 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        head = head.next;
    }
    if (carry > 0) head.next = new ListNode(carry);
    return newNode.next;
};