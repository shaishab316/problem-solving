// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
	let count = 0;

	for (const w of words) {
		let valid = true;
		for (const c of w) {
			if (!allowed.includes(c)) {
				valid = false;
				break;
			}
		}
		if (valid) count++;
	}

	return count;
}
// @lc code=end

console.log(
	countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
); // 7
console.log(
	countConsistentStrings("cad", [
		"cc",
		"acd",
		"b",
		"ba",
		"bac",
		"bad",
		"ac",
		"d",
	])
); // 4

/*
 * @lc app=leetcode id=1684 lang=typescript
 *
 * [1684] Count the Number of Consistent Strings
 *
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
 *
 * algorithms
 * Easy (88.27%)
 * Likes:    2206
 * Dislikes: 88
 * Total Accepted:    400.4K
 * Total Submissions: 453.6K
 * Testcase Example:  '"ab"\n["ad","bd","aaab","baa","badab"]'
 *
 * You are given a string allowed consisting of distinct characters and an
 * array of strings words. A string is consistent if all characters in the
 * string appear in the string allowed.
 *
 * Return the number of consistent strings in the array words.
 *
 *
 * Example 1:
 *
 *
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain
 * characters 'a' and 'b'.
 *
 *
 * Example 2:
 *
 *
 * Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
 * Output: 7
 * Explanation: All strings are consistent.
 *
 *
 * Example 3:
 *
 *
 * Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
 * Output: 4
 * Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 10^4
 * 1 <= allowed.length <=^ 26
 * 1 <= words[i].length <= 10
 * The characters in allowed are distinct.
 * words[i] and allowed contain only lowercase English letters.
 *
 *
 */
