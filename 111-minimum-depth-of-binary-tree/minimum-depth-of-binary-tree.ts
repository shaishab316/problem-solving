import { TreeNode } from "./utils";

// @lc code=start
function minDepth(root: TreeNode | null): number {
	if (!root) return 0;
	if (!root.left && !root.right) return 1;
	if (!root.left) return minDepth(root.right) + 1;
	if (!root.right) return minDepth(root.left) + 1;

	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
// @lc code=end

console.log(minDepth(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // 2
console.log(
	minDepth(TreeNode.fromArray([2, null, 3, null, 4, null, 5, null, 6]))
); // 5
console.log(minDepth(null)); // 0
console.log(minDepth(TreeNode.fromArray([1]))); // 1
console.log(minDepth(TreeNode.fromArray([]))); // 0

/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (50.43%)
 * Likes:    7542
 * Dislikes: 1339
 * Total Accepted:    1.4M
 * Total Submissions: 2.8M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^5].
 * -1000 <= Node.val <= 1000
 *
 *
 */
