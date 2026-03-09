import java.util.Arrays;

// @lc code=start
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 1;
        int high = Arrays.stream(piles).max().getAsInt();

        int ans = 0;

        while (low <= high) {
            int mid = (low + high) / 2;
            long time = calcTime(mid, piles);

            if (time <= h) {
                ans = mid;

                high = mid - 1; // ? find next lowest
            } else {
                low = mid + 1; // ? find next highest
            }
        }

        return ans;
    }

    private long calcTime(int mid, int[] piles) {
        long sum = 0;

        for (int pile : piles) {
            sum += Math.ceilDiv(pile, mid);
        }

        return sum;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=875 lang=java
 *
 * [875] Koko Eating Bananas
 */
