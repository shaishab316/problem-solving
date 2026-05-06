
// @lc code=start
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length, totalGas = 0, totalCost = 0, currentGas = 0, start = 0;

        for (int i = 0; i < n; i++) {
            totalGas += gas[i];
            totalCost += cost[i];

            currentGas += gas[i] - cost[i];

            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }

        return totalGas >= totalCost ? start : -1;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=134 lang=java
 *
 * [134] Gas Station
 */