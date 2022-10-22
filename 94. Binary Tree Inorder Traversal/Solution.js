/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const result = [];

function traverse(node) {
   if(!node) return;
   
   traverse(node.left);
   result.push(node.val);
   traverse(node.right);
}
traverse(root);
return result;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps 
*/
