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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return;

        let slow = head;
        let fast = head;

        // break the linked list in 2 part
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse the 2nd part
        let prev = null;
        let curr = slow.next;
        slow.next = null;

        while(curr){
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        // now pick one value form both and merge
        let first = head;
        let second = prev;

        while(second){
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;

        }

    }
}
