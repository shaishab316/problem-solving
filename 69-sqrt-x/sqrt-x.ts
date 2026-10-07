// @lc code=start
function mySqrt(x: number): number {
	if (x < 2) return x;

	let left = 1;
	let right = x;

	let result = 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		const square = mid * mid;

		if (square === x) return mid;
		if (square < x) {
			result = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return result;
}
// @lc code=end

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(10)); // 3
console.log(mySqrt(11)); // 3

/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (40.27%)
 * Likes:    8845
 * Dislikes: 4576
 * Total Accepted:    2.5M
 * Total Submissions: 6.3M
 * Testcase Example:  '4'
 *
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down
 * to the nearest integer, 2 is returned.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */
