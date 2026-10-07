// @lc code=start
function validPalindrome(s: string): boolean {
	let left = 0;
	let right = s.length - 1;

	function isPalindrome(s: string, left: number, right: number): boolean {
		while (left < right) {
			if (s[left] !== s[right]) return false;
			left++;
			right--;
		}

		return true;
	}

	while (left < right) {
		if (s[left] !== s[right]) {
			return (
				isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
			);
		}
		left++;
		right--;
	}

	return true;
}
// @lc code=end

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("a")); // true
console.log(validPalindrome("aa")); // true

/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (42.86%)
 * Likes:    8575
 * Dislikes: 482
 * Total Accepted:    959.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '"aba"'
 *
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aba"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abc"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 *
 *
 */
