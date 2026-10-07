// @lc code=start
function longestPalindrome(str: string): number {
	const charMap: Record<string, number> = {};

	for (const char of str) charMap[char] = -~charMap[char];

	let maxLength = 0;
	let carry: 0 | 1 = 0; // carry for odd value

	for (const count of Object.values(charMap))
		maxLength += count - (count % 2 && (carry = 1));

	return maxLength + carry;
}
// @lc code=end

console.log(longestPalindrome("shaishab")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("aabb")); // 4
console.log(longestPalindrome("abc")); // 3

/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.52%)
 * Likes:    6126
 * Dislikes: 429
 * Total Accepted:    918.5K
 * Total Submissions: 1.7M
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string s which consists of lowercase or uppercase letters, return
 * the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a
 * palindrome.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose
 * length is 7.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length
 * is 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2000
 * s consists of lowercase and/or uppercase English letters only.
 *
 *
 */
