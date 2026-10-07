// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
	const words = s.split(" ");
	if (words.length !== pattern.length) return false;
	const map = new Map<string, string>();

	for (let i = 0; i < pattern.length; i++) {
		const p = pattern[i];
		const w = words[i];

		if (map.has(p) && map.get(p) !== w) return false;
		if (Array.from(map.values()).includes(w) && !map.has(p)) return false;

		map.set(p, w);
	}

	return true;
}
// @lc code=end

console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("abba", "dog cat cat dog")); // true

/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (42.98%)
 * Likes:    7614
 * Dislikes: 1093
 * Total Accepted:    931.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in s. Specifically:
 *
 *
 * Each letter in pattern maps to exactly one unique word in s.
 * Each unique word in s maps to exactly one letter in pattern.
 * No two letters map to the same word, and no two words map to the same
 * letter.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: pattern = "abba", s = "dog cat cat dog"
 *
 * Output: true
 *
 * Explanation:
 *
 * The bijection can be established as:
 *
 *
 * 'a' maps to "dog".
 * 'b' maps to "cat".
 *
 *
 *
 * Example 2:
 *
 *
 * Input: pattern = "abba", s = "dog cat cat fish"
 *
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 *
 *
 */
