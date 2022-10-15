/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null) {
    fast = fast.next;
    if (fast == null) break;
    else fast = fast.next;

    slow = slow.next;
  }
  return slow;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/
/* 
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/
