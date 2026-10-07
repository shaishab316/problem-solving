
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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode left = dummy;
        ListNode right = dummy.next;

        while (right != null && right.next != null) {
            // Duplicate
            if (right.val == right.next.val) {
                while (right.next != null && right.val == right.next.val) {
                    right = right.next;
                }

                left.next = right.next; // Remove
            } else {
                left = left.next;
            }

            right = right.next;
        }

        return dummy.next;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=82 lang=java
 *
 * [82] Remove Duplicates from Sorted List II
 */