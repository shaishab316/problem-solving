// @lc code=start
function isPerfectSquare(num: number, i = 1): boolean {
	if (num < 0) return false;
	if (num < 2) return true;

	if (i * i > num) return false;
	if (i * i === num) return true;
	return isPerfectSquare(num, i + 1);
}
// @lc code=end

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(-16)); // false
console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(2)); // false

/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (44.14%)
 * Likes:    4435
 * Dislikes: 323
 * Total Accepted:    759.9K
 * Total Submissions: 1.7M
 * Testcase Example:  '16'
 *
 * Given a positive integer num, return true if num is a perfect square or
 * false otherwise.
 *
 * A perfect square is an integer that is the square of an integer. In other
 * words, it is the product of some integer with itself.
 *
 * You must not use any built-in library function, such as sqrt.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 16
 * Output: true
 * Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 14
 * Output: false
 * Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an
 * integer.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num <= 2^31 - 1
 *
 *
 */
