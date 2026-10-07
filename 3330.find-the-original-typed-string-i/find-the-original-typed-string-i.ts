// @lc code=start
function possibleStringCount(word: string): number {
	if (!word.length) return 0;

	let total = 0;
	let currChar = word[0];
	let currLen = 1;

	for (let i = 1; i < word.length; i++) {
		if (word[i] === currChar) currLen++;
		else {
			if (currLen >= 2) total += currLen - 1;

			// reset
			currChar = word[i];
			currLen = 1;
		}
	}

	if (currLen >= 2) total += currLen - 1;

	return total + 1;
}
// @lc code=end

console.log(possibleStringCount('abbcccc')); // 5
console.log(possibleStringCount('abcd')); // 1
console.log(possibleStringCount('aaaa')); // 4

/*
 * @lc app=leetcode id=3330 lang=typescript
 *
 * [3330] Find the Original Typed String I
 *
 * https://leetcode.com/problems/find-the-original-typed-string-i/description/
 *
 * algorithms
 * Easy (56.56%)
 * Likes:    368
 * Dislikes: 53
 * Total Accepted:    131.4K
 * Total Submissions: 187.2K
 * Testcase Example:  '"abbcccc"'
 *
 * Alice is attempting to type a specific string on her computer. However, she
 * tends to be clumsy and may press a key for too long, resulting in a
 * character being typed multiple times.
 *
 * Although Alice tried to focus on her typing, she is aware that she may still
 * have done this at most once.
 *
 * You are given a string word, which represents the final output displayed on
 * Alice's screen.
 *
 * Return the total number of possible original strings that Alice might have
 * intended to type.
 *
 *
 * Example 1:
 *
 *
 * Input: word = "abbcccc"
 *
 * Output: 5
 *
 * Explanation:
 *
 * The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and
 * "abcccc".
 *
 *
 * Example 2:
 *
 *
 * Input: word = "abcd"
 *
 * Output: 1
 *
 * Explanation:
 *
 * The only possible string is "abcd".
 *
 *
 * Example 3:
 *
 *
 * Input: word = "aaaa"
 *
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length <= 100
 * word consists only of lowercase English letters.
 *
 *
 */
