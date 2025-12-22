class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

// @lc code=start
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=237 lang=java
 *
 * [237] Delete Node in a Linked List
 */
