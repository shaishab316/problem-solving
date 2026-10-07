import { TreeNode } from "./utils";

// @lc code=start
function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
	if (!tree1 && !tree2) return true;
	if (!tree1 || !tree2) return false;

	return (
		tree1.val === tree2.val &&
		isSameTree(tree1.left, tree2.left) &&
		isSameTree(tree1.right, tree2.right)
	);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	if (!subRoot) return true;
	if (!root) return false;

	return (
		isSameTree(root, subRoot) ||
		isSubtree(root.left, subRoot) ||
		isSubtree(root.right, subRoot)
	);
}
// @lc code=end

console.log(
	isSubtree(TreeNode.fromArray([3, 4, 5, 1, 2]), TreeNode.fromArray([4, 1, 2]))
); // true
console.log(
	isSubtree(
		TreeNode.fromArray([3, 4, 5, 1, 2, null, null, null, null, 0]),
		TreeNode.fromArray([4, 1, 2])
	)
); // false
console.log(isSubtree(null, TreeNode.fromArray([4, 1, 2]))); // false
console.log(isSubtree(null, null)); // true
console.log(isSubtree(null, TreeNode.fromArray([4, 1, 2]))); // false

/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (49.79%)
 * Likes:    8547
 * Dislikes: 564
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values of subRoot and
 * false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree
 * and all of this node's descendants. The tree tree could also be considered
 * as a subtree of itself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the root tree is in the range [1, 2000].
 * The number of nodes in the subRoot tree is in the range [1, 1000].
 * -10^4 <= root.val <= 10^4
 * -10^4 <= subRoot.val <= 10^4
 *
 *
 */
