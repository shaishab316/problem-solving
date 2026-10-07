// @lc code=start
function defangIPaddr(address: string): string {
	return address.replace(/\./g, "[.]");
}
// @lc code=end

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
console.log(defangIPaddr("192.168.1.1")); // "192[.]168[.]1[.]1"
console.log(defangIPaddr("10.0.0.1")); // "10[.]0[.]0[.]1"
console.log(defangIPaddr("8.8.8.8")); // "8[.]8[.]8[.]8"

/*
 * @lc app=leetcode id=1108 lang=typescript
 *
 * [1108] Defanging an IP Address
 *
 * https://leetcode.com/problems/defanging-an-ip-address/description/
 *
 * algorithms
 * Easy (89.64%)
 * Likes:    2231
 * Dislikes: 1771
 * Total Accepted:    753.6K
 * Total Submissions: 840.6K
 * Testcase Example:  '"1.1.1.1"'
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 *
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 *
 *
 * Constraints:
 *
 *
 * The given address is a valid IPv4 address.
 *
 */
