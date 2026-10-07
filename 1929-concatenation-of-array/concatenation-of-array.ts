// @lc code=start
function getConcatenation(nums: number[]): number[] {
	return nums.concat(nums);
}
// @lc code=end

console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]
console.log(getConcatenation([4, 5, 6])); // [4,5,6,4,5,6]
console.log(getConcatenation([7, 8, 9, 10])); // [7,8,9,10,7,8,9,10]
console.log(getConcatenation([11, 12, 13, 14, 15])); // [11,12,13,14,15,11,12,13,14,15]

/*
 * @lc app=leetcode id=1929 lang=typescript
 *
 * [1929] Concatenation of Array
 *
 * https://leetcode.com/problems/concatenation-of-array/description/
 *
 * algorithms
 * Easy (90.46%)
 * Likes:    3561
 * Dislikes: 422
 * Total Accepted:    1M
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,1]'
 *
 * Given an integer array nums of length n, you want to create an array ans of
 * length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n
 * (0-indexed).
 *
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * Return the array ans.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1]
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,2,1]
 * Output: [1,3,2,1,1,3,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
 * - ans = [1,3,2,1,1,3,2,1]
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 1000
 * 1 <= nums[i] <= 1000
 *
 *
 */
