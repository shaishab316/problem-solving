import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        List<Integer> less = new ArrayList<>();
        List<Integer> equal = new ArrayList<>();
        List<Integer> greater = new ArrayList<>();

        for (int num : nums) {
            if (num < pivot) {
                less.add(num);
            } else if (pivot < num) {
                greater.add(num);
            } else {
                equal.add(pivot);
            }
        }

        int idx = 0;

        for (int num : less) {
            nums[idx++] = num;
        }

        for (int num : equal) {
            nums[idx++] = pivot;
        }

        for (int num : greater) {
            nums[idx++] = num;
        }

        return nums;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=2161 lang=java
 *
 * [2161] Partition Array According to Given Pivot
 */