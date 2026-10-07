// @lc code=start
function theMaximumAchievableX(num: number, t: number): number {
	return num + t * 2;
}
// @lc code=end

console.log(theMaximumAchievableX(4, 1)); // 6
console.log(theMaximumAchievableX(3, 2)); // 7
console.log(theMaximumAchievableX(7, 2)); // 9
console.log(theMaximumAchievableX(1, 50)); // 51
console.log(theMaximumAchievableX(50, 50)); // 100

/*
 * @lc app=leetcode id=2769 lang=typescript
 *
 * [2769] Find the Maximum Achievable Number
 *
 * https://leetcode.com/problems/find-the-maximum-achievable-number/description/
 *
 * algorithms
 * Easy (90.79%)
 * Likes:    418
 * Dislikes: 678
 * Total Accepted:    155.4K
 * Total Submissions: 171.2K
 * Testcase Example:  '4\n1'
 *
 * Given two integers, num and t. A number x is achievable if it can become
 * equal to num after applying the following operation at most t times:
 *
 *
 * Increase or decrease x by 1, and simultaneously increase or decrease num by
 * 1.
 *
 *
 * Return the maximum possible value of x.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 4, t = 1
 *
 * Output: 6
 *
 * Explanation:
 *
 * Apply the following operation once to make the maximum achievable number
 * equal to num:
 *
 *
 * Decrease the maximum achievable number by 1, and increase num by 1.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: num = 3, t = 2
 *
 * Output: 7
 *
 * Explanation:
 *
 * Apply the following operation twice to make the maximum achievable number
 * equal to num:
 *
 *
 * Decrease the maximum achievable number by 1, and increase num by 1.
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num, t <= 50
 *
 *
 */
