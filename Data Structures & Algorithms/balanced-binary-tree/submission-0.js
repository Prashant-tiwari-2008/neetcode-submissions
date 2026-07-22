/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function getHeight(node) {
        if (!node) return 0;
        console.log("val",node.val)
        // 1. Get the height of the left subtree
        let leftHeight = getHeight(node.left);
        // 🚀 FIX: If the left side is already unbalanced, bubble the -1 up
        if (leftHeight === -1) return -1;

        // 2. Get the height of the right subtree
        let rightHeight = getHeight(node.right);
        // 🚀 FIX: If the right side is already unbalanced, bubble the -1 up
        if (rightHeight === -1) return -1;

        // 3. Check if the current node is unbalanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            console.log("inside -1 check", node.val)
            return -1; // 🚀 FIX: Return -1 instead of false
        }

        // 4. If balanced, return the actual height
        return 1 + Math.max(leftHeight, rightHeight);
    }
    return getHeight(root) !== -1;
  }
} 
