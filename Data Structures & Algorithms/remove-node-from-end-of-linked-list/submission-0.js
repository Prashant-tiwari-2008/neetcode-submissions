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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;
    
        let fast = dummy;
        let slow = dummy;

        // 2. Advance the fast pointer by n + 1 steps to create the required gap
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }
        
        // 3. Move both pointers together until the fast pointer reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        
        // 4. Skip the target node by updating the slow pointer's next reference
        slow.next = slow.next.next;
        
        // 5. Return the true head of the modified list
        return dummy.next;
    }
}
