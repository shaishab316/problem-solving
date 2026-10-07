// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>();

	for (const str of strs) {
		const count = new Array(26).fill(0);

		for (let i = 0; i < str.length; i++) {
			count[str.charCodeAt(i) - 97]++;
		}

		const key = count.join("#");

		if (map.has(key)) map.get(key)?.push(str);
		else map.set(key, [str]);
	}

	return Array.from(map.values());
}
// @lc code=end

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["a", ""])); // [["a"],[""]]
console.log(groupAnagrams(["a", "a"])); // [["a","a"]]

/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (70.73%)
 * Likes:    20448
 * Dislikes: 685
 * Total Accepted:    3.8M
 * Total Submissions: 5.3M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Explanation:
 *
 *
 * There is no string in strs that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form
 * each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged
 * to form each other.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: strs = [""]
 *
 * Output: [[""]]
 *
 *
 * Example 3:
 *
 *
 * Input: strs = ["a"]
 *
 * Output: [["a"]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 *
 *
 */
