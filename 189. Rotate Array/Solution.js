/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {// Burada sayilari atiyoruz ancak elimizde 7 uzunlugunda degil 10 uzunlugunda bir array olusuyor
    nums[i + k] = nums[i]; //length -1 dememizin sebebi length 1 den basliyor ancak array 0 dan bunlari esliyoruz
  }

  for (let j = k - 1; j >= 0; j--) {//bastaki 3 gereksiz elemani atarak arrayi duzenliyoruz
    nums[j] = nums.pop();
  }
};



/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
