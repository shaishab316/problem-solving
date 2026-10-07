// @lc code=start
function generateParenthesis(n: number): string[] {
	const result: string[] = [];

	function backtrack(current: string, open: number, close: number): void {
		if (current.length === n * 2) {
			result.push(current);
			return;
		}

		if (open < n) backtrack(current + "(", open + 1, close);
		if (close < open) backtrack(current + ")", open, close + 1);
	}

	backtrack("", 0, 0);

	return result;
}
// @lc code=end

console.log(generateParenthesis(3));

/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.04%)
 * Likes:    22360
 * Dislikes: 1038
 * Total Accepted:    2.4M
 * Total Submissions: 3.2M
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 8
 *
 *
 */
