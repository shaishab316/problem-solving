import { TreeNode } from "./utils";

// @lc code=start
function mergeTrees(
	tree1: TreeNode | null,
	tree2: TreeNode | null
): TreeNode | null {
	if (!tree1) return tree2;
	if (!tree2) return tree1;

	const mergedTree = new TreeNode(tree1.val + tree2.val);
	mergedTree.left = mergeTrees(tree1.left, tree2.left);
	mergedTree.right = mergeTrees(tree1.right, tree2.right);

	return mergedTree;
}
// @lc code=end

console.log(
	mergeTrees(
		TreeNode.fromArray([1, 3, 2, 5]),
		TreeNode.fromArray([2, 1, 3, null, 4, null, 7])
	)
); // [3, 4, 5, 5, 4, null, 7]
console.log(mergeTrees(TreeNode.fromArray([1]), TreeNode.fromArray([1, 2]))); // [2, 2]
console.log(mergeTrees(null, TreeNode.fromArray([1, 2]))); // [1, 2]
console.log(mergeTrees(null, null)); // null
console.log(
	mergeTrees(TreeNode.fromArray([1, 2, 3]), TreeNode.fromArray([4, 5, 6]))
); // [5, 7, 9]

/*
 * @lc app=leetcode id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
 *
 * https://leetcode.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (78.66%)
 * Likes:    8927
 * Dislikes: 312
 * Total Accepted:    837.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * You are given two binary trees root1 and root2.
 *
 * Imagine that when you put one of them to cover the other, some nodes of the
 * two trees are overlapped while the others are not. You need to merge the two
 * trees into a new binary tree. The merge rule is that if two nodes overlap,
 * then sum node values up as the new value of the merged node. Otherwise, the
 * NOT null node will be used as the node of the new tree.
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 *
 *
 * Example 1:
 *
 *
 * Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
 * Output: [3,4,5,5,4,null,7]
 *
 *
 * Example 2:
 *
 *
 * Input: root1 = [1], root2 = [1,2]
 * Output: [2,2]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both trees is in the range [0, 2000].
 * -10^4 <= Node.val <= 10^4
 *
 *
 */
