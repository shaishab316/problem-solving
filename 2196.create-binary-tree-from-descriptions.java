import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// @lc code=start
class Solution {
    public TreeNode createBinaryTree(int[][] descriptions) {
        Map<Integer, TreeNode> nodeMap = new HashMap<>();
        Set<Integer> childrens = new HashSet<>();

        for (int[] description : descriptions) {
            int parant = description[0];
            int child = description[1];
            boolean isLeft = description[2] == 1;

            if (!nodeMap.containsKey(parant)) {
                nodeMap.put(parant, new TreeNode(parant));
            }
            if (!nodeMap.containsKey(child)) {
                nodeMap.put(child, new TreeNode(child));
            }

            if (isLeft) {
                nodeMap.get(parant).left = nodeMap.get(child);
            } else {
                nodeMap.get(parant).right = nodeMap.get(child);
            }

            childrens.add(child);
        }

        for (Integer val : nodeMap.keySet()) {
            if (!childrens.contains(val)) {
                return nodeMap.get(val);
            }
        }

        return null;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=2196 lang=java
 *
 * [2196] Create Binary Tree From Descriptions
 */