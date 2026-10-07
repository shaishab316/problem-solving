// @lc code=start
function countMaxOrSubsets(nums: number[]): number {
	let result = 0;
	let maxOr = 0;
	for (const num of nums) maxOr |= num;

	function backtrack(idx: number, currOr: number): void {
		if (currOr === maxOr) {
			result += 1 << (nums.length - idx);
			return;
		}

		if (idx === nums.length) return;

		backtrack(idx + 1, currOr | nums[idx]); // include
		backtrack(idx + 1, currOr); // exclude
	}

	backtrack(0, 0);

	return result;
}
// @lc code=end

console.log(countMaxOrSubsets([3, 1])); // 2
console.log(countMaxOrSubsets([2, 2, 2])); // 7
console.log(countMaxOrSubsets([3, 2, 1, 5])); // 6

/*
 * @lc app=leetcode id=2044 lang=typescript
 *
 * [2044] Count Number of Maximum Bitwise-OR Subsets
 *
 * https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/description/
 *
 * algorithms
 * Medium (87.94%)
 * Likes:    1134
 * Dislikes: 74
 * Total Accepted:    144.2K
 * Total Submissions: 163.9K
 * Testcase Example:  '[3,1]'
 *
 * Given an integer array nums, find the maximum possible bitwise OR of a
 * subset of nums and return the number of different non-empty subsets with the
 * maximum bitwise OR.
 *
 * An array a is a subset of an array b if a can be obtained from b by deleting
 * some (possibly zero) elements of b. Two subsets are considered different if
 * the indices of the elements chosen are different.
 *
 * The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length -
 * 1] (0-indexed).
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,1]
 * Output: 2
 * Explanation: The maximum possible bitwise OR of a subset is 3. There are 2
 * subsets with a bitwise OR of 3:
 * - [3]
 * - [3,1]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,2,2]
 * Output: 7
 * Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There
 * are 2^3 - 1 = 7 total subsets.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,2,1,5]
 * Output: 6
 * Explanation: The maximum possible bitwise OR of a subset is 7. There are 6
 * subsets with a bitwise OR of 7:
 * - [3,5]
 * - [3,1,5]
 * - [3,2,5]
 * - [3,2,1,5]
 * - [2,5]
 * - [2,1,5]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 16
 * 1 <= nums[i] <= 10^5
 *
 *
 */
