class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

// @lc code=start
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }

        Map<Node, Node> map = new HashMap<>();

        Node newHead = new Node(head.val);

        map.put(head, newHead);

        Node oldTemp = head.next;
        Node newTemp = newHead;

        while (oldTemp != null) {
            Node copyNode = new Node(oldTemp.val);

            map.put(oldTemp, copyNode);

            newTemp.next = copyNode;

            oldTemp = oldTemp.next;
            newTemp = newTemp.next;
        }

        oldTemp = head;
        newTemp = newHead;

        while (oldTemp != null) {
            newTemp.random = map.get(oldTemp.random);

            oldTemp = oldTemp.next;
            newTemp = newTemp.next;
        }

        return newHead;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=138 lang=java
 *
 * [138] Copy List with Random Pointer
 */