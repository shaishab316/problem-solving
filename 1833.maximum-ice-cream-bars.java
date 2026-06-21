
import java.util.Arrays;

// @lc code=start
class Solution {
    public int maxIceCream(int[] costs, int coins) {
        Arrays.sort(costs);

        int count = 0;

        for (int cost : costs) {
            if (cost > coins) {
                break;
            }
            count++;
            coins -= cost;
        }

        return count;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1833 lang=java
 *
 * [1833] Maximum Ice Cream Bars
 */