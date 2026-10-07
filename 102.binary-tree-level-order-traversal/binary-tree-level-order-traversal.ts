import { TreeNode } from "./utils";

// @lc code=start
function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];

	const totalLevel: number[][] = [];
	const queue: TreeNode[] = [root];

	while (queue.length > 0) {
		const levelSize = queue.length;
		const currentLevel: number[] = [];

		for (let i = 0; i < levelSize; i++) {
			const currentNode = queue.shift()!;
			currentLevel.push(currentNode.val);

			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		totalLevel.push(currentLevel);
	}

	return totalLevel;
}
// @lc code=end

console.log(levelOrder(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // [[3],[9,20],[15,7]]
console.log(levelOrder(TreeNode.fromArray([1]))); // [[1]]
console.log(levelOrder(null)); // []
console.log(levelOrder(TreeNode.fromArray([]))); // []
console.log(levelOrder(TreeNode.fromArray([1, null, 3, 2, 4, null, 5, 6]))); // [[1],[3,2,4],[5,6]]

/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (70.32%)
 * Likes:    16149
 * Dislikes: 346
 * Total Accepted:    2.8M
 * Total Submissions: 4M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 *
 *
 */
