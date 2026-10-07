// @lc code=start
function fizzBuzz(n: number): string[] {
	const arr = Array.from({ length: n }, (_, i) => {
		if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) return "FizzBuzz";
		if ((i + 1) % 3 === 0) return "Fizz";
		if ((i + 1) % 5 === 0) return "Buzz";
		return (i + 1).toString();
	});

	return arr;
}
// @lc code=end

console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(1)); // ["1"]
console.log(fizzBuzz(2)); // ["1","2"]

/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (74.23%)
 * Likes:    3011
 * Dislikes: 424
 * Total Accepted:    1.5M
 * Total Submissions: 2M
 * Testcase Example:  '3'
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 *
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * Example 2:
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 * Example 3:
 * Input: n = 15
 * Output:
 * ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 *
 *
 */
