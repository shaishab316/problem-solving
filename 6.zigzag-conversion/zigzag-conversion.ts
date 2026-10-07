// @lc code=start
function convert(str: string, numRows: number): string {
	if (numRows === 1) return str;
	const rows = Array(numRows).fill("");
	let currentRow = 0;
	let goingDown = false;

	for (const ch of str) {
		rows[currentRow] += ch;

		// if this is first or last index of row, then go down
		if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;

		currentRow += goingDown ? 1 : -1; // forward or backward
	}

	return rows.join("");
}
// @lc code=end

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
console.log(convert("AB", 1)); // "AB"
console.log(convert("AB", 2)); // "AB"

/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (51.33%)
 * Likes:    8492
 * Dislikes: 15363
 * Total Accepted:    1.8M
 * Total Submissions: 3.4M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 *
 * Example 3:
 *
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 *
 *
 */
