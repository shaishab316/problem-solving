import { TreeNode } from "./utils";

// @lc code=start
function maxDepth(root: TreeNode | null): number {
	return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// @lc code=end

console.log(maxDepth(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepth(TreeNode.fromArray([1, null, 2]))); // 2
console.log(maxDepth(null)); // 0
console.log(maxDepth(TreeNode.fromArray([]))); // 0
console.log(maxDepth(TreeNode.fromArray([0]))); // 1

/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.01%)
 * Likes:    13506
 * Dislikes: 261
 * Total Accepted:    3.9M
 * Total Submissions: 5.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -100 <= Node.val <= 100
 *
 *
 */
