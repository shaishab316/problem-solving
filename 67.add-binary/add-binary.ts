// @lc code=start
function addBinary(a: string, b: string): string {
	let result = "";
	let carry = 0;

	let aLen = a.length;
	let bLen = b.length;

	while (aLen > 0 || bLen > 0 || carry) {
		const bitA = aLen > 0 ? +a[--aLen] : 0;
		const bitB = bLen > 0 ? +b[--bLen] : 0;

		const sum = bitA + bitB + carry;

		result = (sum % 2) + result;
		carry = sum > 1 ? 1 : 0;
	}

	return result;
}
// @lc code=end

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(addBinary("1", "1")); // "10"
console.log(addBinary("0", "0")); // "0"
console.log(addBinary("0", "1")); // "1"

/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (55.53%)
 * Likes:    9890
 * Dislikes: 1039
 * Total Accepted:    1.8M
 * Total Submissions: 3.3M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */
