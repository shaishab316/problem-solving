// @lc code=start
function sum(num1: number, num2: number): number {
	return num1 + num2;
}
// @lc code=end

console.log(sum(12, 5)); // 17
console.log(sum(-10, 4)); // -6
console.log(sum(0, 0)); // 0
console.log(sum(1, -1)); // 0
console.log(sum(1, 1)); // 2

/*
 * @lc app=leetcode id=2235 lang=typescript
 *
 * [2235] Add Two Integers
 *
 * https://leetcode.com/problems/add-two-integers/description/
 *
 * algorithms
 * Easy (88.18%)
 * Likes:    1813
 * Dislikes: 3178
 * Total Accepted:    694.9K
 * Total Submissions: 788K
 * Testcase Example:  '12\n5'
 *
 * Given two integers num1 and num2, return the sum of the two integers.
 *
 * Example 1:
 *
 *
 * Input: num1 = 12, num2 = 5
 * Output: 17
 * Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is
 * returned.
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = -10, num2 = 4
 * Output: -6
 * Explanation: num1 + num2 = -6, so -6 is returned.
 *
 *
 *
 * Constraints:
 *
 *
 * -100 <= num1, num2 <= 100
 *
 *
 */
