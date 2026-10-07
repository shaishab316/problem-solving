// @lc code=start
function majorityElement(nums: number[]): number {
	const map: Record<number, number> = {};

	let max = nums[0];

	for (const num of nums) {
		map[num] = (map[num] || 0) + 1;

		if (map[num] > map[max]) {
			max = num;
		}
	}

	return max;
}
// @lc code=end

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // 1
console.log(majorityElement([1])); // 1
console.log(majorityElement([1, 2])); // 1

/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (65.66%)
 * Likes:    20862
 * Dislikes: 729
 * Total Accepted:    4.2M
 * Total Submissions: 6.4M
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
