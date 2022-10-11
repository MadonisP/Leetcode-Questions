/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const sorter = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };
  const output = nums.indexOf(target);
  if (output !== -1) {
    return output;
  } else {
    nums.push(target);
    nums.sort(sorter);
    const output2 = nums.indexOf(target);
    return output2;
  }
};


// by the way this solution is beats 97% !!!!!!


/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity */

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* Input: nums = [1,3,5,6], target = 5
Output: 2 */
