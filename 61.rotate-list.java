
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
    public ListNode rotateRight(ListNode head, int k) {
        // edge
        if (head == null) {
            return head;
        }

        int length = 0;

        ListNode copy = head;

        while (copy != null) {
            copy = copy.next;
            length++;
        }

        int rotation = k % length;

        if (rotation == 0) {
            return head;
        }

        ListNode result = null;

        // rotated frist

        copy = head;

        int rotationPvoit = length - rotation;

        // before of rotationPvoit

        while (rotationPvoit > 1) {
            copy = copy.next;

            rotationPvoit--;
        }

        result = copy.next;

        copy.next = null; // split

        // 2nd pass
        copy = result;

        while (copy.next != null) {
            copy = copy.next;
        }

        copy.next = head; // connect

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=61 lang=java
 *
 * [61] Rotate List
 */