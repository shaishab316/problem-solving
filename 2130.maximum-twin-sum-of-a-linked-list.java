class ListNode {
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
    public int pairSum(ListNode head) {
        // Step 1: Find the mid

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the helf

        ListNode prev = null;

        while (slow != null) {
            ListNode nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }

        // Step 3: calculate pair sum

        int max = 0;

        ListNode firstHalf = head;
        ListNode secoundHalf = prev;

        while (secoundHalf != null) {
            max = Math.max(max, firstHalf.val + secoundHalf.val);

            firstHalf = firstHalf.next;
            secoundHalf = secoundHalf.next;
        }

        return max;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=2130 lang=java
 *
 * [2130] Maximum Twin Sum of a Linked List
 */