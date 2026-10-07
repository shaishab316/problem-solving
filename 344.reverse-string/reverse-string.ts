// @lc code=start
function reverseString(s: string[]): void {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		let temp = s[left];
		s[left] = s[right];
		s[right] = temp;

		left++;
		right--;
	}
}
// @lc code=end

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
console.log(reverseString(["a", "b", "c", "d", "e"])); // ["e","d","c","b","a"]
console.log(reverseString(["a", "b", "c", "d", "e", "f"])); // ["f","e","d","c","b","a"]
console.log(reverseString(["a", "b", "c", "d", "e", "f", "g"])); // ["g","f","e","d","c","b","a"]

/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (79.66%)
 * Likes:    8978
 * Dislikes: 1192
 * Total Accepted:    3.2M
 * Total Submissions: 4M
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra
 * memory.
 *
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 *
 *
 */
