// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
	const result: number[][] = [];
	nums.sort((a, b) => a - b);

	function backtrack(start: number, path: number[]) {
		result.push([...path]);

		for (let i = start; i < nums.length; i++) {
			if (i > start && nums[i] === nums[i - 1]) continue; // ignore duplicate

			path.push(nums[i]);
			backtrack(i + 1, path);
			path.pop(); // backtrack
		}
	}

	backtrack(0, []);

	return result;
}
// @lc code=end

console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]
console.log(subsetsWithDup([1, 2, 3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
console.log(subsetsWithDup([4, 4, 4, 1, 4])); // [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
console.log(subsetsWithDup([1, 2, 2, 2])); // [[],[1],[1,2],[1,2,2],[1,2,2,2],[2],[2,2],[2,2,2]]

/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (59.27%)
 * Likes:    10361
 * Dislikes: 374
 * Total Accepted:    1.2M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,2]'
 *
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 *
 *
 */
