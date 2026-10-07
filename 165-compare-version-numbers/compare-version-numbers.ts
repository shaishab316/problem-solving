// @lc code=start
function compareVersion(version1: string, version2: string): number {
	const v1 = version1.split(".");
	const v2 = version2.split(".");
	const maxLength = Math.max(v1.length, v2.length);
	for (let i = 0; i < maxLength; i++) {
		const num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
		const num2 = i < v2.length ? parseInt(v2[i], 10) : 0;

		if (num1 > num2) {
			return 1;
		} else if (num1 < num2) {
			return -1;
		}
	}

	return 0;
}
// @lc code=end

console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0", "1.0.0.0")); // 0
console.log(compareVersion("1.2", "1.10")); // -1
console.log(compareVersion("1.0.1", "1")); // 1
console.log(compareVersion("7.5.2.4", "7.5.3")); // -1

/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 *
 * https://leetcode.com/problems/compare-version-numbers/description/
 *
 * algorithms
 * Medium (42.20%)
 * Likes:    2757
 * Dislikes: 2760
 * Total Accepted:    544.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '"1.2"\n"1.10"'
 *
 * Given two version strings, version1 and version2, compare them. A version
 * string consists of revisions separated by dots '.'. The value of the
 * revision is its integer conversion ignoring leading zeros.
 *
 * To compare version strings, compare their revision values in left-to-right
 * order. If one of the version strings has fewer revisions, treat the missing
 * revision values as 0.
 *
 * Return the following:
 *
 *
 * If version1 < version2, return -1.
 * If version1 > version2, return 1.
 * Otherwise, return 0.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: version1 = "1.2", version2 = "1.10"
 *
 * Output: -1
 *
 * Explanation:
 *
 * version1's second revision is "2" and version2's second revision is "10": 2
 * < 10, so version1 < version2.
 *
 *
 * Example 2:
 *
 *
 * Input: version1 = "1.01", version2 = "1.001"
 *
 * Output: 0
 *
 * Explanation:
 *
 * Ignoring leading zeroes, both "01" and "001" represent the same integer
 * "1".
 *
 *
 * Example 3:
 *
 *
 * Input: version1 = "1.0", version2 = "1.0.0.0"
 *
 * Output: 0
 *
 * Explanation:
 *
 * version1 has less revisions, which means every missing revision are treated
 * as "0".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= version1.length, version2.length <= 500
 * version1 and version2 only contain digits and '.'.
 * version1 and version2 are valid version numbers.
 * All the given revisions in version1 and version2 can be stored in a 32-bit
 * integer.
 *
 *
 */
