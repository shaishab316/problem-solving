import java.util.Arrays;

class Solution {
  public long gcdSum(int[] nums) {
    int n = nums.length;
    int[] prefixGCDArr = new int[n];

    int max = Integer.MIN_VALUE;

    for (int i = 0; i < n; i++) {
      max = Math.max(max, nums[i]);

      prefixGCDArr[i] = gcd(nums[i], max);
    }

    Arrays.sort(prefixGCDArr);

    long result = 0;

    for (int left = 0, right = n - 1; left < right; left++, right--) {
      result += gcd(prefixGCDArr[left], prefixGCDArr[right]);
    }

    return result;
  }

  private static int gcd(int a, int b) {
    while (b != 0) {
      int tmp = b;
      b = a % b;
      a = tmp;
    }

    return a;
  }
}