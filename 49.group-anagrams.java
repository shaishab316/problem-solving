import java.util.*;

// @lc code=start
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<>();

        Map<String, List<String>> anagrams = new HashMap<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();

            Arrays.sort(chars);

            String key = new String(chars);

            if (anagrams.containsKey(key)) {
                anagrams.get(key).add(str);
            } else {
                anagrams.put(key, new ArrayList<>(Arrays.asList(str)));
            }

        }

        for (List<String> list : anagrams.values()) {
            result.add(list);
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=49 lang=java
 *
 * [49] Group Anagrams
 */