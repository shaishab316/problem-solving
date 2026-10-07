// @lc code=start
function moveZeroes(nums: number[]): void {
	let position = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			[nums[position], nums[i]] = [nums[i], nums[position]];
			position++;
		}
	}
}
// @lc code=end

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1])); // [1]
console.log(moveZeroes([1, 0])); // [1,0]
console.log(moveZeroes([1, 0, 1])); // [1,1,0]

/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (62.72%)
 * Likes:    17849
 * Dislikes: 521
 * Total Accepted:    4M
 * Total Submissions: 6.4M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you minimize the total number of operations done?
 */
