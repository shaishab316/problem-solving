// @lc code=start
function reverseVowels(s: string): string {
	const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
	const chars = s.split("");

	let left = 0;
	let right = chars.length - 1;

	while (left < right) {
		if (!vowels.has(chars[left])) {
			left++;
		} else if (!vowels.has(chars[right])) {
			right--;
		} else {
			let temp = chars[left];
			chars[left] = chars[right];
			chars[right] = temp;

			left++;
			right--;
		}
	}

	return chars.join("");
}

// @lc code=end

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"
console.log(reverseVowels("aA")); // "Aa"
console.log(reverseVowels("a")); // "a"
console.log(reverseVowels("")); // ""

/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (57.80%)
 * Likes:    4941
 * Dislikes: 2831
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '"IceCreAm"'
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "IceCreAm"
 *
 * Output: "AceCreIm"
 *
 * Explanation:
 *
 * The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes
 * "AceCreIm".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "leetcode"
 *
 * Output: "leotcede"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s consist of printable ASCII characters.
 *
 *
 */
