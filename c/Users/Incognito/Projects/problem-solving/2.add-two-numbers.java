// @lc code=start
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return addTwoNumbers(l1, l2, 0);
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2, int curry) {
        if (l1 == null && l2 == null && curry == 0) {
            return null;
        }

        int sum = curry;

        ListNode next1 = null;
        ListNode next2 = null;

        if (l1 != null) {
            sum += l1.val;
            next1 = l1.next;
        }

        if (l2 != null) {
            sum += l2.val;
            next2 = l2.next;
        }

        int value = sum % 10;
        int newCurry = sum / 10;

        ListNode result = new ListNode(value);

        // ? find next sum
        result.next = addTwoNumbers(next1, next2, newCurry);

        return result;
    }
}
// @lc code=end

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

/*
 * @lc app=leetcode id=2 lang=java
 *
 * [2] Add Two Numbers
 */