# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverFromPreorder(self, traversal: str) -> TreeNode | None:
        stack = []
        i = 0

        while i < len(traversal):
            depth = 0
            while i < len(traversal) and traversal[i] == "-":
                depth += 1
                i += 1

            j = i
            while j < len(traversal) and traversal[j] != "-":
                j += 1
            node = TreeNode(int(traversal[i:j]))
            i = j

            while len(stack) > depth:
                stack.pop()

            if stack and not stack[-1].left:
                stack[-1].left = node
            elif stack:
                stack[-1].right = node

            stack.append(node)

        return stack[0]
