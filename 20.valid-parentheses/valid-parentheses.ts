// @lc code=start
function isValid(str: string): boolean {
	const stack: string[] = [];
	const map: Record<string, string> = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const ch of str) {
		if (map[ch]) {
			const top = stack.pop()!;
			if (top !== map[ch]) return false;
		} else {
			stack.push(ch);
		}
	}

	return stack.length === 0;
}
// @lc code=end

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("{[]}")); // true

/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (42.17%)
 * Likes:    25714
 * Dislikes: 1875
 * Total Accepted:    6M
 * Total Submissions: 14.3M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 *
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 *
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: s = "([])"
 *
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */
