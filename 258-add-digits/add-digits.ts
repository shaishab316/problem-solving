// @lc code=start
function addDigits(num: number): number {
	if (num < 10) return num;
	return addDigits((num % 10) + Math.floor(num / 10));
}
// @lc code=end

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
console.log(addDigits(10)); // 1
console.log(addDigits(1)); // 1
console.log(addDigits(2)); // 2

/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (67.81%)
 * Likes:    5095
 * Dislikes: 1954
 * Total Accepted:    970.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '38'
 *
 * Given an integer num, repeatedly add all its digits until the result has
 * only one digit, and return it.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= num <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 *
 */
