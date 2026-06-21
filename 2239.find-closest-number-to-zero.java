class Solution {
  public int findClosestNumber(int[] nums) {
    int ans = nums[0];

    for (int num : nums) {
      int currAbs = Math.abs(num);
      int ansAbs = Math.abs(ans);

      if (ansAbs > currAbs) {
        ans = num;
      } else if (currAbs == ansAbs && num > ans) {
        ans = num;
      }
    }

    return ans;
  }
}