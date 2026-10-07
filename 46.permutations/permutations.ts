// @lc code=start
function permute(nums: number[]): number[][] {
	const result: number[][] = [];

	function backTrack(start: number) {
		if (start === nums.length) return result.push([...nums]);

		for (let i = start; i < nums.length; i++) {
			[nums[i], nums[start]] = [nums[start], nums[i]];
			backTrack(start + 1);
			[nums[i], nums[start]] = [nums[start], nums[i]];
		}
	}

	backTrack(0);

	return result;
}

// @lc code=

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
console.log(permute([1, 2, 3, 4])); // [[1,2,3,4],[1,3,2,4],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,3,1,4],[2,4,1,3],[2,4,3,1],[3,1,4,2],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]
console.log(permute([0, 1, 2])); // [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]

/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (80.58%)
 * Likes:    19937
 * Dislikes: 357
 * Total Accepted:    2.6M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */
