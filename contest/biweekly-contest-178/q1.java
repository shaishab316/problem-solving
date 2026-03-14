import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {
  public int firstUniqueEven(int[] nums) {
    Map<Integer, Integer> freq = new HashMap<>();

    // ? first pass: calculate the freq of even numbers
    for (int num : nums) {
      // ? only for even number
      if (num % 2 == 0) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
      }
    }

    // ? second pass: get 0 freq first even number
    for (int num : nums) {
      // ? only for even number
      if (num % 2 == 1) {
        if (freq.get(num) == 0) {
          return num;
        }
      }
    }

    return -1;
  }
}