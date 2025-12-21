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

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return addTwoNumbers(l1, l2, 0);
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2, int carry) {
        // base
        if (l1 == null && l2 == null && carry == 0) {
            return null;
        }

        int sum = carry;

        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        ListNode newNode = new ListNode(sum % 10);
        newNode.next = addTwoNumbers(l1, l2, sum / 10);

        return newNode;

    }
}
// @lc code=end

/*
 * @lc app=leetcode id=2 lang=java
 *
 * [2] Add Two Numbers
 */
