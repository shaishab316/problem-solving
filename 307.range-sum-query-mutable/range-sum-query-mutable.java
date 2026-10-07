
// @lc code=start
class NumArray {

    int[] tree;
    int[] nums;
    int n;

    public NumArray(int[] nums) {
        int n = nums.length;

        this.n = n;
        this.tree = new int[n + 1];
        this.nums = new int[n];

        for (int i = 0; i < n; i++) {
            update(i, nums[i]);
        }
    }

    public void update(int i, int val) {
        int delta = val - nums[i];

        nums[i] = val;

        i++;

        while (i <= n) {
            tree[i] += delta;

            i += i & (-i);
        }
    }

    public int sumRange(int left, int right) {
        return prefixSum(right + 1) - prefixSum(left);
    }

    private int prefixSum(int i) {
        int sum = 0;

        while (i > 0) {
            sum += tree[i];

            i -= i & (-i);
        }

        return sum;
    }
}
// @lc code=end

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(index,val);
 * int param_2 = obj.sumRange(left,right);
 */

/*
 * @lc app=leetcode id=307 lang=java
 *
 * [307] Range Sum Query - Mutable
 */
