// @lc code=start
class TrieNode {
	constructor(
		public children = new Map<string, TrieNode>(),
		public isEndOfWord = false
	) {}
}

class Trie {
	constructor(public root = new TrieNode()) {}

	insert(word: string): void {
		let node = this.root;
		for (const ch of word) {
			if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
			node = node.children.get(ch)!;
		}
		node.isEndOfWord = true;
	}

	search(word: string): boolean {
		let node = this.root;
		for (const ch of word) {
			if (!node.children.has(ch)) return false;
			node = node.children.get(ch)!;
		}
		return node.isEndOfWord;
	}

	startsWith(prefix: string): boolean {
		let node = this.root;
		for (const ch of prefix) {
			if (!node.children.has(ch)) return false;
			node = node.children.get(ch)!;
		}
		return true;
	}
}
// @lc code=end

console.log(new Trie().startsWith("app")); // false
console.log(new Trie().search("app")); // false

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true

/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (67.71%)
 * Likes:    12040
 * Dislikes: 149
 * Total Accepted:    1.3M
 * Total Submissions: 1.9M
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n' +
 * '[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to
 * efficiently store and retrieve keys in a dataset of strings. There are
 * various applications of this data structure, such as autocomplete and
 * spellchecker.
 *
 * Implement the Trie class:
 *
 *
 * Trie() Initializes the trie object.
 * void insert(String word) Inserts the string word into the trie.
 * boolean search(String word) Returns true if the string word is in the trie
 * (i.e., was inserted before), and false otherwise.
 * boolean startsWith(String prefix) Returns true if there is a previously
 * inserted string word that has the prefix prefix, and false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 *
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length, prefix.length <= 2000
 * word and prefix consist only of lowercase English letters.
 * At most 3 * 10^4 calls in total will be made to insert, search, and
 * startsWith.
 *
 *
 */
