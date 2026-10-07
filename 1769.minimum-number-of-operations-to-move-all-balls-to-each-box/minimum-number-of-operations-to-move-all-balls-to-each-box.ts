// @lc code=start
function minOperations(boxes: string): number[] {
	const n = boxes.length;
	const result = new Array(n).fill(0);

	let balls = 0;
	let operations = 0;

	// left pass
	for (let i = 0; i < n; i++) {
		result[i] += operations;
		if (boxes[i] === "1") balls++;
		operations += balls;
	}

	balls = 0;
	operations = 0;

	// right pass
	for (let i = n; --i >= 0; ) {
		result[i] += operations;
		if (boxes[i] === "1") balls++;
		operations += balls;
	}

	return result;
}
// @lc code=end

console.log(minOperations("110")); // [1,1,3]
console.log(minOperations("001011")); // [11,8,5,4,3,4]

/*
 * @lc app=leetcode id=1769 lang=typescript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
 *
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/
 *
 * algorithms
 * Medium (90.13%)
 * Likes:    3024
 * Dislikes: 132
 * Total Accepted:    305.5K
 * Total Submissions: 339K
 * Testcase Example:  '"110"'
 *
 * You have n boxes. You are given a binary string boxes of length n, where
 * boxes[i] is '0' if the i^th box is empty, and '1' if it contains one ball.
 *
 * In one operation, you can move one ball from a box to an adjacent box. Box i
 * is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may
 * be more than one ball in some boxes.
 *
 * Return an array answer of size n, where answer[i] is the minimum number of
 * operations needed to move all the balls to the i^th box.
 *
 * Each answer[i] is calculated considering the initial state of the boxes.
 *
 *
 * Example 1:
 *
 *
 * Input: boxes = "110"
 * Output: [1,1,3]
 * Explanation: The answer for each box is as follows:
 * 1) First box: you will have to move one ball from the second box to the
 * first box in one operation.
 * 2) Second box: you will have to move one ball from the first box to the
 * second box in one operation.
 * 3) Third box: you will have to move one ball from the first box to the third
 * box in two operations, and move one ball from the second box to the third
 * box in one operation.
 *
 *
 * Example 2:
 *
 *
 * Input: boxes = "001011"
 * Output: [11,8,5,4,3,4]
 *
 *
 * Constraints:
 *
 *
 * n == boxes.length
 * 1 <= n <= 2000
 * boxes[i] is either '0' or '1'.
 *
 *
 */
