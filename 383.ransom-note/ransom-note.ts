// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
	const magazineFrequency: { [char: string]: number } = {};

	for (const char of magazine) {
		if (magazineFrequency[char]) {
			magazineFrequency[char]++;
		} else {
			magazineFrequency[char] = 1;
		}
	}

	for (const char of ransomNote) {
		if (!magazineFrequency[char]) {
			return false;
		} else {
			magazineFrequency[char]--;
		}
	}

	return true;
}
// @lc code=end

console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aa")); // true
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("a", "a")); // true

/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (64.33%)
 * Likes:    5332
 * Dislikes: 526
 * Total Accepted:    1.6M
 * Total Submissions: 2.5M
 * Testcase Example:  '"a"\n"b"'
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote and magazine consist of lowercase English letters.
 *
 *
 */
