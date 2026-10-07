// @lc code=start
function isPowerOfThree(n: number): boolean {
	if (n === 1) return true;
	if (n === 0 || n % 3 !== 0) return false;
	return isPowerOfThree(n / 3);
}
// @lc code=end

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(-1)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false

/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (47.89%)
 * Likes:    3252
 * Dislikes: 291
 * Total Accepted:    1M
 * Total Submissions: 2.1M
 * Testcase Example:  '27'
 *
 * Given an integer n, return true if it is a power of three. Otherwise, return
 * false.
 *
 * An integer n is a power of three, if there exists an integer x such that n
 * == 3^x.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 27
 * Output: true
 * Explanation: 27 = 3^3
 *
 *
 * Example 2:
 *
 *
 * Input: n = 0
 * Output: false
 * Explanation: There is no x where 3^x = 0.
 *
 *
 * Example 3:
 *
 *
 * Input: n = -1
 * Output: false
 * Explanation: There is no x where 3^x = (-1).
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you solve it without loops/recursion?
 */
