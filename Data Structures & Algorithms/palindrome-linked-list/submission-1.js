/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let forwordedHead = head;

        const check = (currentNode) => {
            if(currentNode == null)  return true;

            const isSubListValid = check(currentNode.next);
            if(!isSubListValid) return false;

            const isMatch = forwordedHead.val == currentNode.val;
            forwordedHead = forwordedHead.next;

            return isMatch;
        }

        return check(head)
    }

}
