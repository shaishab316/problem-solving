// @lc code=start
function decodeString(s: string): string {
	const stack: Array<{ str: string; num: number }> = [];
	let currentStr = "";
	let currentNum = 0;

	for (const char of s) {
		if (char >= "0" && char <= "9") {
			currentNum = currentNum * 10 + parseInt(char, 10);
		} else if (char === "[") {
			stack.push({ str: currentStr, num: currentNum });
			currentStr = "";
			currentNum = 0;
		} else if (char === "]") {
			const { str, num } = stack.pop()!;
			currentStr = str + currentStr.repeat(num);
		} else {
			currentStr += char;
		}
	}

	return currentStr;
}
// @lc code=end

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
console.log(decodeString("10[abc]")); // "abcabcabcabcabcabcabcabcabc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"

/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (60.98%)
 * Likes:    13339
 * Dislikes: 655
 * Total Accepted:    1M
 * Total Submissions: 1.6M
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra
 * white spaces, square brackets are well-formed, etc. Furthermore, you may
 * assume that the original data does not contain any digits and that digits
 * are only for those repeat numbers, k. For example, there will not be input
 * like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never
 * exceed 10^5.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 30
 * s consists of lowercase English letters, digits, and square brackets
 * '[]'.
 * s is guaranteed to be a valid input.
 * All the integers in s are in the range [1, 300].
 *
 *
 */
