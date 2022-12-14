/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const current = first + second;
        first = second;
        second = current;
    }
    return second;
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
