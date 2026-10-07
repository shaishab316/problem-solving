// @lc code=start
function longestPalindrome(str: string): string {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < 2; j++) {
			let left = i;
			let right = i + j;

			while (str[left] === str[right]) {
				if (right + 1 - left > result.length)
					result = str.slice(left, right + 1);
				if (--left < 0 || ++right >= str.length) break;
			}
		}

		if (str.length - i <= result.length / 2) break;
	}

	return result;
}
// @lc code=end

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"
console.log(longestPalindrome("bb")); // "bb"

/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (35.65%)
 * Likes:    30734
 * Dislikes: 1895
 * Total Accepted:    3.8M
 * Total Submissions: 10.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */
