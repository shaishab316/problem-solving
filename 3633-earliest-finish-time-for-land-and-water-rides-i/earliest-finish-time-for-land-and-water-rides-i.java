
// @lc code=start
class Solution {
    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {
        int minTime = Integer.MAX_VALUE;

        for (int i = 0; i < landStartTime.length; i++) {
            for (int j = 0; j < waterStartTime.length; j++) {
                int landFinish = landStartTime[i] + landDuration[i];
                int waterStart = Math.max(landFinish, waterStartTime[j]);
                int finish1 = waterStart + waterDuration[j];

                int waterFinish = waterStartTime[j] + waterDuration[j];
                int landStart = Math.max(waterFinish, landStartTime[i]);
                int finish2 = landStart + landDuration[i];

                int currentBest = Math.min(finish1, finish2);

                minTime = Math.min(minTime, currentBest);
            }
        }

        return minTime;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3633 lang=java
 *
 * [3633] Earliest Finish Time for Land and Water Rides I
 */