// @lc code=start
function maxFreqSum(s: string): number {
	const vowels = new Set(["a", "e", "i", "o", "u"]);
	const counts: Record<string, number> = {};

	for (const c of s) counts[c] = -~counts[c];

	let maxV = 0;
	let maxC = 0;

	for (const [char, count] of Object.entries(counts))
		if (vowels.has(char)) maxV = Math.max(maxV, count);
		else maxC = Math.max(maxC, count);

	return maxV + maxC;
}
// @lc code=end

console.log(maxFreqSum("successes")); // 4
console.log(maxFreqSum("aabbcc")); // 0

/*
 * @lc app=leetcode id=3541 lang=typescript
 *
 * [3541] Find Most Frequent Vowel and Consonant
 *
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
 *
 * algorithms
 * Easy (87.39%)
 * Likes:    50
 * Dislikes: 1
 * Total Accepted:    29.3K
 * Total Submissions: 33.5K
 * Testcase Example:  '"successes"'
 *
 * You are given a string s consisting of lowercase English letters ('a' to
 * 'z').
 *
 * Your task is to:
 *
 *
 * Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum
 * frequency.
 * Find the consonant (all other letters excluding vowels) with the maximum
 * frequency.
 *
 *
 * Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you
 * may choose any one of them. If there are no vowels or no consonants in the
 * string, consider their frequency as 0.
 * The frequency of a letter x is the number of times it occurs in the
 * string.
 *
 * Example 1:
 *
 *
 * Input: s = "successes"
 *
 * Output: 6
 *
 * Explanation:
 *
 *
 * The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency
 * is 2.
 * The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum
 * frequency is 4.
 * The output is 2 + 4 = 6.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aeiaeia"
 *
 * Output: 3
 *
 * Explanation:
 *
 *
 * The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2).
 * The maximum frequency is 3.
 * There are no consonants in s. Hence, maximum consonant frequency = 0.
 * The output is 3 + 0 = 3.
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of lowercase English letters only.
 *
 *
 */
