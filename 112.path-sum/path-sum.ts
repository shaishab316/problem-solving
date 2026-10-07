import { TreeNode } from "./utils";

// @lc code=start
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;

	const remaining = targetSum - root.val;

	if (!root.left && !root.right) return remaining === 0;

	return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}
// @lc code=end

console.log(
	hasPathSum(
		TreeNode.fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
		22
	)
); // true
console.log(hasPathSum(TreeNode.fromArray([1, 2, 3]), 5)); // false
console.log(hasPathSum(null, 0)); // false
console.log(hasPathSum(TreeNode.fromArray([]), 0)); // false
console.log(hasPathSum(TreeNode.fromArray([1]), 1)); // true

/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (52.80%)
 * Likes:    10174
 * Dislikes: 1175
 * Total Accepted:    1.8M
 * Total Submissions: 3.4M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 * Explanation: There are two root-to-leaf paths in the tree:
 * (1 --> 2): The sum is 3.
 * (1 --> 3): The sum is 4.
 * There is no root-to-leaf path with sum = 5.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [], targetSum = 0
 * Output: false
 * Explanation: Since the tree is empty, there are no root-to-leaf paths.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 *
 */
