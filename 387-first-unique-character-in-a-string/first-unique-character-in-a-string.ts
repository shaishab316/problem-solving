// @lc code=start
function firstUniqChar(s: string): number {
	for (let c of s) {
		if (s.indexOf(c) === s.lastIndexOf(c)) {
			return s.indexOf(c);
		}
	}

	return -1;
}
// @lc code=end

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("")); // -1
console.log(firstUniqChar("a")); // 0

/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (63.52%)
 * Likes:    9271
 * Dislikes: 312
 * Total Accepted:    2M
 * Total Submissions: 3.1M
 * Testcase Example:  '"leetcode"'
 *
 * Given a string s, find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetcode"
 *
 * Output: 0
 *
 * Explanation:
 *
 * The character 'l' at index 0 is the first character that does not occur at
 * any other index.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "loveleetcode"
 *
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: s = "aabb"
 *
 * Output: -1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 *
 *
 */
