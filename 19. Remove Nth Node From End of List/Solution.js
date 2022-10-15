/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(-1, head);

    let fast = dummyHead
    let slow = dummyHead
    while (fast.next != null) {
        if (n <= 0) {
            slow = slow.next;
        }

        fast = fast.next
        n -= 1;
    }
    selectedNode = slow.next
    slow.next = selectedNode.next

    return dummyHead.next
};


/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/