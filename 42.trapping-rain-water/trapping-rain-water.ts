// @lc code=start
function trap(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let leftMax = 0;
	let rightMax = 0;
	let trappingWater = 0;

	while (left < right) {
		if (height[left] < height[right]) {
			if (height[left] >= leftMax) leftMax = height[left];
			else trappingWater += leftMax - height[left];
			left++;
		} else {
			if (height[right] >= rightMax) rightMax = height[right];
			else trappingWater += rightMax - height[right];
			right--;
		}
	}

	return trappingWater;
}
// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([2, 0, 2])); // 2
console.log(trap([1, 0, 3, 0, 5])); // 4
console.log(trap([5, 4, 1, 2])); // 14

/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (64.82%)
 * Likes:    34180
 * Dislikes: 605
 * Total Accepted:    2.8M
 * Total Submissions: 4.4M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue
 * section) are being trapped.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */
