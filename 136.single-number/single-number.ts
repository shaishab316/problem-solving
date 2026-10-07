// @lc code=start
function singleNumber(nums: number[]): number {
	let result = 0;

	for (const num of nums) {
		result ^= num;
	}

	return result;
}
// @lc code=end

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1, 2, 2])); // 1
console.log(singleNumber([1, 1, 3])); // 3

/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (75.74%)
 * Likes:    17501
 * Dislikes: 808
 * Total Accepted:    3.6M
 * Total Submissions: 4.8M
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers nums, every element appears twice except
 * for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only
 * constant extra space.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,2,1]
 *
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,1,2,1,2]
 *
 * Output: 4
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1]
 *
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * Each element in the array appears twice except for one element which appears
 * only once.
 *
 *
 */
