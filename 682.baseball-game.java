import java.util.ArrayDeque;

// @lc code=start
class Solution {
    public int calPoints(String[] operations) {
        ArrayDeque<Integer> deque = new ArrayDeque<>();

        for (String op : operations) {
            switch (op) {
                case "+":
                    int top1 = deque.pollFirst();
                    int top2 = deque.pollFirst();

                    deque.offerFirst(top2);
                    deque.offerFirst(top1);

                    deque.offerFirst(top1 + top2);

                    break;

                case "D":
                    deque.offerFirst(2 * deque.peekFirst());

                    break;

                case "C":
                    deque.pollFirst();

                    break;

                default:
                    deque.offerFirst(Integer.valueOf(op));
            }
        }

        int sum = 0;

        while (!deque.isEmpty()) {
            sum += deque.poll();
        }

        return sum;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=682 lang=java
 *
 * [682] Baseball Game
 */