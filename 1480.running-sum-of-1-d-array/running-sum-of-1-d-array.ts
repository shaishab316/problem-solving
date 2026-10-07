// @lc code=start
function runningSum(nums: number[]): number[] {
	const result: number[] = [];

	let sum = 0;
	for (const num of nums) {
		sum += num;
		result.push(sum);
	}

	return result;
}
// @lc code=end

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
console.log(runningSum([-1, -2, -3, -4])); // [-1,-3,-6,-10]
console.log(runningSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1,2,3,4,5,6,7,8,9,10]

/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 *
 * algorithms
 * Easy (86.97%)
 * Likes:    8216
 * Dislikes: 355
 * Total Accepted:    2.1M
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] =
 * sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1,
 * 1+1+1+1+1].
 *
 * Example 3:
 *
 *
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 *
 *
 */
