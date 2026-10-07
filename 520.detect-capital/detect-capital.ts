// @lc code=start
function detectCapitalUse(word: string): boolean {
	const isAllUppercase = word === word.toUpperCase();
	const isAllLowercase = word === word.toLowerCase();

	const isFirstUpperRestLowercase =
		word[0] === word[0].toUpperCase() &&
		word.slice(1) === word.slice(1).toLowerCase();

	return isAllUppercase || isAllLowercase || isFirstUpperRestLowercase;
}
// @lc code=end

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("Google")); // true
console.log(detectCapitalUse("Shaishab")); // true

/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 *
 * https://leetcode.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (56.14%)
 * Likes:    3480
 * Dislikes: 465
 * Total Accepted:    483.1K
 * Total Submissions: 860.5K
 * Testcase Example:  '"USA"'
 *
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 *
 *
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 *
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 *
 * Example 1:
 * Input: word = "USA"
 * Output: true
 * Example 2:
 * Input: word = "FlaG"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length <= 100
 * word consists of lowercase and uppercase English letters.
 *
 *
 */
