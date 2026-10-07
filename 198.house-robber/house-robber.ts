// @lc code=start
function rob(nums: number[]): number {
	let p1 = 0;
	let p2 = 0;

	for (const num of nums) {
		const temp = p1;
		p1 = Math.max(p1, p2 + num);
		p2 = temp;
	}

	return p1;
}
// @lc code=end

console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1])); // 1
console.log(rob([1, 2])); // 2
console.log(rob([1, 2, 3])); // 4

/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Medium (52.19%)
 * Likes:    22211
 * Dislikes: 471
 * Total Accepted:    2.9M
 * Total Submissions: 5.5M
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security systems
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 *
 *
 */
