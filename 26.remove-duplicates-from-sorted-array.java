// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        int slow = 0;

        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[slow] != nums[fast]) {
                slow++; // Note: slow always one way late so we need to move

                nums[slow] = nums[fast];
            }
        }

        return slow + 1; // Note: slow always one way late so we need to move
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// Solution 1:
/*
 * class Solution {
 * public int removeDuplicates(int[] nums) {
 * List<Integer> temp = new ArrayList<>();
 * 
 * for (int num : nums) {
 * if (temp.isEmpty() || temp.getLast() != num) {
 * temp.add(num);
 * }
 * }
 * 
 * for (int i = 0; i < temp.size(); i++) {
 * nums[i] = temp.get(i);
 * }
 * 
 * return temp.size();
 * }
 * }
 */