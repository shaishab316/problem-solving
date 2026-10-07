/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Easy (69.58%)
 * Likes:    9049
 * Dislikes: 567
 * Total Accepted:    947.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * Given the root of a complete binary tree, return the number of the nodes in
 * the tree.
 *
 * According to Wikipedia, every level, except possibly the last, is completely
 * filled in a complete binary tree, and all nodes in the last level are as far
 * left as possible. It can have between 1 and 2^h nodes inclusive at the last
 * level h.
 *
 * Design an algorithm that runs in less than O(n) time complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5,6]
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: 0
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5 * 10^4].
 * 0 <= Node.val <= 5 * 10^4
 * The tree is guaranteed to be complete.
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */

// class TreeNode {
// 	val: number;
// 	left: TreeNode | null;
// 	right: TreeNode | null;
// 	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.left = left === undefined ? null : left;
// 		this.right = right === undefined ? null : right;
// 	}
// }

function countNodes(root: TreeNode | null): number {
	if (!root) return 0;

	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);

	/** (1 << n) means 2^n (Math.pow(2, n) || 2 ** n) */
	/** << more fast than Math.pow */

	if (leftHeight === rightHeight) {
		return (1 << leftHeight) + countNodes(root.right);
	} else {
		return (1 << rightHeight) + countNodes(root.left);
	}
}

function getHeight(node: TreeNode | null): number {
	if (!node) return 0;

	return 1 + getHeight(node.left);
}
// @lc code=end
