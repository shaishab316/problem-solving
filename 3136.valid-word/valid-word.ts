// @lc code=start
function isValid(word: string): boolean {
	if (word.length < 3) return false;

	let hasVowel = false;
	let hasConsonant = false;

	for (const ch of word) {
		if (/^[0-9]$/.test(ch)) continue;
		else if (/^[a-z]$/i.test(ch)) {
			if (/^[aeiou]$/i.test(ch)) hasVowel = true;
			else hasConsonant = true;
		} else return false;
	}

	return hasVowel && hasConsonant;
}
// @lc code=end

console.log(isValid('234Adas')); // true
console.log(isValid('b3')); // false

/*
 * @lc app=leetcode id=3136 lang=typescript
 *
 * [3136] Valid Word
 *
 * https://leetcode.com/problems/valid-word/description/
 *
 * algorithms
 * Easy (47.13%)
 * Likes:    296
 * Dislikes: 147
 * Total Accepted:    115.7K
 * Total Submissions: 245.3K
 * Testcase Example:  '"234Adas"'
 *
 * A word is considered valid if:
 *
 *
 * It contains a minimum of 3 characters.
 * It contains only digits (0-9), and English letters (uppercase and
 * lowercase).
 * It includes at least one vowel.
 * It includes at least one consonant.
 *
 *
 * You are given a string word.
 *
 * Return true if word is valid, otherwise, return false.
 *
 * Notes:
 *
 *
 * 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
 * A consonant is an English letter that is not a vowel.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: word = "234Adas"
 *
 * Output: true
 *
 * Explanation:
 *
 * This word satisfies the conditions.
 *
 *
 * Example 2:
 *
 *
 * Input: word = "b3"
 *
 * Output: false
 *
 * Explanation:
 *
 * The length of this word is fewer than 3, and does not have a vowel.
 *
 *
 * Example 3:
 *
 *
 * Input: word = "a3$e"
 *
 * Output: false
 *
 * Explanation:
 *
 * This word contains a '$' character and does not have a consonant.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length <= 20
 * word consists of English uppercase and lowercase letters, digits, '@', '#',
 * and '$'.
 *
 *
 */
