// @lc code=start
function addStrings(num1: string, num2: string): string {
	let curry = 0;
	let result = "";

	for (
		let i = num1.length - 1, j = num2.length - 1;
		i >= 0 || j >= 0;
		i--, j--
	) {
		const sum = +(num1[i] ?? 0) + +(num2[j] ?? 0) + curry;

		result = (sum % 10) + result;
		curry = Math.floor(sum / 10);
	}

	return (curry || "") + result;
}
// @lc code=end

console.log(addStrings("11", "123")); // "134"
console.log(addStrings("456", "77")); // "533"
console.log(addStrings("0", "0")); // "0"
console.log(addStrings("9", "99")); // "108"
console.log(addStrings("99", "9")); // "108"

/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (51.86%)
 * Likes:    5230
 * Dislikes: 798
 * Total Accepted:    807.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '"11"\n"123"'
 *
 * Given two non-negative integers, num1 and num2 represented as string, return
 * the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the inputs to
 * integers directly.
 *
 *
 * Example 1:
 *
 *
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 *
 * Example 3:
 *
 *
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 *
 */
