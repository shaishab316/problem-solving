// @lc code=start
function interpret(command: string): string {
	return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
}
// @lc code=end

console.log(interpret("G()(al)")); // Goal
console.log(interpret("G()()()()")); // Goooo
console.log(interpret("(al)G(al)()()G")); // alGalooG
console.log(interpret("G()()()()")); // Goooo
console.log(interpret("(al)G(al)()()G")); // alGalooG

/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 *
 * https://leetcode.com/problems/goal-parser-interpretation/description/
 *
 * algorithms
 * Easy (87.66%)
 * Likes:    1619
 * Dislikes: 91
 * Total Accepted:    290.1K
 * Total Submissions: 330.9K
 * Testcase Example:  '"G()(al)"'
 *
 * You own a Goal Parser that can interpret a string command. The command
 * consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal
 * Parser will interpret "G" as the string "G", "()" as the string "o", and
 * "(al)" as the string "al". The interpreted strings are then concatenated in
 * the original order.
 *
 * Given the string command, return the Goal Parser's interpretation of
 * command.
 *
 *
 * Example 1:
 *
 *
 * Input: command = "G()(al)"
 * Output: "Goal"
 * Explanation: The Goal Parser interprets the command as follows:
 * G -> G
 * () -> o
 * (al) -> al
 * The final concatenated result is "Goal".
 *
 *
 * Example 2:
 *
 *
 * Input: command = "G()()()()(al)"
 * Output: "Gooooal"
 *
 *
 * Example 3:
 *
 *
 * Input: command = "(al)G(al)()()G"
 * Output: "alGalooG"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= command.length <= 100
 * command consists of "G", "()", and/or "(al)" in some order.
 *
 *
 */
