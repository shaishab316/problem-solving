import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// @lc code=start
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        // step 1: sort the array;
        Arrays.sort(nums);

        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {
            // skip for first element;
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            /**
             * a + b + c = 0;
             * => b + c = -a;
             * 
             * we fix first element , then we use 2 sum;
             */

            int target = -nums[i];

            int left = i + 1; // first
            int right = n - 1; // last

            while (left < right) {

                int current_sum = nums[left] + nums[right];

                if (current_sum == target) {
                    List<Integer> list = new ArrayList<>();

                    // frist element
                    list.add(nums[i]);
                    // second element
                    list.add(nums[left]);
                    // third element
                    list.add(nums[right]);

                    result.add(list);

                    // skip duplicates from left;
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }

                    // skip duplicates from right
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                }

                else if (current_sum < target) {
                    left++;
                } else {
                    right--;
                }

            }

        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=15 lang=java
 *
 * [15] 3Sum
 */
