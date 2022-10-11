/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return (numsCheck = nums.indexOf(target)); //Tek tek bakar || checks one by one
};
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2);
    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }
  return nums[lo] == target ? lo : -1; //looks in the middle first and reduce the half and this process continues || yarisini cikarir ve bu sekilde ayni isleme devam eder
};

// 2. yaklasim yanlislari cikardigi icin buyuk verilerde daha hizli bir arama saglar

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 If target exists, then return its index. Otherwise, return -1.You must write an algorithm with O(log n) runtime complexity. */

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
 Input: nums = [-1,0,3,5,9,12], target = 9
 Output: 4
 Explanation: 9 exists in nums and its index is 4
*/
