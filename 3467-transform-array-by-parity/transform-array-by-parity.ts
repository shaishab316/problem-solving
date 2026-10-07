// @lc code=start
function transformArray(nums: number[]): number[] {
	return nums.map((num) => num % 2).sort((a, b) => a - b);
}
// @lc code=end

console.log(transformArray([4, 3, 2, 1])); // [0,0,1,1]
console.log(transformArray([1, 5, 1, 4, 2])); // [0,0,1,1,1]
console.log(transformArray([2, 4, 6])); // [0,0,1]
console.log(transformArray([2, 4, 6, 8])); // [0,0,1,1]
console.log(transformArray([2, 4, 6, 8, 10])); // [0,0,1,1,1]

/*
 * @lc app=leetcode id=3467 lang=typescript
 *
 * [3467] Transform Array by Parity
 *
 * https://leetcode.com/problems/transform-array-by-parity/description/
 *
 * algorithms
 * Easy (89.32%)
 * Likes:    43
 * Dislikes: 2
 * Total Accepted:    48.6K
 * Total Submissions: 54.4K
 * Testcase Example:  '[4,3,2,1]'
 *
 * You are given an integer array nums. Transform nums by performing the
 * following operations in the exact order specified:
 *
 *
 * Replace each even number with 0.
 * Replace each odd numbers with 1.
 * Sort the modified array in non-decreasing order.
 *
 *
 * Return the resulting array after performing these operations.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,3,2,1]
 *
 * Output: [0,0,1,1]
 *
 * Explanation:
 *
 *
 * Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with
 * 1. Now, nums = [0, 1, 0, 1].
 * After sorting nums in non-descending order, nums = [0, 0, 1, 1].
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,5,1,4,2]
 *
 * Output: [0,0,1,1,1]
 *
 * Explanation:
 *
 *
 * Replace the even numbers (4 and 2) with 0 and the odd numbers (1, 5 and 1)
 * with 1. Now, nums = [1, 1, 1, 0, 0].
 * After sorting nums in non-descending order, nums = [0, 0, 1, 1, 1].
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 1000
 *
 *
 */
