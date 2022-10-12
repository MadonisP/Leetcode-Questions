/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    const sorted = (a, b) => {
        if (a < b) return -1;
        if (b < a) return 1;
        return 0;
    }

    arr = []
    for (let i = 0; i < nums.length; i++) {
        square = Math.pow(nums[i], 2)
        arr.push(square)
    }
    arr.sort(sorted)
    return arr
};


/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/
