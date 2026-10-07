import { TreeNode } from "./utils";

// @lc code=start
function sumOfLeftLeaves(
	node: TreeNode | null,
	isLeft: boolean = false
): number {
	if (!node) return 0;

	if (!node.left && !node.right && isLeft) return node.val;

	return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false);
}
// @lc code=end

console.log(sumOfLeftLeaves(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // 24
console.log(sumOfLeftLeaves(TreeNode.fromArray([1]))); // 0
console.log(sumOfLeftLeaves(TreeNode.fromArray([1, 2]))); // 2
console.log(sumOfLeftLeaves(TreeNode.fromArray([1, 2, 3, 4, 5]))); // 4
console.log(sumOfLeftLeaves(TreeNode.fromArray([1, null, 3, 4, null, 5]))); // 5
console.log(
	sumOfLeftLeaves(TreeNode.fromArray([1, 2, 3, null, 4, 5, null, 6]))
); // 10

/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 *
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (61.56%)
 * Likes:    5628
 * Dislikes: 315
 * Total Accepted:    703.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left
 * child of another node.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and
 * 15 respectively.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -1000 <= Node.val <= 1000
 *
 *
 */
