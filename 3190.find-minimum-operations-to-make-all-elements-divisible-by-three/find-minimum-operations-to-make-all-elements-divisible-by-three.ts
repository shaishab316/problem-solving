// @lc code=start
function minimumOperations(nums: number[]): number {
	let count = 0;
	for (const num of nums) {
		if (num % 3 !== 0) {
			count++;
		}
	}
	return count;
}
// @lc code=end

console.log(minimumOperations([1, 2, 3, 4])); // 3
console.log(minimumOperations([3, 6, 9])); // 0
console.log(minimumOperations([1, 2, 3])); // 0
console.log(minimumOperations([2, 4, 8])); // 2
console.log(minimumOperations([1, 2, 3, 4, 5, 6])); // 3

/*
 * @lc app=leetcode id=3190 lang=typescript
 *
 * [3190] Find Minimum Operations to Make All Elements Divisible by Three
 *
 * https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
 *
 * algorithms
 * Easy (88.73%)
 * Likes:    209
 * Dislikes: 17
 * Total Accepted:    122.6K
 * Total Submissions: 138.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * You are given an integer array nums. In one operation, you can add or
 * subtract 1 from any element of nums.
 *
 * Return the minimum number of operations to make all elements of nums
 * divisible by 3.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4]
 *
 * Output: 3
 *
 * Explanation:
 *
 * All array elements can be made divisible by 3 using 3 operations:
 *
 *
 * Subtract 1 from 1.
 * Add 1 to 2.
 * Subtract 1 from 4.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,6,9]
 *
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 50
 * 1 <= nums[i] <= 50
 *
 *
 */
