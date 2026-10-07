// @lc code=start
function solution(isBadVersion: any) {
	return function (n: number): number {
		let left = 1;
		let right = n;

		while (left < right) {
			const mid = Math.floor(left + (right - left) / 2);
			if (isBadVersion(mid)) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}

		return left;
	};
}
// @lc code=end

console.log(solution((n: number) => n === 4)(5)); // 4
console.log(solution((n: number) => n === 1)(1)); // 1
console.log(solution((n: number) => n === 1)(2)); // 1
console.log(solution((n: number) => n === 1)(3)); // 1
console.log(solution((n: number) => n === 1)(4)); // 1

/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 *
 * https://leetcode.com/problems/first-bad-version/description/
 *
 * algorithms
 * Easy (45.79%)
 * Likes:    8680
 * Dislikes: 3373
 * Total Accepted:    1.9M
 * Total Submissions: 4.2M
 * Testcase Example:  '5\n4'
 *
 * You are a product manager and currently leading a team to develop a new
 * product. Unfortunately, the latest version of your product fails the quality
 * check. Since each version is developed based on the previous version, all
 * the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether
 * version is bad. Implement a function to find the first bad version. You
 * should minimize the number of calls to the API.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5, bad = 4
 * Output: 4
 * Explanation:
 * call isBadVersion(3) -> false
 * call isBadVersion(5) -> true
 * call isBadVersion(4) -> true
 * Then 4 is the first bad version.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, bad = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= bad <= n <= 2^31 - 1
 *
 *
 */
