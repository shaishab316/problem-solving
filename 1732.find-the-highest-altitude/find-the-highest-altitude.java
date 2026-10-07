class Solution {
	public int largestAltitude(int[] gain) {
		int sum = 0;
		int max = 0;

		for (int num : gain) {
			sum += num;
			max = Math.max(max, sum);
		}

		return max;
	}
}

/*
https://leetcode.com/problems/find-the-highest-altitude
*/
