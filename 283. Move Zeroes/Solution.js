/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var ZC = 0
 var moveZeroes = function (nums) {
     let Pointer = 0;
     for (let i = 0; i < nums.length; i++) {
         const val = nums[i];
         nums[i] = 0;
         if (val !== 0) {
             nums[Pointer] = val;
             Pointer++;
         }
     }
 };


/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */
