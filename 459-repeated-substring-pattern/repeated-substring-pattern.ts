// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
	return (s + s).slice(1, -1).includes(s);
}
// @lc code=end

console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("abcabcabcabc")); // true
console.log(repeatedSubstringPattern("")); // false
console.log(repeatedSubstringPattern("abc")); // false

/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (46.79%)
 * Likes:    6609
 * Dislikes: 545
 * Total Accepted:    523K
 * Total Submissions: 1.1M
 * Testcase Example:  '"abab"'
 *
 * Given a string s, check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aba"
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc"
 * twice.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of lowercase English letters.
 *
 *
 */
