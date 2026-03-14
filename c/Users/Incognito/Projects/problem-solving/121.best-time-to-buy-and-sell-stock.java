
// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;

        int minBuy = prices[0];
        int maxProfit = Integer.MIN_VALUE;

        for (int right = 0; right < n; right++) {
            if (minBuy > prices[right]) {
                minBuy = prices[right];
            }

            maxProfit = Math.max(maxProfit, prices[right] - minBuy);
        }

        return maxProfit;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=121 lang=java
 *
 * [121] Best Time to Buy and Sell Stock
 */