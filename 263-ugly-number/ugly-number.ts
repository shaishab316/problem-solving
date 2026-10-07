// @lc code=start
function isUgly(n: number): boolean {
	if (n <= 0) return false;
	while (n % 2 === 0) n /= 2;
	while (n % 3 === 0) n /= 3;
	while (n % 5 === 0) n /= 5;
	return n === 1;
}
// @lc code=end

console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false
console.log(isUgly(8)); // true
console.log(isUgly(0)); // false

/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 *
 * https://leetcode.com/problems/ugly-number/description/
 *
 * algorithms
 * Easy (42.30%)
 * Likes:    3589
 * Dislikes: 1755
 * Total Accepted:    629.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '6'
 *
 * An ugly number is a positive integer which does not have a prime factor
 * other than 2, 3, and 5.
 *
 * Given an integer n, return true if n is an ugly number.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 6
 * Output: true
 * Explanation: 6 = 2 × 3
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: true
 * Explanation: 1 has no prime factors.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 14
 * Output: false
 * Explanation: 14 is not ugly since it includes the prime factor 7.
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 */
