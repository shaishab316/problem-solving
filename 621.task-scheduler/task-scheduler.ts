// @lc code=start
function leastInterval(tasks: string[], n: number): number {
	const freq = new Uint32Array(26);
	for (const task of tasks) freq[task.charCodeAt(0) - 65]++;
	freq.sort((a, b) => b - a);
	const maxFreq = freq[0];
	let idleSlots = (maxFreq - 1) * n;

	for (let i = 1; i < 26 && freq[i] > 0; i++)
		idleSlots -= Math.min(maxFreq - 1, freq[i]);

	return tasks.length + Math.max(0, idleSlots);
}
// @lc code=end

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // 6
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3)); // 10
console.log(
	leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
); // 16
console.log(
	leastInterval(["A", "A", "A", "A", "A", "A", "B", "B", "B", "C", "C", "C"], 2)
); // 12

/*
 * @lc app=leetcode id=621 lang=typescript
 *
 * [621] Task Scheduler
 *
 * https://leetcode.com/problems/task-scheduler/description/
 *
 * algorithms
 * Medium (61.34%)
 * Likes:    11141
 * Dislikes: 2153
 * Total Accepted:    804.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '["A","A","A","B","B","B"]\n2'
 *
 * You are given an array of CPU tasks, each labeled with a letter from A to Z,
 * and a number n. Each CPU interval can be idle or allow the completion of one
 * task. Tasks can be completed in any order, but there's a constraint: there
 * has to be a gap of at least n intervals between two tasks with the same
 * label.
 *
 * Return the minimum number of CPU intervals required to complete all
 * tasks.
 *
 *
 * Example 1:
 *
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 *
 * Output: 8
 *
 * Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A
 * -> B.
 *
 * After completing task A, you must wait two intervals before doing A again.
 * The same applies to task B. In the 3^rd interval, neither A nor B can be
 * done, so you idle. By the 4^th interval, you can do A again as 2 intervals
 * have passed.
 *
 *
 * Example 2:
 *
 *
 * Input: tasks = ["A","C","A","B","D","B"], n = 1
 *
 * Output: 6
 *
 * Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
 *
 * With a cooling interval of 1, you can repeat a task after just one other
 * task.
 *
 *
 * Example 3:
 *
 *
 * Input: tasks = ["A","A","A", "B","B","B"], n = 3
 *
 * Output: 10
 *
 * Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B ->
 * idle -> idle -> A -> B.
 *
 * There are only two types of tasks, A and B, which need to be separated by 3
 * intervals. This leads to idling twice between repetitions of these
 * tasks.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= tasks.length <= 10^4
 * tasks[i] is an uppercase English letter.
 * 0 <= n <= 100
 *
 *
 */
