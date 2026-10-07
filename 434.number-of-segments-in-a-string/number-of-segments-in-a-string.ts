// @lc code=start
function countSegments(s: string): number {
	s = s.replace(/\s+/g, " ");
	return s.split(" ").filter(Boolean).length;
}
// @lc code=end

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
console.log(countSegments("")); // 0
console.log(countSegments("   ")); // 0
console.log(countSegments("One, two, three, four, five.")); // 5

/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (36.34%)
 * Likes:    834
 * Dislikes: 1303
 * Total Accepted:    224.2K
 * Total Submissions: 617K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello, my name is John"
 * Output: 5
 * Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "Hello"
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 300
 * s consists of lowercase and uppercase English letters, digits, or one of the
 * following characters "!@#$%^&*()_+-=',.:".
 * The only space character in s is ' '.
 *
 *
 */
