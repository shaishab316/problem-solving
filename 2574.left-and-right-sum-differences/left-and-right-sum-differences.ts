// @lc code=start
function leftRightDifference(nums: number[]): number[] {
	const n = nums.length;
	const result: number[] = new Array(n).fill(0);
	const leftSum: number[] = new Array(n).fill(0);
	const rightSum: number[] = new Array(n).fill(0);

	//left sum
	for (let i = 1; i < n; i++) leftSum[i] = leftSum[i - 1] + nums[i - 1];

	//right sum
	for (let i = n - 1; --i >= 0; ) rightSum[i] = rightSum[i + 1] + nums[i + 1];

	//diff
	for (let i = 0; i < n; i++) result[i] = Math.abs(leftSum[i] - rightSum[i]);

	return result;
}
// @lc code=end

console.log(leftRightDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRightDifference([1])); // [0]

/*
 * @lc app=leetcode id=2574 lang=typescript
 *
 * [2574] Left and Right Sum Differences
 *
 * https://leetcode.com/problems/left-and-right-sum-differences/description/
 *
 * algorithms
 * Easy (87.41%)
 * Likes:    1164
 * Dislikes: 107
 * Total Accepted:    183.4K
 * Total Submissions: 209.5K
 * Testcase Example:  '[10,4,8,3]'
 *
 * You are given a 0-indexed integer array nums of size n.
 *
 * Define two arrays leftSum and rightSum where:
 *
 *
 * leftSum[i] is the sum of elements to the left of the index i in the array
 * nums. If there is no such element, leftSum[i] = 0.
 * rightSum[i] is the sum of elements to the right of the index i in the array
 * nums. If there is no such element, rightSum[i] = 0.
 *
 *
 * Return an integer array answer of size n where answer[i] = |leftSum[i] -
 * rightSum[i]|.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [10,4,8,3]
 * Output: [15,1,11,22]
 * Explanation: The array leftSum is [0,10,14,22] and the array rightSum is
 * [15,11,3,0].
 * The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: [0]
 * Explanation: The array leftSum is [0] and the array rightSum is [0].
 * The array answer is [|0 - 0|] = [0].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 10^5
 *
 *
 */
