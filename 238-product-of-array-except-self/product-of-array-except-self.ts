// @lc code=start
function productExceptSelf(nums: number[]): number[] {
	const n = nums.length;
	const result = new Array(n).fill(1);

	let left = 1;
	let right = 1;
	for (let i = 0, j = n - 1; i < n; i++, j--) {
		result[i] *= left;
		left *= nums[i];

		result[j] *= right;
		right *= nums[j];
	}

	return result;
}
// @lc code=end

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([0, 0])); // [0,0]
console.log(productExceptSelf([1, 2, 3, 4, 5])); // [120,60,40,30,24]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6])); // [720,360,240,180,144,120]

/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (67.63%)
 * Likes:    24106
 * Dislikes: 1550
 * Total Accepted:    3.6M
 * Total Submissions: 5.3M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The input is generated such that answer[i] is guaranteed to fit in a 32-bit
 * integer.
 *
 *
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The
 * output array does not count as extra space for space complexity analysis.)
 *
 */
