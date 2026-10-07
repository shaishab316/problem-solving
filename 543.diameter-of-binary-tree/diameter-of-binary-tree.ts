import { TreeNode } from "./utils";

// @lc code=start
function diameterOfBinaryTree(root: TreeNode | null, max?: [number]): number {
	if (!root) return 0;

	const isRoot = !max;
	max ??= [0];

	const left = diameterOfBinaryTree(root.left, max);
	const right = diameterOfBinaryTree(root.right, max);

	if (isRoot) return Math.max(left + right, max[0]);

	max[0] = Math.max(left + right, max[0]);
	return Math.max(left, right) + 1;
}
// @lc code=end

console.log(TreeNode.fromArray([1, 2, 3, 4, 5])); // 3
console.log(diameterOfBinaryTree(TreeNode.fromArray([1, 2, 3, 4, 5]))); // 3
console.log(diameterOfBinaryTree(TreeNode.fromArray([1, 2]))); // 1
console.log(diameterOfBinaryTree(null)); // 0
console.log(diameterOfBinaryTree(TreeNode.fromArray([1]))); // 0

/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (63.31%)
 * Likes:    14722
 * Dislikes: 1163
 * Total Accepted:    2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the root of a binary tree, return the length of the diameter of the
 * tree.
 *
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges
 * between them.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -100 <= Node.val <= 100
 *
 *
 */
