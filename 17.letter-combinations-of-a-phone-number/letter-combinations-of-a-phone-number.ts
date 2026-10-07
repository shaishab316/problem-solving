// @lc code=start
const digitToLetters: { [key: string]: string[] } = {
	"2": ["a", "b", "c"],
	"3": ["d", "e", "f"],
	"4": ["g", "h", "i"],
	"5": ["j", "k", "l"],
	"6": ["m", "n", "o"],
	"7": ["p", "q", "r", "s"],
	"8": ["t", "u", "v"],
	"9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
	const result: string[] = [];
	if (digits.length === 0) return result;

	function backtrack(idx: number, combination: string): void {
		if (idx === digits.length) {
			result.push(combination);
			return;
		}

		const digit = digits[idx];
		const letters = digitToLetters[digit];

		for (const letter of letters) backtrack(idx + 1, combination + letter);
	}

	backtrack(0, "");

	return result;
}
// @lc code=end

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
console.log(letterCombinations("3")); // ["d","e","f"]
console.log(letterCombinations("4")); // ["g","h","i"]

/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (63.61%)
 * Likes:    19794
 * Dislikes: 1075
 * Total Accepted:    2.6M
 * Total Submissions: 4M
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer in
 * any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 *
 * Example 1:
 *
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * Example 2:
 *
 *
 * Input: digits = ""
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 *
 *
 */
