// @lc code=start
function containsDuplicate(nums: number[]): boolean {
	const seen = new Set();

	for (const num of nums)
		if (seen.has(num)) return true;
		else seen.add(num);

	return false;
}
// @lc code=end

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([-1, 0, 1, 2, -1, -2])); // true
console.log(containsDuplicate([0, 1, 2, 3, 4, 5])); // false

/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (63.09%)
 * Likes:    12853
 * Dislikes: 1328
 * Total Accepted:    5.1M
 * Total Submissions: 8.1M
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1]
 *
 * Output: true
 *
 * Explanation:
 *
 * The element 1 occurs at the indices 0 and 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 *
 * Output: false
 *
 * Explanation:
 *
 * All elements are distinct.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */
