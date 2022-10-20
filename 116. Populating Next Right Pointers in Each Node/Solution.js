/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let ptr = root;
  while (root && root.left) {
    let temp = root;
    while (temp) {
      temp.left.next = temp.right;
      temp.right.next = temp.next ? temp.next.left : null;
      temp = temp.next;
    }
    root = root.left;
  }
  return ptr;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
*/
