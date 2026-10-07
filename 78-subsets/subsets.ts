// @lc code=start
function subsets(nums: number[]): number[][] {
	const result: number[][] = [];
	const n = nums.length;

	for (let mask = 0; mask < 1 << n; mask++) {
		const subset: number[] = [];
		for (let i = 0; i < n; i++) {
			if (mask & (1 << i)) {
				subset.push(nums[i]);
			}
		}
		result.push(subset);
	}

	return result;
}
// @lc code=end

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]
console.log(subsets([1, 2, 3, 4])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4]]

/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (80.65%)
 * Likes:    18180
 * Dislikes: 307
 * Total Accepted:    2.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 *
 *
 */
