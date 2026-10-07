// @lc code=start
function scoreOfString(s: string): number {
	let score = 0;
	for (let i = 0; i < s.length - 1; i++) {
		score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
	}

	return score;
}
// @lc code=end

console.log(scoreOfString("hello")); // 13
console.log(scoreOfString("zaz")); // 50
console.log(scoreOfString("a")); // 0
console.log(scoreOfString("aa")); // 0
console.log(scoreOfString("aaa")); // 0

/*
 * @lc app=leetcode id=3110 lang=typescript
 *
 * [3110] Score of a String
 *
 * https://leetcode.com/problems/score-of-a-string/description/
 *
 * algorithms
 * Easy (91.94%)
 * Likes:    706
 * Dislikes: 45
 * Total Accepted:    352.8K
 * Total Submissions: 383.7K
 * Testcase Example:  '"hello"'
 *
 * You are given a string s. The score of a string is defined as the sum of the
 * absolute difference between the ASCII values of adjacent characters.
 *
 * Return the score of s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "hello"
 *
 * Output: 13
 *
 * Explanation:
 *
 * The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' =
 * 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108
 * - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "zaz"
 *
 * Output: 50
 *
 * Explanation:
 *
 * The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the
 * score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 100
 * s consists only of lowercase English letters.
 *
 *
 */
