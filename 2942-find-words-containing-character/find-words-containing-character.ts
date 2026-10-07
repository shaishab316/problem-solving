// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
	const result: number[] = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i].includes(x)) {
			result.push(i);
		}
	}
	return result;
}
// @lc code=end

console.log(findWordsContaining(["leet", "code"], "e")); // [0,1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); // [0,2]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")); // []
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "b")); // [1,3]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "c")); // [2,3]

/*
 * @lc app=leetcode id=2942 lang=typescript
 *
 * [2942] Find Words Containing Character
 *
 * https://leetcode.com/problems/find-words-containing-character/description/
 *
 * algorithms
 * Easy (88.43%)
 * Likes:    402
 * Dislikes: 32
 * Total Accepted:    196.2K
 * Total Submissions: 221.9K
 * Testcase Example:  '["leet","code"]\n"e"'
 *
 * You are given a 0-indexed array of strings words and a character x.
 *
 * Return an array of indices representing the words that contain the character
 * x.
 *
 * Note that the returned array may be in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["leet","code"], x = "e"
 * Output: [0,1]
 * Explanation: "e" occurs in both words: "leet", and "code". Hence, we return
 * indices 0 and 1.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
 * Output: [0,2]
 * Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and
 * 2.
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
 * Output: []
 * Explanation: "z" does not occur in any of the words. Hence, we return an
 * empty array.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 50
 * 1 <= words[i].length <= 50
 * x is a lowercase English letter.
 * words[i] consists only of lowercase English letters.
 *
 *
 */
