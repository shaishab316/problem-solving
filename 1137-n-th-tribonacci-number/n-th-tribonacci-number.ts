// @lc code=start
function tribonacci(n: number): number {
	const memo: number[] = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
	}

	return memo[n];
}
// @lc code=end

console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
console.log(tribonacci(37)); // 24157817
console.log(tribonacci(0)); // 0
console.log(tribonacci(1)); // 1

/*
 * @lc app=leetcode id=1137 lang=typescript
 *
 * [1137] N-th Tribonacci Number
 *
 * https://leetcode.com/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (63.61%)
 * Likes:    4634
 * Dislikes: 203
 * Total Accepted:    937K
 * Total Submissions: 1.5M
 * Testcase Example:  '4'
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 *
 * Example 2:
 *
 *
 * Input: n = 25
 * Output: 1389537
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31
 * - 1.
 *
 *
 */
