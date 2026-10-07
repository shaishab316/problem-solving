// @lc code=start
function partition(s: string): string[][] {
	const result: string[][] = [];

	function isPalindrome(str: string, start: number, end: number): boolean {
		while (start < end) {
			if (str[start] !== str[end]) return false;
			start++;
			end--;
		}

		return true;
	}

	function backtrack(start: number, paths: string[]): void {
		if (start === s.length) {
			result.push([...paths]);
			return;
		}

		for (let end = start; end < s.length; end++) {
			if (isPalindrome(s, start, end)) {
				paths.push(s.substring(start, end + 1));
				backtrack(end + 1, paths);
				paths.pop(); // Backtrack
			}
		}
	}

	backtrack(0, []);

	return result;
}
// @lc code=end

console.log(partition("aab"));

/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (71.98%)
 * Likes:    13694
 * Dislikes: 550
 * Total Accepted:    1.2M
 * Total Submissions: 1.6M
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome. Return all possible palindrome partitioning of s.
 *
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 *
 *
 */
