/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  normalX = x.toString().split("");
  reversedX = x.toString().split("").reverse();
  for (let i = normalX.length; i > 0; i--) {
    if (normalX[i] === reversedX[i]) {
    } else return false;
  }
  return true;
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */
