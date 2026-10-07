import { TreeNode } from "./utils";

// @lc code=start
function averageOfLevels(root: TreeNode | null): number[] {
	if (!root) return [];

	const result: number[] = [];
	const queue: TreeNode[] = [root];

	while (queue.length) {
		const levelSize = queue.length;
		let levelSum = 0;

		for (let i = 0; i < levelSize; i++) {
			const currentNode = queue.shift()!;
			levelSum += currentNode.val;

			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		result.push(levelSum / levelSize);
	}

	return result;
}
// @lc code=end

console.log(averageOfLevels(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // [3, 14.5, 11]
console.log(averageOfLevels(TreeNode.fromArray([3, 9, 20, 15, 7]))); // [3, 14.5, 11]
console.log(averageOfLevels(null)); // []
console.log(averageOfLevels(TreeNode.fromArray([3, 9, 20, 15, 7, 1, 2]))); // [3, 14.5, 11, 6]
console.log(averageOfLevels(TreeNode.fromArray([2147483647]))); // [2147483647]

/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (74.01%)
 * Likes:    5439
 * Dislikes: 346
 * Total Accepted:    643.6K
 * Total Submissions: 869.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the average value of the nodes on
 * each level in the form of an array. Answers within 10^-5 of the actual
 * answer will be accepted.
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [3.00000,14.50000,11.00000]
 * Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5,
 * and on level 2 is 11.
 * Hence return [3, 14.5, 11].
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,9,20,15,7]
 * Output: [3.00000,14.50000,11.00000]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 *
 *
 */
