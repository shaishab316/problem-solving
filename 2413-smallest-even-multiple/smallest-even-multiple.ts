// @lc code=start
function smallestEvenMultiple(n: number): number {
	return n % 2 === 0 ? n : n * 2;
}
// @lc code=end

console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6
console.log(smallestEvenMultiple(7)); // 14
console.log(smallestEvenMultiple(8)); // 8
console.log(smallestEvenMultiple(9)); // 18

/*
 * @lc app=leetcode id=2413 lang=typescript
 *
 * [2413] Smallest Even Multiple
 *
 * https://leetcode.com/problems/smallest-even-multiple/description/
 *
 * algorithms
 * Easy (88.09%)
 * Likes:    970
 * Dislikes: 116
 * Total Accepted:    231.4K
 * Total Submissions: 262.7K
 * Testcase Example:  '5'
 *
 * Given a positive integer n, return the smallest positive integer that is a
 * multiple of both 2 and n.
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: 10
 * Explanation: The smallest multiple of both 5 and 2 is 10.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 6
 * Output: 6
 * Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number
 * is a multiple of itself.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 150
 *
 *
 */
