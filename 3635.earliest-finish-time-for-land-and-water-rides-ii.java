// @lc code=start
class Solution {
    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {
        int ans = Integer.MAX_VALUE;
        int minLand = Integer.MAX_VALUE;
        int minWater = Integer.MAX_VALUE;

        for (int i = 0; i < landStartTime.length; i++) {
            minLand = Math.min(minLand, landStartTime[i] + landDuration[i]);
        }

        for (int j = 0; j < waterStartTime.length; j++) {
            minWater = Math.min(minWater, waterStartTime[j] + waterDuration[j]);
        }

        for (int i = 0; i < landStartTime.length; i++) {
            ans = Math.min(ans, Math.max(minWater, landStartTime[i]) + landDuration[i]);
        }

        for (int j = 0; j < waterStartTime.length; j++) {
            ans = Math.min(ans, Math.max(minLand, waterStartTime[j]) + waterDuration[j]);
        }

        return ans;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3635 lang=java
 *
 * [3635] Earliest Finish Time for Land and Water Rides II
 */