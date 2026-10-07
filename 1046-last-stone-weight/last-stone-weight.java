
import java.util.PriorityQueue;

// @lc code=start
class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        for (int stone : stones) {
            maxHeap.offer(stone);
        }

        while (maxHeap.size() > 1) {
            int heaviest = maxHeap.poll();
            int secondHeaviest = maxHeap.poll();

            int difference = heaviest - secondHeaviest;

            if (difference > 0) {
                maxHeap.offer(difference); // reminder
            }
        }

        return maxHeap.isEmpty() ? 0 : maxHeap.peek();
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1046 lang=java
 *
 * [1046] Last Stone Weight
 */