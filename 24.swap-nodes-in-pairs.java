public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

// @lc code=start
class Solution {
    public ListNode swapPairs(ListNode node) {
        if (node == null || node.next == null) {
            return node;
        }

        ListNode next = node.next;
        ListNode nextNext = next.next;

        next.next = node;
        node.next = swapPairs(nextNext);

        return next;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=24 lang=java
 *
 * [24] Swap Nodes in Pairs
 */