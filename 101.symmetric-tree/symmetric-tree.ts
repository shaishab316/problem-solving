import { TreeNode } from "./utils";

// @lc code=start
function isMirror(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
	if (!tree1 && !tree2) return true;
	if (!tree1 || !tree2) return false;

	return (
		tree1.val === tree2.val &&
		isMirror(tree1.left, tree2.right) &&
		isMirror(tree1.right, tree2.left)
	);
}

function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return true;

	return isMirror(root.left, root.right);
}
// @lc code=end

console.log(isSymmetric(TreeNode.fromArray([1, 2, 2, 3, 4, 4, 3]))); // true
console.log(isSymmetric(TreeNode.fromArray([1, 2, 2, null, 3, null, 3]))); // false
console.log(isSymmetric(null)); // true
console.log(isSymmetric(TreeNode.fromArray([1]))); // true
console.log(isSymmetric(TreeNode.fromArray([1, 2]))); // false

/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.05%)
 * Likes:    16037
 * Dislikes: 414
 * Total Accepted:    2.4M
 * Total Submissions: 4.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
 */
