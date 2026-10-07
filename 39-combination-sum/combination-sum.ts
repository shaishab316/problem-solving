// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
	const result: number[][] = [];

	(function backTrack(start: number, current: number[], sum: number) {
		if (sum === target) return result.push([...current]);
		else if (sum > target) return;

		for (let i = start; i < candidates.length; i++) {
			current.push(candidates[i]);
			backTrack(i, current, sum + candidates[i]);
			current.pop();
		}
	})(0, [], 0);

	return result;
}
// @lc code=end

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([1], 1)); // [[1]]
console.log(combinationSum([1], 2)); // [[1,1]]

/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (74.55%)
 * Likes:    19864
 * Dislikes: 471
 * Total Accepted:    2.5M
 * Total Submissions: 3.4M
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen
 * numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 *
 * The test cases are generated such that the number of unique combinations
 * that sum up to target is less than 150 combinations for the given input.
 *
 *
 * Example 1:
 *
 *
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple
 * times.
 * 7 is a candidate, and 7 = 7.
 * These are the only two combinations.
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 *
 *
 * Example 3:
 *
 *
 * Input: candidates = [2], target = 1
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= candidates.length <= 30
 * 2 <= candidates[i] <= 40
 * All elements of candidates are distinct.
 * 1 <= target <= 40
 *
 *
 */
