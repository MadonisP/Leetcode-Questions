/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    const sorter=(a, b)=> {
        if (a < b) return -1;
        if (a > b) return 1; 
        return 0;
    }
    const output = nums.indexOf(target)
    if (output !== -1) {
        return output
    } else {
        nums.push(target);
        nums.sort(sorter)
        const output2 = nums.indexOf(target)
        return output2
    }
};