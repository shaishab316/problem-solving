// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
	let count = 0;
	const set = new Set(jewels);

	for (const s of stones) if (set.has(s)) count++;

	return count;
}
// @lc code=end

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0

/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (89.18%)
 * Likes:    5252
 * Dislikes: 614
 * Total Accepted:    1.2M
 * Total Submissions: 1.4M
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings jewels representing the types of stones that are
 * jewels, and stones representing the stones you have. Each character in
 * stones is a type of stone you have. You want to know how many of the stones
 * you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone
 * from "A".
 *
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 *
 *
 */
